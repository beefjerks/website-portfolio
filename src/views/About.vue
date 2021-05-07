<template>
<div>
  <div class="wrapper">
    <v-container fluid ma-0 pa-0 fill-height>
      <v-row > 
        <v-col class="text" cols="12" sm="12" md="6" > 
          <div>
            <h1>Hello there!</h1>
            <p>I'm Karin Kohlmetz, a passionate and fun-loving Multimedia Designer and digital artist.</p>
          </div> 
        </v-col>

          <v-col class="img" cols="12" sm="12" md="6" >
            <v-img src="@/assets/KarinKohlmetz1.png" alt="placeholder"></v-img>
            </v-col>

      </v-row>  
    </v-container>  
  </div>
  
  <div class="wrapper">
    <v-container fluid ma-0 pa-0 fill-height>
      <v-row>
        <v-col class="img" cols="12" sm="12" md="6" >
        <iframe width="580" height="480" src="https://www.youtube.com/embed/j3-Uzfg_xO8?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-col>

         <v-col class="text" cols="12" sm="12" md="6" >  
          <div>
            <p>If you're interested in putting a voice to the face and website, check out my video resume! </p>
        </div>
        </v-col>
      </v-row>  
    </v-container>  
  </div>

</div> 





<!-- <section>
    <div class="img-container">
      <img src="" alt="placeholder">
    </div>
    <div class="about">
      <h1>About</h1>
    </div>
  </section>-->
  
  
</template>

<style lang="scss" scoped>

.img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    display: inline-block;
    max-width: 300px;
  }
}

/* .text div p{
  width: 70%;
  margin: 0;
} */

/* .wrapper {
  width: calc(100% - 70px * 2);
  height: 80vh;
  background-color: var(--v-secondary-base);
  margin: 70px;
  display: flex;
} */

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
/* section > div {
  width: 50%;
}

section .about {
  padding: 70px;
}
 */



</style>
