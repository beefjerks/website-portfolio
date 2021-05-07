<template>
  <div class="wrapper">
    <v-container fluid ma-0 pa-0 home fill-height>
      <v-row  >
        <v-col class="img" cols="12" sm="12" md="6" >
            <v-img src="@/assets/KarinKohlmetz2.png" alt="placeholder"></v-img>
            </v-col>


        <v-col  class="text"  >
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
  --margin: 5%;
  width: calc(100% - var(--margin) * 2);
  height: 80vh;
  background-color: var(--v-secondary-base);
  margin: var(--margin);
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
   
}

@media screen and (max-width: 960px){
.wrapper {
  margin: 30px;
  height: auto;

}

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

