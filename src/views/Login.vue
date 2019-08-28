<template>
  <div class="login">
    <Button label="Login with Google" @click.native="loginWithGoogle"/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import firebase from "firebase"
import Router from './../router'

export default {
  name: 'login',
  data(){
    return {
    }
  },
  components: {
    Button
  },
  beforeMount(){
    
  },
  methods: {
    loginWithGoogle : function(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // The signed-in user info.
            var user = result.user;
            let userData = {
                'name':user.displayName,
                'email':user.email,
                'uid':user.uid,
                'photo':user.photoURL
            }
            console.log(userData)
            firebase.firestore().doc("users/"+user.uid).set(userData)
            .then(data=>{
                console.log("Setting Local User Variable")
                localStorage.setItem('userData',JSON.stringify(userData))
                console.log("Redirecting")
                Router.replace("/")
                
            })
            
        }).catch(function(error) {
            console.log(error.message)
        });
      
    }
  }
  
}
</script>
<style scoped>
.login{
  padding: 200px;
}
Button{
  display: inline-block;
}
</style>