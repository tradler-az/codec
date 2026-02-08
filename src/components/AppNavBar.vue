<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronDown, faBroadcastTower, faBullhorn, faChartLine,
  faCode, faBook, faLifeRing, faNewspaper, faUsers, faBuilding,
  faGear, faShieldHalved, faCloud, faWifi
} from '@fortawesome/free-solid-svg-icons'

const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  activeDropdown.value = null
}

const openDropdown = (dropdown) => {
  activeDropdown.value = dropdown
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const servicesMenuItems = [
  {
    title: 'Digital Management',
    description: 'Integrated digital facilities platform',
    icon: faBroadcastTower,
    link: '/services/digital-management'  
  },
  {
    title: 'Operations Optimization',
    description: 'Smart scheduling and workflow automation',
    icon: faGear,
    link: '/services/operations-optimization'  
  },
  {
    title: 'Consultancy Services',
    description: 'Expert guidance and strategic planning',
    icon: faUsers,
    link: '/services/consultancy-services'  
  },
  {
    title: 'Advertising & Marketing',
    description: 'Digital campaigns and brand growth',
    icon: faBullhorn,
    link: '/services/advertising-marketing'  
  },
  {
    title: 'Analytics & Insights',
    description: 'Data-driven decision making',
    icon: faChartLine,
    link: '/services/analytics-insights'  
  },
  {
    title: 'Compliance & Security',
    description: 'Regulatory compliance and protection',
    icon: faShieldHalved,
    link: '/services/compliance-security'  
  }
]

const resourcesMenuItems = [
  {
    title: 'Documentation',
    description: 'Guides and API references',
    icon: faBook,
    link: '/resources/docs'
  },
  {
    title: 'Blog',
    description: 'Latest insights and updates',
    icon: faNewspaper,
    link: '/resources/blog'
  },
  {
    title: 'Support Center',
    description: 'Get help and answers',
    icon: faLifeRing,
    link: '/resources/support'
  },
  {
    title: 'Case Studies',
    description: 'Success stories from clients',
    icon: faBuilding,
    link: '/resources/case-studies'
  }
]
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
                src="../assets/optivalFM_2.png"
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

          <!-- Services Dropdown -->
          <div
            class="relative"
            @mouseenter="openDropdown('services')"
            @mouseleave="closeDropdown">
            <button
              class="relative px-5 py-3 text-dark-700 font-semibold hover:text-primary-600 transition-all duration-300 group flex items-center gap-2">
              <span class="relative z-10">Services</span>
              <font-awesome-icon
                :icon="faChevronDown"
                class="w-3 h-3 transition-transform duration-300"
                :class="activeDropdown === 'services' ? 'rotate-180' : ''" />
              <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-xl transition-all duration-300"></div>
              <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full transition-all duration-300"></div>
            </button>

            <!-- Services Mega Menu -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2">
              <div
                v-if="activeDropdown === 'services'"
                class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-dark-200/50 p-6 z-50">
                <div class="grid grid-cols-2 gap-3">
                  <router-link
                    v-for="item in servicesMenuItems"
                    :key="item.title"
                    :to="item.link"
                    class="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50 transition-all duration-300 border border-transparent hover:border-primary-200"
                    @click="closeDropdown(); closeMobileMenu();">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <font-awesome-icon :icon="item.icon" class="text-white text-lg" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="font-bold text-dark-800 mb-1 group-hover:text-primary-600 transition-colors">
                        {{ item.title }}
                      </h4>
                      <p class="text-xs text-dark-600 leading-relaxed">
                        {{ item.description }}
                      </p>
                    </div>
                  </router-link>
                </div>
                <div class="mt-4 pt-4 border-t border-dark-200/50">
                  <router-link
                    to="/services"
                    class="group inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
                    @click="closeDropdown(); closeMobileMenu();">
                    View all services
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>

          <!-- Resources Dropdown -->
          <div
            class="relative"
            @mouseenter="openDropdown('resources')"
            @mouseleave="closeDropdown">
            <button
              class="relative px-5 py-3 text-dark-700 font-semibold hover:text-primary-600 transition-all duration-300 group flex items-center gap-2">
              <span class="relative z-10">Resources</span>
              <font-awesome-icon
                :icon="faChevronDown"
                class="w-3 h-3 transition-transform duration-300"
                :class="activeDropdown === 'resources' ? 'rotate-180' : ''" />
              <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-xl transition-all duration-300"></div>
              <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full transition-all duration-300"></div>
            </button>

            <!-- Resources Mega Menu -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2">
              <div
                v-if="activeDropdown === 'resources'"
                class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-dark-200/50 p-6 z-50">
                <div class="grid grid-cols-2 gap-3">
                  <router-link
                    v-for="item in resourcesMenuItems"
                    :key="item.title"
                    :to="item.link"
                    class="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50 transition-all duration-300 border border-transparent hover:border-primary-200"
                    @click="closeDropdown(); closeMobileMenu();">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-primary-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <font-awesome-icon :icon="item.icon" class="text-white text-lg" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4 class="font-bold text-dark-800 mb-1 group-hover:text-primary-600 transition-colors">
                        {{ item.title }}
                      </h4>
                      <p class="text-xs text-dark-600 leading-relaxed">
                        {{ item.description }}
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </transition>
          </div>

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
          :class="isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'">
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

          <!-- Mobile Services Dropdown -->
          <div class="space-y-2">
            <button
              @click="activeDropdown = activeDropdown === 'services-mobile' ? null : 'services-mobile'"
              class="w-full flex items-center justify-between px-4 py-3 text-dark-700 font-semibold hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
              <span>Services</span>
              <font-awesome-icon
                :icon="faChevronDown"
                class="w-3 h-3 transition-transform duration-300"
                :class="activeDropdown === 'services-mobile' ? 'rotate-180' : ''" />
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :class="activeDropdown === 'services-mobile' ? 'max-h-[600px]' : 'max-h-0'">
              <div class="pl-4 space-y-2">
                <router-link
                  v-for="item in servicesMenuItems"
                  :key="item.title"
                  :to="item.link"
                  class="flex items-center gap-3 px-4 py-2 text-sm text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                  @click="closeMobileMenu">
                  <font-awesome-icon :icon="item.icon" class="w-4 h-4 text-primary-600" />
                  {{ item.title }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Mobile Resources Dropdown -->
          <div class="space-y-2">
            <button
              @click="activeDropdown = activeDropdown === 'resources-mobile' ? null : 'resources-mobile'"
              class="w-full flex items-center justify-between px-4 py-3 text-dark-700 font-semibold hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
              <span>Resources</span>
              <font-awesome-icon
                :icon="faChevronDown"
                class="w-3 h-3 transition-transform duration-300"
                :class="activeDropdown === 'resources-mobile' ? 'rotate-180' : ''" />
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :class="activeDropdown === 'resources-mobile' ? 'max-h-[400px]' : 'max-h-0'">
              <div class="pl-4 space-y-2">
                <router-link
                  v-for="item in resourcesMenuItems"
                  :key="item.title"
                  :to="item.link"
                  class="flex items-center gap-3 px-4 py-2 text-sm text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                  @click="closeMobileMenu">
                  <font-awesome-icon :icon="item.icon" class="w-4 h-4 text-teal-600" />
                  {{ item.title }}
                </router-link>
              </div>
            </div>
          </div>

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