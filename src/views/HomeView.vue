<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLineChart, faSatelliteDish, faShield, faRocket, faGlobeAmericas, faBrain, faSatellite } from '@fortawesome/free-solid-svg-icons'
import { ref, computed } from 'vue'

const activeSlide = ref(0)
// Carousel Slides Data
const slides = [
  {
    title: 'Connecting Communities Through Digital Media',
    subtitle: 'Optival FM delivers trusted content, innovation, and impact.',
    cta: 'Get Started',
    image: new URL('../assets/office green1.jpeg', import.meta.url).href
  },
  {
    title: 'Modern Broadcasting Meets Technology',
    subtitle: 'A smarter way to engage, inform, and grow audiences.',
    cta: 'Our Services',
    image: new URL('../assets/office green2.jpeg', import.meta.url).href
  },
  {
    title: 'Your Voice. Your Platform.',
    subtitle: 'We empower stories, brands, and communities.',
    cta: 'Partner With Us',
    image: new URL('../assets/office green3.jpeg', import.meta.url).href
  }
]
// Partners Data
const partners = [
  { name: 'Partner 1', logo: new URL('../assets/p dosh.png', import.meta.url).href },
  { name: 'Partner 2', logo: new URL('../assets/p epra.png', import.meta.url).href },
  { name: 'Partner 3', logo: new URL('../assets/p nca.png', import.meta.url).href },
  { name: 'Partner 4', logo: new URL('../assets/p nema.png', import.meta.url).href },
  { name: 'Partner 5', logo: new URL('../assets/p kebs.png', import.meta.url).href },
]

const features = computed(() => [
  {
    title: 'Trusted Content',
    desc: 'Accurate, unbiased, and high-quality journalism that builds lasting credibility with our listeners.',
    icon: faShield
  },
  {
    title: 'Innovative Platforms',
    desc: 'Leveraging AI and cloud-native technology to provide a seamless, multi-device listening experience.',
    icon: faRocket
  },
  {
    title: 'Community Impact',
    desc: 'Driving social change and local growth by giving a powerful voice to the stories that matter most.',
    icon: faGlobeAmericas
  }
])


// Scroll Animation
const vScroll = {
  mounted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-active');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  }
}

const nextSlide = () => { activeSlide.value = (activeSlide.value + 1) % slides.length }
const prevSlide = () => { activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length }
</script>

<template>
  <main class="pt-32 bg-white">

    <!-- HERO CAROUSEL -->
    <section class="relative overflow-hidden mb-32">
      <div class="max-w-8xl mx-auto px-6 lg:px-8">
        <div class="relative rounded-3xl min-h-[600px] flex items-center overflow-hidden shadow-2xl">

          <transition name="fade" mode="out-in">
            <div
              :key="activeSlide"
              class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
              :style="{ backgroundImage: `url(${slides[activeSlide].image})` }"
            ></div>
          </transition>

          <div class="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-800/60 to-transparent"></div>

          <!-- Animated glow effect -->
          <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-red-500/10 opacity-30 mix-blend-overlay"></div>

          <!-- Slide Content -->
          <div class="max-w-3xl space-y-8 flex-1 px-16 relative z-10 animate-fade-in-up">
            <div class="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold mb-4">
              Modern Digital Broadcasting
            </div>
            <h1 class="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              {{ slides[activeSlide].title }}
            </h1>
            <p class="text-xl lg:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
              {{ slides[activeSlide].subtitle }}
            </p>
            <div class="flex flex-wrap gap-4 pt-4">
              <router-link
                to="/signup"
                class="group relative inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-primary-500 via-primary-600 to-teal-500 rounded-xl shadow-green-xl hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span class="relative z-10">{{ slides[activeSlide].cta }}</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </router-link>
              <router-link
                to="/contact"
                class="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                Learn More
              </router-link>
            </div>
          </div>

          <!-- Nav Controls -->
          <div class="absolute left-12 bottom-8 flex gap-4 z-20">
            <button @click="prevSlide" class="w-12 h-12 rounded-full border-2 border-white/40 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold hover:bg-primary-500 hover:border-primary-500 transition-all duration-300">‹</button>
            <button @click="nextSlide" class="w-12 h-12 rounded-full border-2 border-white/40 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold hover:bg-primary-500 hover:border-primary-500 transition-all duration-300">›</button>
          </div>

          <!-- Slide Indicators -->
          <div class="absolute bottom-8 right-12 flex gap-2 z-20">
            <button
              v-for="(slide, index) in slides"
              :key="index"
              @click="activeSlide = index"
              :class="['h-1 rounded-full transition-all duration-300',
                       activeSlide === index ? 'w-8 bg-primary-500' : 'w-1 bg-white/40 hover:bg-white/60']">
            </button>
          </div>
        </div>
      </div>
    </section>

