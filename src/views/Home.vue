<template>
  <div class="wrapper">
    <v-container fluid ma-0 pa-0 fill-height>
      <v-row >
        <v-col class="img" cols="12" sm="12" md="6" >
          <img src="@/assets/PlaceHolderPickles.png" alt="">
        </v-col>

        <v-col  class="text" cols="12" sm="12" md="6"  >
          <h1>Karin Kohlmetz</h1>
        </v-col>
      </v-row>

    </v-container>

  </div>
  
</template>

<style lang="scss" scoped>

.img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text{
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: calc(100% - 70px * 2);
  height: 80vh;
  background-color: var(--v-secondary-base);
  margin: 70px;
  display: flex;
}



/* .wrapper .img-container {
  width: 50%;
  

} */

/* section {
  width: calc(100%);
  height: 80vh;
  background-color: #FDF8F5;
  display: flex;
  
}  */

/* section > div {
  width: 50%;
  

}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  
} */




</style>


<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

