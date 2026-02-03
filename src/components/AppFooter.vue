<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>


<template>
  <footer class="relative bg-white border-t border-[#00A659]/20 mt-24">
    <!-- Top glow accent -->
    <div class="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00A659]/40 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="space-y-4">
          <img
            src="../assets/optival-logo.png"
            alt="OptivalFM Logo"
            class="h-16 w-auto object-contain"
          />
          <p class="text-sm text-[#2E2E2E]/70 leading-relaxed">
            Optival FM is a modern digital platform delivering trusted content,
            innovation, and community-driven services.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-sm font-semibold text-[#2E2E2E] mb-4 uppercase tracking-wide">
            Company
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <router-link to="/about" class="footer-link">About</router-link>
            </li>
            <li>
              <router-link to="/services" class="footer-link">Services</router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">Contact</router-link>
            </li>
          </ul>
        </div>



      <!-- Contact Info -->
      <div class="flex flex-col gap-2.5">
        <h4 class="text-lg font-semibold mb-1.5">Contact</h4>
        <p class="text-sm text-gray-800 flex items-center gap-2">
          <font-awesome-icon :icon="faEnvelope" class="text-green-600" />
          info@codec.co.ke
        </p>
        <p class="text-sm text-gray-800 flex items-center gap-2">
          <font-awesome-icon :icon="faPhone" class="text-green-600" />
          +254 700 000000
        </p>
        <p class="text-sm text-gray-800 flex items-center gap-2">
          <font-awesome-icon :icon="faLocationDot" class="text-green-600" />
          Nairobi, Kenya
        </p>
      </div>
    



        <!-- Resources -->
        <div>
          <h4 class="text-sm font-semibold text-[#2E2E2E] mb-4 uppercase tracking-wide">
            Resources
          </h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="footer-link">Privacy Policy</a></li>
            <li><a href="#" class="footer-link">Terms of Service</a></li>
            <li><a href="#" class="footer-link">Support</a></li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="space-y-5">
          <h4 class="text-sm font-semibold text-[#2E2E2E] uppercase tracking-wide">
            Get Started
          </h4>
          <p class="text-sm text-[#2E2E2E]/70">
            Join Optival FM and explore modern digital solutions built for you.
          </p>
          <router-link
            to="/signup"
            class="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#00A659] to-[#00837B] rounded-lg shadow-lg shadow-[#00A659]/20 hover:shadow-xl hover:shadow-[#00A659]/30 transition-all duration-300"
          >
            Create Account
          </router-link>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-14 pt-6 border-t border-[#00A659]/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-[#2E2E2E]/60">
          © {{ new Date().getFullYear() }} Optival FM. All rights reserved.
        </p>

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
      </div>
    </div>
  </footer>
</template>
