"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var admin = require("firebase-admin");
// Imports the Google Cloud client library
var vision = require("@google-cloud/vision");
// Creates a client
var client = new vision.ImageAnnotatorClient();
// Performs label detection on the image file
var config = {
    apiKey: "AIzaSyCmsbyvTLTaglw1PFO-gH5wIB87kPKQjCY",
    authDomain: "picsearch-19.firebaseapp.com",
    databaseURL: "https://picsearch-19.firebaseio.com",
    projectId: "picsearch-19",
    storageBucket: "picsearch-19.appspot.com",
    messagingSenderId: "563150183283",
    appId: "1:563150183283:web:370bce9b643713ee"
};
admin.initializeApp(config);
exports.labelDetection = functions.storage.object().onFinalize(function (object) {
    var filePath = object.name;
    var uid = filePath.split("/")[0];
    var fileName = filePath.split("/").pop();
    var bucket = admin.storage().bucket();
    var tempFilePath = '/tmp/' + fileName;
    if (!object.contentType.startsWith("image/")) {
        console.log("Not an image");
        return null;
    }
    return bucket.file(filePath).download({
        destination: tempFilePath
    })
    .then(function () {
        return client.labelDetection(tempFilePath);
    })
    .then(function (results) {
        var labelAnnotations = results[0].labelAnnotations;
        console.log('Labels:');
        let labels = labelAnnotations.map(labelAnnotation=> {return (labelAnnotation.description).toLowerCase()})
        let db = admin.firestore()
        return db.doc("users/"+uid+'/imageLabels/'+fileName).set({
            name:fileName,
            labels:labels,
            url: filePath
        })
    })
    .catch(function (err) {
        console.error('ERROR:', err);
    });
});