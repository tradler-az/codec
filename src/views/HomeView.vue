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
    <section class="relative overflow-hidden mb-24">
      <div class="max-w-8xl mx-auto px-6 lg:px-8">
        <div class="relative rounded-3xl min-h-[500px] flex items-center overflow-hidden">
          
          <transition name="fade" mode="out-in">
            <div
              :key="activeSlide"
              class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
              :style="{ backgroundImage: `url(${slides[activeSlide].image})` }"
            ></div>
          </transition>
          
          <div class="absolute inset-0 bg-gradient-to-r from-[#2E2E2E]/90 via-[#2E2E2E]/40 to-transparent"></div>

          <!-- Slide Content -->
          <div class="max-w-2xl space-y-6 flex-1 px-12 relative z-10">
            <h1 class="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {{ slides[activeSlide].title }}
            </h1>
            <p class="text-lg text-white/80 max-w-lg">
              {{ slides[activeSlide].subtitle }}
            </p>
            <router-link to="/signup" class="inline-block px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#00A659] to-[#00837B] rounded-lg shadow-xl hover:scale-105 transition-transform">
              {{ slides[activeSlide].cta }}
            </router-link>
          </div>

          <!-- Nav Controls -->
          <div class="absolute left-12 bottom-8 flex gap-4 z-20">
            <button @click="prevSlide" class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">‹</button>
            <button @click="nextSlide" class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">›</button>
          </div>
        </div>
      </div>
    </section>

<!-- why optivalFM -->
<section class="py-24">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <h2 v-scroll class="reveal text-4xl lg:text-5xl font-bold text-[#2E2E2E]">Why OptivalFM</h2>
    <p v-scroll class="reveal mt-4 text-[#2E2E2E]/60 max-w-2xl mx-auto">
      Setting the standard for modern broadcasting through three core pillars of excellence.
    </p>

<div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-scroll 
        v-for="(feature, i) in features" 
        :key="i" 
        :style="{ transitionDelay: `${i * 200}ms` }"
        class="reveal-up bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,166,89,0.08)] text-center group hover:shadow-2xl hover:shadow-[#00A659]/15 transition-all duration-500 border border-transparent hover:border-[#00A659]/10"
      >
        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <component :is="feature.icon" />
        </div>
        <h3 class="text-xl font-bold text-[#2E2E2E] mb-3">{{ feature.title }}</h3>
        <p class="text-[#2E2E2E]/70 text-sm font-normal leading-relaxed">
          {{ feature.desc }}
        </p>
      </div>
    </div>
  </div>
</section>


    <!-- About section  -->
    <section class="py-24 bg-[#00A659]/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-10">
        <div v-scroll class="reveal-left bg-white p-10 rounded-2xl shadow-sm">
          <h3 class="text-xl font-bold mb-2 text-[#00A659]">Who We Are</h3>
          <p class="text-[#2E2E2E]/70">A modern digital media brand focused on relevance and impact.</p>
        </div>

        <div v-scroll class="reveal-up bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#00A659]">
          <h3 class="text-xl font-bold mb-2 text-[#00A659]">Our Mission</h3>
          <p class="text-[#2E2E2E]/70">To inform, inspire, and connect communities through innovation.</p>
        </div>

        <div v-scroll class="reveal-right bg-white p-10 rounded-2xl shadow-sm">
          <h3 class="text-xl font-bold mb-2 text-[#00A659]">Credibility</h3>
          <p class="text-[#2E2E2E]/70">Built on trust, consistency, and professional excellence.</p>
        </div>
      </div>
    </section>

