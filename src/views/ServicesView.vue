<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faDesktop, faChartLine, faLightbulb, faBullhorn,
  faEye, faMagnifyingGlassChart, faLayerGroup, faRocket, faBuilding,
  faCheckCircle, faArrowRight
} from '@fortawesome/free-solid-svg-icons'

// Scroll Animation Directive
const vScroll = {
  mounted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) el.classList.add('animate-active')
      })
    }, { threshold: 0.1 })
    observer.observe(el)
  }
}

const coreServices = [
  {
    icon: faDesktop,
    title: 'Digital & Systems Management',
    description: 'End-to-end management of operational systems to ensure reliability and security.',
    features: ['Platform setup & administration', 'Systems optimization', 'Performance monitoring']
  },
  {
    icon: faChartLine,
    title: 'Operations Optimization',
    description: 'Streamlining workflows to reduce inefficiencies and improve performance.',
    features: ['Process analysis & improvement', 'Workflow automation support', 'Performance reporting'],
    featured: true
  },
  {
    icon: faLightbulb,
    title: 'Consultancy & Advisory',
    description: 'Strategic advisory to guide organizations in compliance and sustainable growth.',
    features: ['Digital strategy advisory', 'Compliance guidance', 'Risk & performance assessment']
  }
]
</script>

<template>
  <main class="bg-white pt-20">

    <!-- hero section -->
    <section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="../assets/office green6.jpeg"
          class="w-full h-full object-cover"
          alt="Services Background"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-800/80 to-dark-900/95"></div>
      </div>

      <!-- Animated glow effect -->
      <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-red-500/10 opacity-30 mix-blend-overlay"></div>

      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div v-scroll class="reveal-up inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold mb-6">
          What We Offer
        </div>
        <h1 v-scroll class="reveal-up text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Services</span>
        </h1>
        <p v-scroll class="reveal-up delay-200 text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
          OptivalFM provides structured, performance-driven solutions to optimize systems, improve visibility, and scale operations.
        </p>
      </div>
    </section>

    <!-- core services-->
    <section class="py-32 bg-gradient-to-b from-primary-50/30 via-white to-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-20">
          <div v-scroll class="reveal inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-4">
            Core Offerings
          </div>
          <h2 v-scroll class="reveal text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight">
            Core Service <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">Areas</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            v-for="(service, i) in coreServices"
            :key="i"
            v-scroll
            :style="{ transitionDelay: `${i * 150}ms` }"
            :class="[
              'reveal-up relative p-12 rounded-3xl transition-all duration-500 group overflow-hidden',
              service.featured
                ? 'bg-gradient-to-br from-red-500 via-red-600 to-primary-600 shadow-2xl shadow-red-500/20 hover:shadow-3xl hover:shadow-red-500/30 transform hover:scale-105'
                : 'bg-white shadow-xl shadow-primary-500/5 hover:shadow-2xl hover:shadow-primary-500/20 border border-dark-100 hover:border-primary-300 hover:-translate-y-2'
            ]"
          >
            <!-- Featured badge -->
            <div v-if="service.featured" class="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold">
              POPULAR
            </div>

            <div v-if="!service.featured" class="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-teal-500/5 transition-all duration-500"></div>

            <div v-if="service.featured" class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

            <div class="relative z-10">
              <div :class="[
                'w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500',
                service.featured
                  ? 'bg-white/20 backdrop-blur-sm text-white'
                  : 'bg-gradient-to-br from-primary-500/20 to-teal-500/20 text-primary-600'
              ]">
                <font-awesome-icon :icon="service.icon" class="text-2xl" />
              </div>

              <h3 :class="[
                'text-2xl font-bold mb-4 transition-colors',
                service.featured
                  ? 'text-white'
                  : 'text-dark-800 group-hover:text-primary-600'
              ]">
                {{ service.title }}
              </h3>

              <p :class="[
                'leading-relaxed mb-6',
                service.featured
                  ? 'text-white/90'
                  : 'text-dark-600'
              ]">
                {{ service.description }}
              </p>

              <ul class="space-y-3">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm"
                >
                  <span :class="[
                    'w-1.5 h-1.5 rounded-full',
                    service.featured ? 'bg-white' : 'bg-primary-500'
                  ]"></span>
                  <span :class="service.featured ? 'text-white/90' : 'text-dark-600'">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- marketing -->
    <section class="py-32 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-20">
          <div v-scroll class="reveal inline-block px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-semibold mb-4">
            Digital Growth
          </div>
          <h2 v-scroll class="reveal text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight">
            Advertising & <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-primary-500">Marketing</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-scroll class="reveal-left group p-10 bg-gradient-to-br from-teal-50 to-primary-50 rounded-3xl flex flex-col items-start gap-5 hover:shadow-xl transition-all duration-500 border border-teal-100 hover:border-teal-300">
            <div class="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="faBullhorn" class="text-2xl" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3 text-dark-800">Digital Advertising</h3>
              <p class="text-dark-600 leading-relaxed">Data-driven strategies focused on reach and conversion.</p>
            </div>
          </div>

          <div v-scroll class="reveal-up group p-10 bg-gradient-to-br from-primary-50 to-teal-50 rounded-3xl flex flex-col items-start gap-5 hover:shadow-xl transition-all duration-500 border border-primary-100 hover:border-primary-300">
            <div class="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="faEye" class="text-2xl" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3 text-dark-800">Brand Visibility</h3>
              <p class="text-dark-600 leading-relaxed">Strategic positioning to enhance market presence.</p>
            </div>
          </div>

          <div v-scroll class="reveal-right group p-10 bg-gradient-to-br from-teal-50 to-primary-50 rounded-3xl flex flex-col items-start gap-5 hover:shadow-xl transition-all duration-500 border border-teal-100 hover:border-teal-300">
            <div class="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="faMagnifyingGlassChart" class="text-2xl" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3 text-dark-800">Marketing Analytics</h3>
              <p class="text-dark-600 leading-relaxed">Performance measurement to maximize ROI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- packages -->
    <section class="relative py-32 bg-dark-900 overflow-hidden">
      <!-- Background image -->
      <div class="absolute inset-0">
        <img src="../assets/office green1.jpeg" class="w-full h-full object-cover opacity-20" alt="Background" />
        <div class="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/90 to-dark-900"></div>
      </div>

      <!-- Decorative blobs -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div class="mb-20">
          <div v-scroll class="reveal inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold mb-6">
            Choose Your Plan
          </div>
          <h2 v-scroll class="reveal text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Service <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Packages</span>
          </h2>
          <p v-scroll class="reveal text-xl text-white/70 max-w-3xl mx-auto font-light">
            Flexible solutions designed to scale with your business needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <!-- Starter -->
          <div v-scroll class="reveal-up group bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl text-white hover:bg-white/10 hover:border-primary-500/50 transition-all duration-500">
            <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors">
              <font-awesome-icon :icon="faRocket" class="text-3xl text-primary-400 group-hover:text-white" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Starter</h3>
            <p class="text-white/60 mb-8 leading-relaxed">Essential support for startups and small teams.</p>
            <router-link to="/contact" class="block w-full py-4 rounded-xl border-2 border-white/20 hover:bg-white hover:text-dark-900 transition-all font-bold group-hover:border-white/40">
              Inquire Now
            </router-link>
          </div>

          <!-- Professional - Featured -->
          <div v-scroll class="reveal-up delay-150 group bg-gradient-to-br from-primary-500 to-teal-500 p-10 rounded-3xl text-white shadow-2xl shadow-primary-500/30 transform scale-105 hover:scale-110 transition-all duration-500 relative overflow-hidden">
            <div class="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold">
              RECOMMENDED
            </div>
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <div class="relative z-10">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <font-awesome-icon :icon="faLayerGroup" class="text-3xl text-white" />
              </div>
              <h3 class="text-3xl font-bold mb-4">Professional</h3>
              <p class="text-white/90 mb-8 leading-relaxed">Optimization-focused solutions for growing organizations.</p>
              <router-link to="/contact" class="block w-full py-4 rounded-xl bg-white text-primary-600 hover:bg-dark-50 transition-all font-bold shadow-lg">
                Get Started
              </router-link>
            </div>
          </div>

          <!-- Enterprise -->
          <div v-scroll class="reveal-up delay-300 group bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl text-white hover:bg-white/10 hover:border-teal-500/50 transition-all duration-500">
            <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
              <font-awesome-icon :icon="faBuilding" class="text-3xl text-teal-400 group-hover:text-white" />
            </div>
            <h3 class="text-3xl font-bold mb-4">Enterprise</h3>
            <p class="text-white/60 mb-8 leading-relaxed">Tailored, large-scale management and advisory solutions.</p>
            <router-link to="/contact" class="block w-full py-4 rounded-xl border-2 border-white/20 hover:bg-white hover:text-dark-900 transition-all font-bold group-hover:border-white/40">
              Contact Sales
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* animation of the items */
.reveal, .reveal-up, .reveal-left, .reveal-right {
  opacity: 0;
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal-up { transform: translateY(40px); }
.reveal-left { transform: translateX(-40px); }
.reveal-right { transform: translateX(40px); }

.animate-active {
  opacity: 1 !important;
  transform: translate(0, 0) !important;
}
</style>
