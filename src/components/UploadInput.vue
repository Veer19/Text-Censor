<template>
  
  <div class="uploadInputContainer">
    <div>
      <input class="fileInput" type="file" multiple>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadInput',
  props: {
    label: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uploadInputContainer{
  width: 100%;
  background: #f9f9f9;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.fileInput {
  width: 100%;
  color: transparent;
}
.fileInput::-webkit-file-upload-button {
  visibility: hidden;
}
.fileInput::before {
  content: 'Choose File';
  color:black;
  display: inline-block;
  background: white;
  border-radius: 5px;
  padding: 10px 15px;
  outline: none;
  font-size: 120%;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
}
.fileInput:hover::before {
  border-color: black;
}
.fileInput:active {
  outline: 0;
}
.fileInput:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
}

.button{
    padding:10px;
    display: inline-block;
    color: white;
    background: #e91e63;
}
</style>
