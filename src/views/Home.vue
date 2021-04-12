<template>
  <div class="wrapper">
    <div class="img-container">
      <img src="" alt="placeholder">
    </div>
    <div class="home">
      <h1>This is a home page</h1>
      
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.wrapper {
  width: calc(100% - 70px * 2);
  height: 80vh;
  background-color: #FDF8F5;
  margin: 70px;
  display: flex;
}

.wrapper .img-container {
  width: 50%;
  

}


</style>


<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

