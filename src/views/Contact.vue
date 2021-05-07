<template>
  <div class="wrapper" >
    
        
          <!-- <div class="icons">
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
           -->
             <v-row class="list">
               <v-col cols="12" sm="12">

        
          <v-list-item justify="center">
            <v-list-item-action>
              <a href="mailto:karinkohlmetz98@hotmail.com">
              <img src="@/assets/custom icons-03.png">
                 </a>
            </v-list-item-action>

            <v-list-item-content>
                <a href="mailto:karinkohlmetz98@hotmail.com">
                <p> karinkohlmetz98@hotmail.com </p>
                </a>
            </v-list-item-content>
          </v-list-item>


          <v-list-item >
            <v-list-item-action>
              <a target="_blanc" href="https://www.linkedin.com/in/karin-kohlmetz-a59948205/">
              <img src="@/assets/custom icons-01.png">
            </a>
            </v-list-item-action>

            <v-list-item-content >
                <a target="_blanc" href="https://www.linkedin.com/in/karin-kohlmetz-a59948205/">
                <p>Karin Kohlmetz</p>
                </a>
            </v-list-item-content>
          </v-list-item>


          <v-list-item>
            <v-list-item-action>
              <a target="_blanc" href="https://www.instagram.com/beef.jerks/">
              <img src="@/assets/custom icons-02.png">
            </a>
            </v-list-item-action>

            <v-list-item-content>
                <a target="_blanc" href="https://www.instagram.com/beef.jerks/">
                <p>@beef.jerks</p>
                </a>
            </v-list-item-content>
          </v-list-item>

          

          

        

       
      
    </v-col>
  </v-row>

  </div> 




  
  
</template>

<style lang="scss" scoped>


.wrapper {
  --margin: 5%;
  height: 80vh;
  background-color: var(--v-secondary-base);
  margin: var(--margin);
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3);

  
}



img {
  width: 8em;
  
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
     

        
        
    
    }),
  }
</script>

