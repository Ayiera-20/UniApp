<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
 <v-app class="appShell">
    <Navbar/>
    <v-main class="appMain">
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>

  
</template>

<style scoped>
.appShell{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.appMain{
  flex: 1 1 auto;
}
</style>
