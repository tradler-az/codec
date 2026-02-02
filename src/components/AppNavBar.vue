<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="logo">
        <span class="logo-text">Codec</span>
      </div>

      <button
        class="navbar-toggle"
        :class="{ 'is-active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation"
      >
        <span class="hamburger"></span>
      </button>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMobileMenuOpen }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item outline" @click="closeMobileMenu">Home</router-link>
        <router-link to="/about" class="navbar-item outline" @click="closeMobileMenu">About</router-link>
        <router-link to="/services" class="navbar-item outline" @click="closeMobileMenu">Services</router-link>
        <router-link to="/contact" class="navbar-item outline" @click="closeMobileMenu">Contact</router-link>
        </div>

      <div class="navbar-end">
        <router-link to="/login" class="btn outline" @click="closeMobileMenu">Log in</router-link>
        <router-link to="/signup" class="btn blur" @click="closeMobileMenu">Sign up</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  display: flex;
  z-index: 1000;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-image: url(../assets/highlands.jpeg);
  background-size: cover;
  background-position: center;
  color: white;
}

.navbar::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: -1;
}

.logo-text {
  padding-right: 400px;
  font-size: 1.5rem;
  font-weight: 700;
  background: #2563eb;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}


.navbar-menu {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
}

.navbar-start {
  display: flex;
  gap: 1rem;
}
.navbar-end {
  display: flex;
  gap: 1rem;
}

.navbar-item.outline {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 900;
  background: #60a5fa;
  border: 2px solid rgba(19, 146, 244, 0.717);
  border-radius: 0.5rem;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbar-item:hover {
  opacity: 0.8;
}


.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  color: white;
}


.btn.outline {
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: transparent;
}


.btn.outline:hover {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
}


.btn.blur {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(16px);
  border: none;
}


.navbar-toggle {
  display: none;
  background: none;
  border: none;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  width: 25px;
  height: 3px;
  background: white;
  display: block;
  position: relative;
  transition: 0.3s;
}

.hamburger::before {
  content: "";
  position: absolute;
  top: -8px;
}

.hamburger::after {
  content: "";
  position: absolute;
  top: 8px;
}


@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-start,
  .navbar-end {
    flex-direction: column;
    width: 100%;
  }
}
</style>
