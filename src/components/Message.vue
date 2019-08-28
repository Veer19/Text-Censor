<template>
  
  <div class="message" :style="colorStyle">
    <div>
      <div >{{ text }}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    text: String,
    color:String
  },
    computed : {
    colorStyle() {
        return {
            // in the case of redComp, greenComp and blueComp are a vue prop or data
                background : this.color,
            };
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message{
    width: 300px;
    position: fixed;
    bottom: 50px;
    padding: 20px;
    color: whitesmoke;
}
</style>
