<template>
  
  <div id="nav">
    <img :src="userData.photo">
    <div>
    <span><h3>{{userData.name}}</h3></span><br>
    <span id="logout" v-on:click="logout">Logout</span>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import firebase from "firebase"
import Router from './../router'

export default {
  name: 'Nav',
  props: {
    userData: Object
  },
  components: {
    Button,
  },
  methods:{
    logout: function(){
      console.log("Logging out")
      firebase.auth().signOut()
      .then(()=>{
        localStorage.removeItem('userData')
        Router.replace("/Login")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
    color: white;
    text-align: left;
    padding: 20px 50px;
    background:#3f51b5;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}

#nav a {
    color: #2c3e50;
}
#nav img{
    height: 60px;
    width: 60px;
    display: inline-block;
    border-radius: 50%;
}
#nav div {
    display: inline-block;
    margin-left: 20px;    
}
#logout{
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
#logout:hover{
  color:#e91e63;
}
#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
