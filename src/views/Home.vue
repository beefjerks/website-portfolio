<template>
  <div class="wrapper">
    <section>
    <div class="img-container">
      <img src="" alt="placeholder">
    </div>
    <div class="home">
      <h1>Karin Kohlmetz</h1>
    </div>
    </section>

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

section {
  width: calc(100%);
  height: 80vh;
  background-color: #FDF8F5;
  display: flex;
  
} 

section > div {
  width: 50%;
  

}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  
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

