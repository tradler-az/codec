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
  <nav class="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-[#00A659]/20 shadow-lg">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">

        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-4 group">
          <div class="relative">
            <img
                src="../assets/optival-logo.png"
                alt="OptivalFM Logo"
                class="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="hidden lg:block h-14 w-px bg-[#00A659]/30"></div>
          </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
              to="/"
              class="relative px-5 py-2.5 text-[#2E2E2E] font-medium hover:text-[#00A659] transition-colors group"
              @click="closeMobileMenu">
            <span class="relative z-10">Home</span>
            <div class="absolute inset-0 bg-[#00A659]/0 group-hover:bg-[#00A659]/10 rounded-lg transition-all duration-300"></div>
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-[#00A659] transition-all duration-300"></div>
          </router-link>

          <router-link
              to="/about"
              class="relative px-5 py-2.5 text-[#2E2E2E] font-medium hover:text-[#00A659] transition-colors group"
              @click="closeMobileMenu">
            <span class="relative z-10">About</span>
            <div class="absolute inset-0 bg-[#00A659]/0 group-hover:bg-[#00A659]/10 rounded-lg transition-all duration-300"></div>
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-[#00A659] transition-all duration-300"></div>
          </router-link>

          <router-link
              to="/services"
              class="relative px-5 py-2.5 text-[#2E2E2E] font-medium hover:text-[#00A659] transition-colors group"
              @click="closeMobileMenu">
            <span class="relative z-10">Services</span>
            <div class="absolute inset-0 bg-[#00A659]/0 group-hover:bg-[#00A659]/10 rounded-lg transition-all duration-300"></div>
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-[#00A659] transition-all duration-300"></div>
          </router-link>

          <router-link
              to="/contact"
              class="relative px-5 py-2.5 text-[#2E2E2E] font-medium hover:text-[#00A659] transition-colors group"
              @click="closeMobileMenu">
            <span class="relative z-10">Contact</span>
            <div class="absolute inset-0 bg-[#00A659]/0 group-hover:bg-[#00A659]/10 rounded-lg transition-all duration-300"></div>
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-[#00A659] transition-all duration-300"></div>
          </router-link>
        </div>

        <!-- CTA Buttons -->
        <div class="hidden md:flex items-center gap-3">
          <router-link
              to="/login"
              class="px-5 py-2.5 text-[#2E2E2E] font-semibold hover:text-[#00A659] transition-colors"
              @click="closeMobileMenu">
            Log in
          </router-link>

          <router-link
              to="/signup"
              class="relative px-6 py-2.5 font-semibold text-white bg-gradient-to-r from-[#00A659] to-[#00837B] rounded-lg overflow-hidden group shadow-lg shadow-[#00A659]/20 hover:shadow-xl hover:shadow-[#00A659]/30 transition-all duration-300"
              @click="closeMobileMenu">
            <span class="relative z-10">Get Started</span>
            <div class="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
            class="md:hidden relative w-10 h-10 flex items-center justify-center"
            @click="toggleMobileMenu"
            aria-label="Toggle menu">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span
                class="w-full h-0.5 bg-[#00A659] rounded-full transition-all duration-300 origin-left"
                :class="isMobileMenuOpen ? 'rotate-45 translate-x-0.5' : ''"></span>
            <span
                class="w-full h-0.5 bg-[#2E2E2E] rounded-full transition-all duration-300"
                :class="isMobileMenuOpen ? 'opacity-0' : ''"></span>
            <span
                class="w-full h-0.5 bg-[#00A659] rounded-full transition-all duration-300 origin-left"
                :class="isMobileMenuOpen ? '-rotate-45 translate-x-0.5' : ''"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
          class="md:hidden overflow-hidden transition-all duration-300"
          :class="isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'">
        <div class="py-6 space-y-1 border-t border-[#00A659]/20">
          <router-link
              to="/"
              class="block px-4 py-3 text-[#2E2E2E] font-medium hover:text-[#00A659] hover:bg-[#00A659]/10 rounded-lg transition-all"
              @click="closeMobileMenu">
            Home
          </router-link>

          <router-link
              to="/about"
              class="block px-4 py-3 text-[#2E2E2E] font-medium hover:text-[#00A659] hover:bg-[#00A659]/10 rounded-lg transition-all"
              @click="closeMobileMenu">
            About
          </router-link>

          <router-link
              to="/services"
              class="block px-4 py-3 text-[#2E2E2E] font-medium hover:text-[#00A659] hover:bg-[#00A659]/10 rounded-lg transition-all"
              @click="closeMobileMenu">
            Services
          </router-link>

          <router-link
              to="/contact"
              class="block px-4 py-3 text-[#2E2E2E] font-medium hover:text-[#00A659] hover:bg-[#00A659]/10 rounded-lg transition-all"
              @click="closeMobileMenu">
            Contact
          </router-link>

          <div class="pt-4 space-y-2 border-t border-[#00A659]/20 mt-4">
            <router-link
                to="/login"
                class="block w-full px-4 py-3 text-center text-[#2E2E2E] font-semibold hover:text-[#00A659] hover:bg-[#00A659]/10 rounded-lg transition-all"
                @click="closeMobileMenu">
              Log in
            </router-link>

            <router-link
                to="/signup"
                class="block w-full px-4 py-3 text-center font-semibold text-white bg-gradient-to-r from-[#00A659] to-[#00837B] rounded-lg shadow-lg shadow-[#00A659]/20"
                @click="closeMobileMenu">
              Get Started
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
</style>