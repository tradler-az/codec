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

<template>
  <nav class="fixed top-0 left-0 w-full z-[1000] bg-white/90 backdrop-blur-xl border-b border-dark-200/50 shadow-lg">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-4 group">
          <div class="relative">
            <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 rounded-xl transition-colors duration-300 -m-2"></div>
            <img
                src="../assets/optival-logo.png"
                alt="OptivalFM Logo"
                class="relative h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <div class="hidden lg:block h-12 w-px bg-gradient-to-b from-transparent via-primary-500/30 to-transparent"></div>
          </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-2">
          <router-link
              to="/"
              class="relative px-5 py-3 text-dark-700 font-semibold hover:text-primary-600 transition-all duration-300 group"
              @click="closeMobileMenu">
            <span class="relative z-10">Home</span>
            <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-xl transition-all duration-300"></div>
            <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full transition-all duration-300"></div>
          </router-link>

          <router-link
              to="/about"
              class="relative px-5 py-3 text-dark-700 font-semibold hover:text-primary-600 transition-all duration-300 group"
              @click="closeMobileMenu">
            <span class="relative z-10">About</span>
            <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-xl transition-all duration-300"></div>
            <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full transition-all duration-300"></div>
          </router-link>

          <router-link
              to="/services"
              class="relative px-5 py-3 text-dark-700 font-semibold hover:text-primary-600 transition-all duration-300 group"
              @click="closeMobileMenu">
            <span class="relative z-10">Services</span>
            <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-xl transition-all duration-300"></div>
            <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full transition-all duration-300"></div>
          </router-link>

          <router-link
              to="/contact"
              class="relative px-5 py-3 text-dark-700 font-semibold hover:text-primary-600 transition-all duration-300 group"
              @click="closeMobileMenu">
            <span class="relative z-10">Contact</span>
            <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-xl transition-all duration-300"></div>
            <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full transition-all duration-300"></div>
          </router-link>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center gap-4">
          <router-link
              to="/login"
              class="px-5 py-2.5 text-dark-700 font-semibold hover:text-primary-600 transition-all duration-300"
              @click="closeMobileMenu">
            Log in
          </router-link>

          <router-link
              to="/signup"
              class="group relative px-6 py-3 font-bold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-teal-500 rounded-xl overflow-hidden shadow-green-lg hover:shadow-green-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105"
              @click="closeMobileMenu">
            <span class="relative z-10 flex items-center gap-2">
              Get Started
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
            class="md:hidden relative w-11 h-11 flex items-center justify-center rounded-xl hover:bg-primary-50 transition-colors duration-300"
            @click="toggleMobileMenu"
            aria-label="Toggle menu">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span
                class="w-full h-0.5 bg-primary-600 rounded-full transition-all duration-300 origin-left"
                :class="isMobileMenuOpen ? 'rotate-45 translate-x-0.5' : ''"></span>
            <span
                class="w-full h-0.5 bg-dark-700 rounded-full transition-all duration-300"
                :class="isMobileMenuOpen ? 'opacity-0' : ''"></span>
            <span
                class="w-full h-0.5 bg-primary-600 rounded-full transition-all duration-300 origin-left"
                :class="isMobileMenuOpen ? '-rotate-45 translate-x-0.5' : ''"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
          class="md:hidden overflow-hidden transition-all duration-300"
          :class="isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'">
        <div class="py-6 space-y-2 border-t border-dark-200/50">
          <router-link
              to="/"
              class="block px-4 py-3 text-dark-700 font-semibold hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
              @click="closeMobileMenu">
            Home
          </router-link>

          <router-link
              to="/about"
              class="block px-4 py-3 text-dark-700 font-semibold hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
              @click="closeMobileMenu">
            About
          </router-link>

          <router-link
              to="/services"
              class="block px-4 py-3 text-dark-700 font-semibold hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
              @click="closeMobileMenu">
            Services
          </router-link>

          <router-link
              to="/contact"
              class="block px-4 py-3 text-dark-700 font-semibold hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
              @click="closeMobileMenu">
            Contact
          </router-link>

          <div class="pt-4 space-y-3 border-t border-dark-200/50 mt-4">
            <router-link
                to="/login"
                class="block w-full px-4 py-3 text-center text-dark-700 font-semibold hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
                @click="closeMobileMenu">
              Log in
            </router-link>

            <router-link
                to="/signup"
                class="group block w-full px-4 py-3 text-center font-bold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-teal-500 rounded-xl shadow-green-lg hover:shadow-green-xl transition-all relative overflow-hidden"
                @click="closeMobileMenu">
              <span class="relative z-10">Get Started</span>
              <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Active route styling */
.router-link-active {
  color: #00A659 !important;
}

.router-link-active .absolute.bottom-1 {
  width: 50% !important;
}
</style>