<!-- why optivalFM -->
<section class="py-32 relative overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
    <div v-scroll class="reveal space-y-4 mb-20">
      <div class="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-2">
        Our Approach
      </div>
      <h2 class="text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight">
        Why <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">OptivalFM</span>
      </h2>
      <p class="text-xl text-dark-600 max-w-3xl mx-auto font-light">
        Setting the standard for modern broadcasting through three core pillars of excellence.
      </p>
    </div>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-scroll
        v-for="(feature, i) in features"
        :key="i"
        :style="{ transitionDelay: `${i * 150}ms` }"
        class="reveal-up relative bg-white p-12 rounded-3xl shadow-lg shadow-primary-500/5 text-center group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 border border-dark-100 hover:border-primary-300 hover:-translate-y-2"
      >
        <!-- Top accent line -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Icon with gradient background -->
        <div class="relative inline-flex items-center justify-center w-16 h-16 mb-6">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-teal-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500"></div>
          <div class="relative text-5xl text-primary-600 group-hover:scale-110 transition-transform duration-300">
            <component :is="feature.icon" />
          </div>
        </div>

        <h3 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">
          {{ feature.title }}
        </h3>
        <p class="text-dark-600 text-base font-normal leading-relaxed">
          {{ feature.desc }}
        </p>
      </div>
    </div>
  </div>
</section>


    <!-- About section  -->
    <section class="py-32 bg-gradient-to-br from-dark-50 via-white to-primary-50/20 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-10 relative z-10">
        <div v-scroll class="reveal-left group relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-dark-100 hover:border-primary-300 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-500 transition-colors duration-300">
            <svg class="w-6 h-6 text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-dark-800 group-hover:text-primary-600 transition-colors">Who We Are</h3>
          <p class="text-dark-600 leading-relaxed">A modern digital media brand focused on relevance and impact.</p>
        </div>

        <div v-scroll class="reveal-up group relative bg-gradient-to-br from-primary-500 to-teal-500 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div class="relative z-10">
            <div class="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white">Our Mission</h3>
            <p class="text-white/90 leading-relaxed">To inform, inspire, and connect communities through innovation.</p>
          </div>
        </div>

        <div v-scroll class="reveal-right group relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-dark-100 hover:border-primary-300 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div class="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-500 transition-colors duration-300">
            <svg class="w-6 h-6 text-primary-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-dark-800 group-hover:text-primary-600 transition-colors">Credibility</h3>
          <p class="text-dark-600 leading-relaxed">Built on trust, consistency, and professional excellence.</p>
        </div>
      </div>
    </section>

