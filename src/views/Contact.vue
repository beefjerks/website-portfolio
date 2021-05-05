<template>
  <div class="wrapper">
    <v-container fluid ma-0 pa-0 fill-height>
      <v-row>
        <v-col class="text" cols="12" sm="12" md="6" >
        <h1>Contact me</h1>
        </v-col>


        <v-col class="img" cols="12" sm="12" md="6" >
        <img src="@/assets/PlaceHolderPickles.png" alt="placeholder">
        </v-col>

        
      </v-row>
    </v-container>
  </div>
  
</template>

<style lang="scss" scoped>

.wrapper {
  --margin: 5%;
  width: calc(100% - var(--margin) * 2);
  height: 80vh;
  background-color: var(--v-secondary-base);
  margin: var(--margin);
  display: flex;
  
}

@media screen and (max-width: 600px){
.wrapper {
  margin: 30px
}
}



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

/* .wrapper .img-container {
  width: 50%;
  

}

section {
  width: calc(100%);
  height: 80vh;
  background-color: #FDF8F5;
  display: flex;
} 

.wrapper > div {
  width: 50%;
  

}

section .contact {
  padding: 70px;
} */


</style>

<script>
    export default {
        
    }
</script>

