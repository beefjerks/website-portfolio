<template>
  <div class="wrapper">
    
  
<v-container >
   
    <!-- Columns start at 100% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col  cols="12" md="4" >
        <v-card class="pa-4" tile>
          
          <v-btn elevation="2">
            <p>See project</p>
          </v-btn>

        </v-card>
      </v-col>
      
      <v-col  cols="12" md="4" >
        <v-card class="pa-4" tile>
          
          <v-btn elevation="2">
            <p>See project</p>
          </v-btn>

        </v-card>
      </v-col>

      <v-col  cols="12" md="4" >
        <v-card class="pa-4" tile>
          
          <v-btn elevation="2">
            <p>See project</p>
          </v-btn>

        </v-card>
      </v-col>

      <v-col  cols="12" md="4" >
        <v-card class="pa-4" tile>
          
          <v-btn elevation="2">
            <p>See project</p>
          </v-btn>

        </v-card>
      </v-col>

      <v-col  cols="12" md="4" >
        <v-card class="pa-4" tile>
          
          <v-btn elevation="2">
            <p>See project</p>
          </v-btn>

        </v-card>
      </v-col>
    </v-row>

   
  </v-container>

  </div>
  
</template>

<style lang="scss" scoped>

/* .wrapper {
  height: 80vh;
  background-color: var(--v-secondary-base);
  margin: 70px;
  
} */

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

p {
  text-transform: none;
  margin: 0;
}






</style>

<script>
    export default {
        
    }
</script>

