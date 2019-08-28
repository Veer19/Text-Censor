<template>
  <div class="home">
    <Nav :userData="userData" />
    <input v-model="search" class="searchBox" placeholder="Search"/>
    <div class="uploadButton">
      <UploadInput/>
      <Button label='Upload Images'  @click.native="upload" />
    </div>
    <div class="imageTileContainer">
      <ImageTile class="imageTile" @click.native="openLightbox(image)" v-for="image in images" :url="image.url" :name="image.name" v-bind:key="image.name" :labels="image.labels" :searchLabel="search"/>
    </div>
    <Message v-if="uploadingImage.status" :text="uploadingImage.message" :color="uploadingImage.color"/>
    <Lightbox v-if="showLightBox" :image='lightboxImage' :$='this'/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import UploadInput from '@/components/UploadInput.vue'
import Button from '@/components/Button.vue'
import Message from '@/components/Message.vue'
import ImageTile from '@/components/ImageTile.vue'
import Lightbox from '@/components/Lightbox.vue'
import Router from './../router'
import firebase from "firebase"
export default {
  name: 'home',
  data(){
    return {
      images:[],
      search:"",
      userData:{},
      uploadingImage:{
        status:false,
        message:'',
        color:''
      },
      showLightBox:false,
      lightboxImage:{
        name:"",
        url:"",
        labels:[]
      }
    }
  },
  components: {
    Nav,
    UploadInput,
    Button,
    ImageTile,
    Message,
    Lightbox
  },
  beforeMount(){
    this.userData = JSON.parse(localStorage.getItem('userData'))
    console.log("USER DATA")
    console.log(this.userData)
    if(!this.userData){
      Router.push("/login")
    }
    let storageRef = firebase.storage().ref();
    let imageRef;
    let $ = this;
    firebase.firestore().collection("users/"+this.userData.uid + "/imageLabels")
    .onSnapshot(imgData=>{
      $.images = []
      imgData.forEach(image=>{
        imageRef = storageRef.child($.userData.uid + "/" + image.data().name);
        imageRef.getDownloadURL().then(function(url) {
          console.log(url)
          $.images.push(image.data())
          $.images[$.images.length-1]["url"] = url
        })
      })
      $.uploadingImage = {
        status : false,
        message : "",
        color : "#000"
      }
      console.log(this.images)
    })
  },
  methods: {
    upload : function(){
      let $ = this;
      $.uploadingImage = {
        status : true,
        message : "Uploading Images...",
        color : "#000"
      }
      let storageRef = firebase.storage().ref();
      let files = document.getElementsByClassName("fileInput")[0].files
      if(files.length == 0){
        $.uploadingImage = {
            status : true,
            message : "No Images Chosen",
            color : "#CB3837"
        }
        return
      }
      console.log(files)
      Array.from(files).forEach(file=>{
        console.log(file)
        if (!file.type.startsWith("image/")) {
          $.uploadingImage = {
            status : true,
            message : "Chosen file is not an image. Skipping it",
            color : "#CB3837"
          }
          return
        }
        storageRef.child(this.userData.uid+"/"+file.name).put(file).then(function(snapshot) {
          $.uploadingImage = {
            status : true,
            message : "Analyzing Image...",
            color : "#000"
          }
        })
        .catch(error=>{
          $.uploadingImage = {
            status : true,
            message : error.message,
            color : "#CB3837"
          }
        });
      })
      
    },
    openLightbox: function(image){
      this.showLightBox = true;
      this.lightboxImage = image
    }
  }
  
}
</script>
<style scoped>
.searchBox{
  padding: 30px;
  margin-top: -20px;
  font-size:130%;
  width: 30%;
  float: right;
  margin-right: 100px;
}
.imageTileContainer{
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-content: center;
  flex-wrap: wrap;
  padding: 100px;
}
.imageTile{
  display: inline-block;
}
.uploadButton {
  position: fixed;
  bottom: 50px;
  right: 50px;
}

</style>