<!-- how it works -->
<section class="py-24 bg-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <h2 v-scroll class="reveal text-4xl lg:text-5xl font-bold text-[#2E2E2E]">How It Works</h2>
    <p v-scroll class="reveal mt-4 text-[#2E2E2E]/60 max-w-2xl mx-auto">
      Four simple steps to amplify your voice and scale your brand with our digital ecosystem.
    </p>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative">
      
      <!-- Connecting Line -->
      <div class="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-[#00A659]/5 via-[#00A659]/20 to-[#00A659]/5 z-0"></div>

      <!-- Step 1 -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center">
        <div class="w-16 h-16 bg-white border-4 border-[#00A659]/10 rounded-full flex items-center justify-center text-[#00A659] font-bold text-2xl mb-6 shadow-lg shadow-[#00A659]/5 group-hover:scale-110 transition-transform">
          01
        </div>
        <h3 class="text-xl font-bold text-[#2E2E2E] mb-3">Discover</h3>
        <p class="text-[#2E2E2E]/70 text-sm leading-relaxed">
          We identify your unique goals and target audience through deep data analysis.
        </p>
      </div>

      <!-- Step 2 -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center" style="transition-delay: 200ms;">
        <div class="w-16 h-16 bg-white border-4 border-[#00A659]/10 rounded-full flex items-center justify-center text-[#00A659] font-bold text-2xl mb-6 shadow-lg shadow-[#00A659]/5">
          02
        </div>
        <h3 class="text-xl font-bold text-[#2E2E2E] mb-3">Engage</h3>
        <p class="text-[#2E2E2E]/70 text-sm leading-relaxed">
          Create compelling content and interactive experiences that resonate with listeners.
        </p>
      </div>

      <!-- Step 3 -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center" style="transition-delay: 400ms;">
        <div class="w-16 h-16 bg-[#00A659] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-xl shadow-[#00A659]/20 scale-110">
          03
        </div>
        <h3 class="text-xl font-bold text-[#2E2E2E] mb-3">Broadcast</h3>
        <p class="text-[#2E2E2E]/70 text-sm leading-relaxed">
          Go live across our high-fidelity digital channels and multi-platform network.
        </p>
      </div>

      <!-- Step 4 -->
      <div v-scroll class="reveal-up relative z-10 flex flex-col items-center" style="transition-delay: 600ms;">
        <div class="w-16 h-16 bg-white border-4 border-[#00A659]/10 rounded-full flex items-center justify-center text-[#00A659] font-bold text-2xl mb-6 shadow-lg shadow-[#00A659]/5">
          04
        </div>
        <h3 class="text-xl font-bold text-[#2E2E2E] mb-3">Grow</h3>
        <p class="text-[#2E2E2E]/70 text-sm leading-relaxed">
          Scale your reach with analytics-driven insights and brand optimization.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- services -->
<section class="py-24 bg-[#00A659]/5 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 v-scroll class="reveal text-4xl lg:text-5xl font-bold text-[#2E2E2E]">Our Services</h2>
      <p v-scroll class="reveal mt-4 text-[#2E2E2E]/70 text-lg" style="transition-delay: 100ms;">
        Comprehensive media solutions designed to amplify your brand's reach through cutting-edge technology and creative storytelling.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Service digital broadcasting -->
      <div v-scroll class="reveal-up bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,166,89,0.08)] group hover:bg-[#00A659] transition-all duration-500">
        <div class="w-14 h-14 bg-[#00A659]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
          
        </div>
        <h3 class="text-2xl font-bold text-[#2E2E2E] group-hover:text-white transition-colors mb-4">Digital Broadcasting</h3>
        <p class="text-[#2E2E2E]/70 group-hover:text-white/80 transition-colors leading-relaxed">
          High-fidelity streaming and content distribution reaching audiences across all digital touchpoints with crystal clear quality.
        </p>
        <ul class="mt-6 space-y-2 text-sm text-[#2E2E2E]/60 group-hover:text-white/70">
          <li>• 24/7 Live Streaming</li>
          <li>• Cloud Hosting</li>
          <li>• Multi-platform Sync</li>
        </ul>
      </div>

      <!-- Service advert -->
      <div v-scroll class="reveal-up bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,166,89,0.08)] group hover:bg-[#00A659] transition-all duration-500" style="transition-delay: 200ms;">
        <div class="w-14 h-14 bg-[#00A659]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
          <fa-line-chart />
        </div>
        <h3 class="text-2xl font-bold text-[#2E2E2E] group-hover:text-white transition-colors mb-4">Advertising & PR</h3>
        <p class="text-[#2E2E2E]/70 group-hover:text-white/80 transition-colors leading-relaxed">
          Data-driven campaigns and strategic promotions that convert listeners into loyal customers for your brand.
        </p>
        <ul class="mt-6 space-y-2 text-sm text-[#2E2E2E]/60 group-hover:text-white/70">
          <li>• Targeted Ad Spots</li>
          <li>• Brand Activations</li>
          <li>• Social Media Integration</li>
        </ul>
      </div>

      <!-- Service media consultancy -->
      <div v-scroll class="reveal-up bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,166,89,0.08)] group hover:bg-[#00A659] transition-all duration-500" style="transition-delay: 400ms;">
        <div class="w-14 h-14 bg-[#00A659]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
          <fa-brain />
        </div>
        <h3 class="text-2xl font-bold text-[#2E2E2E] group-hover:text-white transition-colors mb-4">Media Consultancy</h3>
        <p class="text-[#2E2E2E]/70 group-hover:text-white/80 transition-colors leading-relaxed">
          Expert insights into the evolving media landscape to help you navigate digital transformation and audience growth.
        </p>
        <ul class="mt-6 space-y-2 text-sm text-[#2E2E2E]/60 group-hover:text-white/70">
          <li>• Content Strategy</li>
          <li>• Audience Analytics</li>
          <li>• Tech Implementation</li>
        </ul>
      </div>
    </div>
  </div>
</section>


    <!-- partners -->
<section class="py-24 bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <h2 v-scroll class="reveal text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
      Our Partners
    </h2>
    <p v-scroll class="reveal text-[#2E2E2E]/60 max-w-2xl mx-auto mb-12">
      Collaborating with industry leaders to drive digital innovation and community growth.
    </p>

    <div class="relative overflow-hidden">
      <div class="flex gap-8 animate-marquee whitespace-nowrap">
        <div 
          v-for="(partner,i) in partners" 
          :key="'first-' + i"
          class="group h-34 w-40 bg-[#00A659]/5 rounded-2xl flex items-center justify-center p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#00A659]/10 border border-transparent hover:border-[#00A659]/10 flex-shrink-0"
        >
          <img :src="partner.logo" :alt="partner.name" class="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"/>
        </div>
        <div 
          v-for="(partner,i) in partners" 
          :key="'second-' + i"
          class="group h-34 w-40 bg-[#00A659]/5 rounded-2xl flex items-center justify-center p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#00A659]/10 border border-transparent hover:border-[#00A659]/10 flex-shrink-0"
        >
          <img :src="partner.logo" :alt="partner.name" class="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"/>
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
