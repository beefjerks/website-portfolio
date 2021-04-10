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
    background-color: var(--v-primary-base);
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