<!-- how it works -->
<section class="py-32 bg-white relative overflow-hidden">
  <!-- Background decorative elements -->
  <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
    <div v-scroll class="reveal space-y-4 mb-24">
      <div class="inline-block px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-semibold mb-2">
        Our Process
      </div>
      <h2 class="text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight">
        How It <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-primary-500">Works</span>
      </h2>
      <p class="text-xl text-dark-600 max-w-3xl mx-auto font-light">
        Four simple steps to amplify your voice and scale your brand with our digital ecosystem.
      </p>
    </div>

    <div class="mt-24 grid grid-cols-1 md:grid-cols-4 gap-16 relative">

      <!-- Connecting Line -->
      <div class="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary-500/10 via-red-500/20 via-primary-500/20 to-primary-500/10 z-0"></div>

      <!-- Step 1 -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center group">
        <div class="relative mb-8">
          <div class="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div class="relative w-24 h-24 bg-gradient-to-br from-white to-primary-50 border-4 border-primary-200 rounded-full flex items-center justify-center text-primary-600 font-bold text-3xl shadow-green-lg group-hover:scale-110 group-hover:border-primary-400 transition-all duration-500">
            01
          </div>
        </div>
        <h3 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">Discover</h3>
        <p class="text-dark-600 leading-relaxed">
          We identify your unique goals and target audience through deep data analysis.
        </p>
      </div>

      <!-- Step 2 -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center group" style="transition-delay: 150ms;">
        <div class="relative mb-8">
          <div class="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div class="relative w-24 h-24 bg-gradient-to-br from-white to-primary-50 border-4 border-primary-200 rounded-full flex items-center justify-center text-primary-600 font-bold text-3xl shadow-green-lg group-hover:scale-110 group-hover:border-primary-400 transition-all duration-500">
            02
          </div>
        </div>
        <h3 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">Engage</h3>
        <p class="text-dark-600 leading-relaxed">
          Create compelling content and interactive experiences that resonate with listeners.
        </p>
      </div>

      <!-- Step 3 - Featured with RED accent -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center group" style="transition-delay: 300ms;">
        <div class="relative mb-8">
          <div class="absolute inset-0 bg-red-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div class="relative w-24 h-24 bg-gradient-to-br from-red-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-red-xl group-hover:scale-110 transition-all duration-500 ring-4 ring-red-500/20">
            03
          </div>
        </div>
        <div class="inline-block px-3 py-1 bg-red-100 rounded-full text-red-700 text-xs font-bold mb-3">
          KEY STEP
        </div>
        <h3 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-red-600 transition-colors">Broadcast</h3>
        <p class="text-dark-600 leading-relaxed">
          Go live across our high-fidelity digital channels and multi-platform network.
        </p>
      </div>

      <!-- Step 4 -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center group" style="transition-delay: 450ms;">
        <div class="relative mb-8">
          <div class="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div class="relative w-24 h-24 bg-gradient-to-br from-white to-primary-50 border-4 border-primary-200 rounded-full flex items-center justify-center text-primary-600 font-bold text-3xl shadow-green-lg group-hover:scale-110 group-hover:border-primary-400 transition-all duration-500">
            04
          </div>
        </div>
        <h3 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">Grow</h3>
        <p class="text-dark-600 leading-relaxed">
          Scale your reach with analytics-driven insights and brand optimization.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- services -->
