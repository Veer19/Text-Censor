<template>
  
  <div>
      <div class="imageContainer" v-if="labels.includes(searchLabel.toLowerCase())">
        <img :src="url">
        <h2>{{name}}</h2>
      </div>
      <div class="imageContainer" v-if="searchLabel==''">
        <img :src="url">
        <h2>{{name}}</h2>
      </div>
    
    
  </div>
  
</template>

<script>
export default {
  name: 'ImageTile',
  props: {
    url: String,
    name:String,
    labels:Array,
    searchLabel:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageContainer{
    
    width: 300px;
    border-radius: 5px;
    padding-bottom: 10px;
    overflow: hidden;
    margin: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.imageContainer img {
    width: 100%;
    margin-bottom: 10px;
    
}
</style>
