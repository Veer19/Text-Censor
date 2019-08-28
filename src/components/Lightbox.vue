<template>
  <div class="overlay">
  <div class="container">
    <div class="imageContainer">
        <img :src="image.url"/>
    </div>
    <div class="descriptionContainer">
        <div class="description">
            <br><br>
            <h1> {{image.name}} </h1>
            <br><br>
            <div class="labels">
                <p v-for="label in image.labels" v-bind:key="label">{{label}}</p>
            </div>
            <Button label="Close" @click.native="closeLightbox" />
        </div>
        
    </div>
    
  </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Lightbox',
  props: {
    image : Object,
    $:Object
  },
  components: {
    Button,
  },
  methods:{
    closeLightbox: function(){
        this.$.showLightBox = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay{
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    /* margin: 100px; */
    /* background-color: white;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */
    /* border-radius: 10px; */
    background-color: rgba(0,0,0,0.8);
    height: 100%;
    width: 100%;
}
.container{
    display: flex;
    justify-content:space-between;
}
.imageContainer{
    flex-grow: 2;
    margin: 100px;
    /* padding: 30px; */
    /* background-color: white; */
    /* box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */
    border-radius: 15px;
}
.imageContainer{
    display: inline-block;
}
.imageContainer img {
    width: 100%;
    border-radius: 15px;
    
}
.descriptionContainer{
    height: 100vh;
    width: 300px;
    flex-grow: 1;
    display: inline-block;
    background-color: white;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    border-radius: 10px;
}
.description{
    padding: 20px;
    margin: 0 0 100px 0;
}
.labels{
    text-align: left;

}
.labels p {
    padding: 10px;
    border-radius: 3px;
    margin: 10px 0px;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>
