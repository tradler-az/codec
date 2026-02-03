<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <footer class="bg-gray-50 px-8 pt-12 pb-6 mt-16">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Company Info -->
      <div class="flex flex-col gap-2.5">
        <span class="text-2xl font-bold text-blue-600">VueCodec</span>
        <p class="text-gray-600 leading-relaxed">
          Kenya's benchmark in Integrated Facilities Management — delivering unmatched efficiency, comfort,
          sustainability, compliance, and cost-effective results in facilities and properties that add value
          to every client and partner we serve.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col gap-2.5">
        <h4 class="text-lg font-semibold mb-1.5">Quick Links</h4>
        <nav class="flex flex-col gap-1.5">
          <router-link to="/" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Home
          </router-link>
          <router-link to="/about" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            About
          </router-link>
          <router-link to="/services" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Services
          </router-link>
          <router-link to="/contact" class="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Contact
          </router-link>
        </nav>
      </div>

      <!-- Contact Info -->
      <div class="flex flex-col gap-2.5">
        <h4 class="text-lg font-semibold mb-1.5">Contact</h4>
        <p class="text-sm text-gray-800 flex items-center gap-2">
          <font-awesome-icon :icon="faEnvelope" class="text-blue-600" />
          info@codec.co.ke
        </p>
        <p class="text-sm text-gray-800 flex items-center gap-2">
          <font-awesome-icon :icon="faPhone" class="text-blue-600" />
          +254 700 000000
        </p>
        <p class="text-sm text-gray-800 flex items-center gap-2">
          <font-awesome-icon :icon="faLocationDot" class="text-blue-600" />
          Nairobi, Kenya
        </p>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="max-w-7xl mx-auto mt-10 pt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-wrap">
      <p class="text-gray-700">&copy; 2024 Codec. All rights reserved.</p>

      <!-- Social Links -->
      <div class="flex gap-4 items-center">
        <a href="https://facebook.com" target="_blank" class="text-gray-600 text-xl hover:text-blue-600 transition-colors" aria-label="Facebook">
          <font-awesome-icon :icon="faFacebook" />
        </a>
        <a href="https://github.com" target="_blank" class="text-gray-600 text-xl hover:text-blue-600 transition-colors" aria-label="GitHub">
          <font-awesome-icon :icon="faGithub" />
        </a>
        <a href="https://linkedin.com" target="_blank" class="text-gray-600 text-xl hover:text-blue-600 transition-colors" aria-label="LinkedIn">
          <font-awesome-icon :icon="faLinkedin" />
        </a>
        <a href="https://instagram.com" target="_blank" class="text-gray-600 text-xl hover:text-blue-600 transition-colors" aria-label="Instagram">
          <font-awesome-icon :icon="faInstagram" />
        </a>
      </div>

      <!-- Policies -->
      <div class="flex gap-4">
        <router-link to="/privacy" class="text-sm text-blue-600 hover:underline">
          Privacy Policy
        </router-link>
        <router-link to="/terms" class="text-sm text-blue-600 hover:underline">
          Terms of Service
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Any additional custom styles if needed */
</style>