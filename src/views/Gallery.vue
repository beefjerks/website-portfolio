<template>
<div class="wrapper">
  <v-container >
    
    <!-- Columns start at 100% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-row>
      <v-col  cols="12" md="4" class="product">
        
          <v-card class="pa-4" >
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
                  <v-card-text class="Signup">
                      <v-row class="pa-4">
                        <v-col cols="12" md="6">
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
       

      <!-- <v-col  cols="12" md="4" class="product">
          <v-card class="pa-4" max-height="375px">
            <v-img class="onlyLogo" src="@/assets/onlyLogo.png"></v-img>
              <v-card-title class="justify-center">
                OceanEye project 
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
                        <v-col>
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
      </v-col> -->
      <v-col  cols="12" md="4" class="product">
            <v-card class="pa-4">
            <v-img src="@/assets/onlyLogo.png" height="auto"></v-img>
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
                      <v-row class="pa-4">
                        <v-col>
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
                  <v-card-text class="artN">
                      <v-row class="pa-4">
                        <v-col >
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
            <v-img src="@/assets/greenrabbit.png" height="auto"></v-img><!-- hej -->
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
                  <v-card-text >
                      <v-row >
                          <v-col cols="12">
                            <img class="greenrabbitimg1" src="@/assets/greenrabbit1.png" >
                          </v-col>
                      
                          <v-col cols="12">
                            <img class="greenrabbitimg2" src="@/assets/greenrabbit2.png">
                          </v-col>

                          <v-col cols="12">
                            <img class="greenrabbitimg3" src="@/assets/greenrabbit3.png">
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  
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

.artN {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
}

.signup {
  display: flex;
  
}

.greenrabbitimgs {
  display: flex;
  width: 70%;
  flex-direction: column;
}

.greenrabbitimg1 {
  width: 100%;
  
}

.greenrabbitimg2 {
  width: 100%;

}

.greenrabbitimg3 {
  width: 100%;

   
}

.v-responsive__sizer{
  padding-bottom: 100% !important /* <- very */;
}




</style>

<script>
  export default {
    data: () => ({
      
    }),
    methods: {

    },
    mounted() {
      function thisNeedsToStop ()  {
        const shitFuck = document.querySelectorAll('.pa-4 > div > div')
        console.log(shitFuck)
      }

      thisNeedsToStop()
    }
      
  }
</script>

