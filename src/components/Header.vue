<template>
  <v-toolbar id="nav" app  >
    <router-link class="black--text px-15 text-decoration-none" to="/">Home</router-link> 
    <router-link class="black--text px-15 text-decoration-none" to="/about">About</router-link> 
    <router-link class="black--text px-15 text-decoration-none" to="/Gallery">Gallery</router-link>
    <router-link class="black--text px-15 text-decoration-none" to="/Contact">Contact</router-link>

  </v-toolbar>
  
</template>



<style lang="scss">

#nav {
  display: flex;
  justify-content: center;
  font-family: filson-pro, sans-serif;


}


</style>

<script>
  export default {
    name: 'Header',

    data: () => ({
      
    }),
  }
</script>