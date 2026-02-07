<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>


<template>
  <footer class="relative bg-gradient-to-b from-white via-dark-50 to-dark-100 border-t border-dark-200 mt-32">
    <div class="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">

        <!-- Brand -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <img
              src="../assets/optival-logo.png"
              alt="OptivalFM Logo"
              class="h-14 w-auto object-contain"
            />
          </div>
          <p class="text-sm text-dark-600 leading-relaxed max-w-xs">
            Optival FM is a modern digital platform delivering trusted content,
            innovation, and community-driven services.
          </p>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span class="text-xs text-dark-500 font-semibold">Broadcasting Live</span>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-sm font-bold text-dark-800 mb-6 uppercase tracking-wider flex items-center gap-2">
            Company
            <div class="flex-1 h-px bg-gradient-to-r from-primary-500/30 to-transparent"></div>
          </h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/about" class="footer-link group inline-flex items-center gap-2 text-sm text-dark-600 hover:text-primary-600 transition-colors">
                <svg class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                About
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="footer-link group inline-flex items-center gap-2 text-sm text-dark-600 hover:text-primary-600 transition-colors">
                <svg class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link group inline-flex items-center gap-2 text-sm text-dark-600 hover:text-primary-600 transition-colors">
                <svg class="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                Contact
              </router-link>
            </li>
          </ul>
        </div>



      <!-- Contact Info -->
      <div>
        <h4 class="text-sm font-bold text-dark-800 mb-6 uppercase tracking-wider flex items-center gap-2">
          Contact
          <div class="flex-1 h-px bg-gradient-to-r from-primary-500/30 to-transparent"></div>
        </h4>
        <div class="space-y-4">
          <a href="mailto:info@codec.co.ke" class="group flex items-center gap-3 text-sm text-dark-600 hover:text-primary-600 transition-colors">
            <div class="w-9 h-9 rounded-lg bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center transition-colors">
              <font-awesome-icon :icon="faEnvelope" class="text-primary-600 group-hover:text-white transition-colors" />
            </div>
            <span>info@codec.co.ke</span>
          </a>
          <a href="tel:+254700000000" class="group flex items-center gap-3 text-sm text-dark-600 hover:text-primary-600 transition-colors">
            <div class="w-9 h-9 rounded-lg bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center transition-colors">
              <font-awesome-icon :icon="faPhone" class="text-primary-600 group-hover:text-white transition-colors" />
            </div>
            <span>+254 700 000000</span>
          </a>
          <div class="flex items-center gap-3 text-sm text-dark-600">
            <div class="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
              <font-awesome-icon :icon="faLocationDot" class="text-primary-600" />
            </div>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    



        <!-- CTA -->
        <div class="space-y-6">
          <h4 class="text-sm font-bold text-dark-800 mb-6 uppercase tracking-wider flex items-center gap-2">
            Get Started
            <div class="flex-1 h-px bg-gradient-to-r from-primary-500/30 to-transparent"></div>
          </h4>
          <p class="text-sm text-dark-600 leading-relaxed">
            Join Optival FM and explore modern digital solutions built for you.
          </p>
          <router-link
            to="/signup"
            class="group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-teal-500 rounded-xl shadow-green-lg hover:shadow-green-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <span class="relative z-10">Create Account</span>
            <svg class="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </router-link>

          <div class="pt-4">
            <p class="text-xs text-dark-500 mb-3 font-semibold">Resources</p>
            <ul class="space-y-2">
              <li><a href="#" class="text-xs text-dark-600 hover:text-primary-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-xs text-dark-600 hover:text-primary-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" class="text-xs text-dark-600 hover:text-primary-600 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-16 pt-8 border-t border-dark-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex flex-col md:flex-row items-center gap-4">
          <p class="text-sm text-dark-600 font-medium">
            © {{ new Date().getFullYear() }} Optival FM. All rights reserved.
          </p>
          <div class="hidden md:block w-px h-4 bg-dark-300"></div>
          <p class="text-xs text-dark-500">
            Built with <span class="text-red-500">Codec</span> in Kenya
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex gap-3 items-center">
          <a href="https://facebook.com" target="_blank" class="group w-10 h-10 rounded-xl bg-dark-200 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Facebook">
            <font-awesome-icon :icon="faFacebook" class="text-dark-600 group-hover:text-white transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" class="group w-10 h-10 rounded-xl bg-dark-200 hover:bg-dark-800 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="GitHub">
            <font-awesome-icon :icon="faGithub" class="text-dark-600 group-hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" class="group w-10 h-10 rounded-xl bg-dark-200 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
            <font-awesome-icon :icon="faLinkedin" class="text-dark-600 group-hover:text-white transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" class="group w-10 h-10 rounded-xl bg-dark-200 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
            <font-awesome-icon :icon="faInstagram" class="text-dark-600 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
