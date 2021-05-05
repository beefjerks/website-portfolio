<template>
<div class="wrapper">
  <v-container >
    <!-- Columns start at 100% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col  cols="12" md="4" class="product">
        <v-card class="pa-4" tile>

          <!-- <v-btn elevation="2">
          <p>See project</p>
          </v-btn> -->  

          <v-row justify="space-around">
            <v-col cols="auto">
            <v-dialog
            transition="dialog-bottom-transition"
            max-width="900"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="thirdiary" v-bind="attrs" v-on="on"> 
                View Project
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="thirdiary" dark>
                    OceanEye Concept Graphics
                  </v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Hello world!</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>



      <v-col  cols="12" md="4" class="product">
        <v-card class="pa-4" tile>
          <v-row justify="space-around">
            <v-col cols="auto">
            <v-dialog
            transition="dialog-bottom-transition"
            max-width="900"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="thirdiary" v-bind="attrs" v-on="on"> 
                View Project
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="thirdiary" dark>
                    OceanEye Concept Graphics
                  </v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Hello world!</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col  cols="12" md="4" class="product">
        <v-card class="pa-4" tile>
          <v-row justify="space-around">
            <v-col cols="auto">
            <v-dialog
            transition="dialog-bottom-transition"
            max-width="900"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="thirdiary" v-bind="attrs" v-on="on"> 
                View Project
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="thirdiary" dark>
                    OceanEye Concept Graphics
                  </v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Hello world!</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col  cols="12" md="4" class="product">
        <v-card class="pa-4" tile>
          <v-row justify="space-around">
            <v-col cols="auto">
            <v-dialog
            transition="dialog-bottom-transition"
            max-width="900"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="thirdiary" v-bind="attrs" v-on="on"> 
                View Project
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="thirdiary" dark>
                    OceanEye Concept Graphics
                  </v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Hello world!</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col  cols="12" md="4" class="product">
        <v-card class="pa-4" tile>
          <v-row justify="space-around">
            <v-col cols="auto">
            <v-dialog
            transition="dialog-bottom-transition"
            max-width="900"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="thirdiary" v-bind="attrs" v-on="on"> 
                View Project
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="thirdiary" dark>
                    OceanEye Concept Graphics
                  </v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">Hello world!</div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            </v-col>
          </v-row>
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


.product{
  &:nth-of-type(2){
    .pa-4{
      background-image: url("../assets/Sign-upDesign.png");
      background-size: cover;
  
    }
    
  }
  .pa-4 {
    display: flex;
    justify-content: center;
  }
} 






</style>

<script>
    export default {
        
    }
</script>

