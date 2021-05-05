<template>
<div class="wrapper">
  <v-container >
    
    <!-- Columns start at 100% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col  cols="12" md="4" class="product">
          <v-card class="pa-4">
            <v-img src="@/assets/Sign-upDesign.png" height="auto"></v-img>
              <v-card-title class="justify-center">
                Signup Application 
              </v-card-title>

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
                    Signup Application
                  </v-toolbar>
                  <v-card-text>
                      <v-row class="pa-4">
                        <v-col >
                          <img src="@/assets/Signup2.png">
                        </v-col>
                      
                      <v-col>
                          <img src="@/assets/Signup3.png">
                          </v-col>
                      </v-row>
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
        <v-card class="pa-4">
                <v-img src="@/assets/Slideshow_2.png" height="auto"></v-img>
                  <v-card-title class="justify-center">
                    OceanEye Website 
                  </v-card-title>
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
                      <v-row class="pa-4">
                        <v-col >
                          <img src="@/assets/Slideshow_1.png">
                        </v-col>
                      
                      <v-col>
                          <img src="@/assets/Slideshow_2.png">
                          </v-col>

                          <v-col>
                          <img src="@/assets/Slideshow_3.png">
                          </v-col>

                          <v-col>
                          <img src="@/assets/Slideshow_4.png">
                          </v-col>

                          <v-col>
                          <img src="@/assets/Slideshow_5.png">
                          </v-col>
                      </v-row>
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
        <v-card class="pa-4">
            <v-img src="@/assets/MuseumAppIcon.png" height="auto"></v-img>
              <v-card-title class="justify-center">
                Art Nouveau
              </v-card-title>
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
                    Art Nouveau
                  </v-toolbar>
                  <v-card-text>
                      <v-row class="pa-4">
                        <v-col>
                          <img src="@/assets/ArtN1.png" width="150%">
                        </v-col>
                      
                      <v-col>
                          <img src="@/assets/ArtN2.png" width="150%">
                          </v-col>

                          <v-col>
                          <img src="@/assets/ArtN3 (1).png" width="150%">
                          </v-col>
                      </v-row>
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
            <v-card class="pa-4">
            <v-img src="@/assets/greenrabbit.png" height="auto"></v-img>
              <v-card-title class="justify-center">
                Green Rabbits 
              </v-card-title>
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
                    Green Rabbits
                  </v-toolbar>
                  <v-card-text>
                      <v-row class="pa-4">
                        <v-col>
                          <img src="@/assets/greenrabbit.png" width="150%">
                        </v-col>
                      
                      <v-col>
                          <img src="@/assets/greenrabbit2.png" width="150%">
                          </v-col>

                          <v-col>
                          <img src="@/assets/greenrabbit3.png" width="150%">
                          </v-col>
                      </v-row>
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
            <v-card class="pa-4">
            <v-img src="@/assets/Sign-upDesign.png" height="auto"></v-img>
              <v-card-title class="justify-center">
                Digital art
              </v-card-title>
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
                    7-Kanten Project
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

.pa-4  {
font-family: "filson-pro";
}





</style>

<script>
    export default {
        
    }
</script>

