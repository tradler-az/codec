  <script setup>
  import Navbar from './components/AppNavBar.vue'
  import Footer from './components/AppFooter.vue'
import Loader from './components/Loader.vue'
import { onMounted, ref } from 'vue';

const pageLoader = ref(false)

onMounted(() => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      pageLoader.value = true
    }, 2000)
  })
})
</script>

<template>
<div >
  <Loader v-if="!pageLoader" />
  <div id="app" v-show="pageLoader">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</div>
</template>
<style>
#app {
  min-height: 100vh;
  font-family: 'Inter', 'SF Pro Display', 'Segoe UI', system-ui, -apple-system, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'SF Pro Display', 'Segoe UI', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  color: #2E2E2E;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #00A659;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #008547;
}
</style>
