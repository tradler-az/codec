  <script setup>
  import Navbar from './components/AppNavBar.vue'
  import Footer from './components/AppFooter.vue'
  </script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    </div>
</template>
<style>
#app {
  min-height: 100vh;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'segoe ui', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
