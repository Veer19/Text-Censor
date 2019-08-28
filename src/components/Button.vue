<template>
  
  <div class="">
    <div>
      <div class="button">{{ label }}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uploadButtonContainer{
  width: 100%;
  position: fixed;
  bottom: 50px;
  right: 50px;
  background: #f9f9f9;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.button{
    width: 100%;
    padding:10px;
    display: inline-block;
    color: white;
    background: #e91e63;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>
