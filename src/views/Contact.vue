<template>
  <div class="wrapper">
    <v-container fluid ma-0 pa-0 fill-height>
      <v-row>
        <v-col class="text" cols="12" sm="12" md="6" >
    
   <div>
        <h1>Contact me</h1>
          </div>
          <div class="icons">
            <a href="mailto:karinkohlmetz98@hotmail.com">
              <img src="@/assets/custom icons-03.png">
              <p> karinkohlmetz98@hotmail.com </p>
                 </a> 

            <a target="_blanc" href="https://www.linkedin.com/in/karin-kohlmetz-a59948205/">
              <img src="@/assets/custom icons-01.png">
              <p>Karin Kohlmetz</p>
            </a>

            <a target="_blanc" href="https://www.instagram.com/beef.jerks/">
              <img src="@/assets/custom icons-02.png">
              <p>@beef.jerks</p>
            </a>

          </div> 
          
          
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  
}

@media screen and (max-width: 960px){
.wrapper {
  margin: 30px;
  height: auto;

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

.icons {
  display: flex;
  flex-direction: column;
  width: 200px;
  font-size: 100px;
  
}

.icons img {
  width: 1em;
  
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
    data: () => ({
    
    })
  }
</script>

