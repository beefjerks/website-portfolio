<template>
  <v-app id="app">
    
 <v-content>
    
    <Header/>
    
    
    

   
    <router-view/>
    
    </v-content>
    </v-app>
</template>




<style lang="scss">
#app {
  background: url('./assets/Home.png'), var(--v-primary-base); 
  background-size: 100% 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

h1, h2, h3, h4, h5, h6 {
    font-family: Active, sans-serif;
    text-transform: uppercase;
}

h1 {
  font-size: 50px;
}

p {
  font-family: 'filson-pro';
  font-size: 20px;
}


</style>


<script>
import Header from '@/components/Header';

export default {
  name:'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>