<section class="py-32 bg-gradient-to-b from-primary-50/30 via-white to-white overflow-hidden relative">
  <!-- Decorative blob -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-primary-500/10 to-teal-500/10 rounded-full blur-3xl"></div>

  <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <div class="text-center max-w-3xl mx-auto mb-20">
      <div v-scroll class="reveal inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-4">
        What We Offer
      </div>
      <h2 v-scroll class="reveal text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight mb-6">
        Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">Services</span>
      </h2>
      <p v-scroll class="reveal text-xl text-dark-600 font-light" style="transition-delay: 100ms;">
        Comprehensive media solutions designed to amplify your brand's reach through cutting-edge technology and creative storytelling.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Service digital broadcasting -->
      <div v-scroll class="reveal-up relative bg-white p-12 rounded-3xl shadow-xl shadow-primary-500/5 group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 border border-dark-100 hover:border-primary-300 overflow-hidden hover:-translate-y-2">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-teal-500/5 transition-all duration-500"></div>
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">Digital Broadcasting</h3>
          <p class="text-dark-600 leading-relaxed mb-6">
            High-fidelity streaming and content distribution reaching audiences across all digital touchpoints with crystal clear quality.
          </p>
          <ul class="space-y-3 text-sm text-dark-600">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              24/7 Live Streaming
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              Cloud Hosting
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              Multi-platform Sync
            </li>
          </ul>
        </div>
      </div>

      <!-- Service advert - Featured with RED -->
      <div v-scroll class="reveal-up relative bg-gradient-to-br from-red-500 via-red-600 to-primary-600 p-12 rounded-3xl shadow-2xl shadow-red-500/20 group hover:shadow-3xl hover:shadow-red-500/30 transition-all duration-500 overflow-hidden transform hover:scale-105" style="transition-delay: 150ms;">
        <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div class="relative z-10">
          <div class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold mb-4">
            POPULAR
          </div>
          <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <fa-line-chart class="text-3xl text-white" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">Advertising & PR</h3>
          <p class="text-white/90 leading-relaxed mb-6">
            Data-driven campaigns and strategic promotions that convert listeners into loyal customers for your brand.
          </p>
          <ul class="space-y-3 text-sm text-white/90">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
              Targeted Ad Spots
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
              Brand Activations
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
              Social Media Integration
            </li>
          </ul>
        </div>
      </div>

      <!-- Service media consultancy -->
      <div v-scroll class="reveal-up relative bg-white p-12 rounded-3xl shadow-xl shadow-primary-500/5 group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 border border-dark-100 hover:border-primary-300 overflow-hidden hover:-translate-y-2" style="transition-delay: 300ms;">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-teal-500/5 group-hover:to-primary-500/5 transition-all duration-500"></div>
        <div class="relative z-10">
          <div class="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-primary-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <fa-brain class="text-3xl text-teal-600" />
          </div>
          <h3 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-teal-600 transition-colors">Media Consultancy</h3>
          <p class="text-dark-600 leading-relaxed mb-6">
            Expert insights into the evolving media landscape to help you navigate digital transformation and audience growth.
          </p>
          <ul class="space-y-3 text-sm text-dark-600">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
              Content Strategy
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
              Audience Analytics
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
              Tech Implementation
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- partners -->
<section class="py-32 bg-gradient-to-b from-white via-dark-50 to-white overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <div v-scroll class="reveal space-y-4 mb-16">
      <div class="inline-block px-4 py-2 bg-dark-100 rounded-full text-dark-700 text-sm font-semibold mb-2">
        Trusted By
      </div>
      <h2 class="text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight">
        Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">Partners</span>
      </h2>
      <p class="text-xl text-dark-600 max-w-3xl mx-auto font-light">
        Collaborating with industry leaders to drive digital innovation and community growth.
      </p>
    </div>

    <div class="relative overflow-hidden py-8">
      <!-- Gradient edges -->
      <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

      <div class="flex gap-12 animate-marquee whitespace-nowrap">
        <div
          v-for="(partner,i) in partners"
          :key="'first-' + i"
          class="group h-32 w-48 bg-white rounded-2xl flex items-center justify-center p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 border-2 border-dark-100 hover:border-primary-300 flex-shrink-0 hover:-translate-y-1"
        >
          <img :src="partner.logo" :alt="partner.name" class="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"/>
        </div>
        <div
          v-for="(partner,i) in partners"
          :key="'second-' + i"
          class="group h-32 w-48 bg-white rounded-2xl flex items-center justify-center p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 border-2 border-dark-100 hover:border-primary-300 flex-shrink-0 hover:-translate-y-1"
        >
          <img :src="partner.logo" :alt="partner.name" class="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"/>
        </div>
      </div>
    </div>
  </div>
</section>


  </main>
</template>

<style scoped>
/* Scroll base */
.reveal, .reveal-up, .reveal-left, .reveal-right {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.reveal-up { transform: translateY(40px); }
.reveal-left { transform: translateX(-50px); }
.reveal-right { transform: translateX(50px); }

/* Animation  */
.animate-active {
  opacity: 1 !important;
  transform: translate(0, 0) !important;
}

/* Carousel Fade */
.fade-enter-active, .fade-leave-active { transition: opacity 0.8s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* animation right to left*/
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
