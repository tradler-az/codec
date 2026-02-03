<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faDesktop, faChartLine, faLightbulb, faBullhorn, 
  faEye, faMagnifyingGlassChart, faLayerGroup, faRocket, faBuilding 
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
</script>

<template>
  <main class="bg-white">
    
    <!-- hiro section -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="../assets/office green6.jpeg" 
          class="w-full h-full object-cover"
          alt="Services Background"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#2E2E2E]/90 to-[#2E2E2E]/70"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 v-scroll class="reveal-up text-5xl lg:text-7xl font-bold text-white mb-6">
          Our <span class="text-[#00A659]">Services</span>
        </h1>
        <p v-scroll class="reveal-up delay-200 text-xl text-white/70 max-w-2xl mx-auto">
          OptivalFM provides structured, performance-driven solutions to optimize systems, improve visibility, and scale operations.
        </p>
      </div>
    </section>

    <!-- core services-->
    <section class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 v-scroll class="reveal text-3xl lg:text-4xl font-bold text-[#2E2E2E] text-center mb-16">
          Core Service Areas
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Digital Management -->
          <div v-scroll class="reveal-up bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-[#00A659]/20">
            <font-awesome-icon :icon="faDesktop" class="text-3xl text-[#00A659] mb-6 group-hover:scale-110 transition-transform" />
            <h3 class="text-xl font-bold mb-4 text-[#2E2E2E]">Digital & Systems Management</h3>
            <p class="text-gray-500 mb-6">End-to-end management of operational systems to ensure reliability and security.</p>
            <ul class="space-y-3 text-sm text-gray-500 border-t pt-6">
              <li class="flex items-center gap-2">• Platform setup & administration</li>
              <li class="flex items-center gap-2">• Systems optimization</li>
              <li class="flex items-center gap-2">• Performance monitoring</li>
            </ul>
          </div>

          <!-- Operations -->
          <div v-scroll class="reveal-up delay-200 bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-[#00A659]/20">
            <font-awesome-icon :icon="faChartLine" class="text-3xl text-[#00A659] mb-6 group-hover:scale-110 transition-transform" />
            <h3 class="text-xl font-bold mb-4 text-[#2E2E2E]">Operations Optimization</h3>
            <p class="text-gray-500 mb-6">Streamlining workflows to reduce inefficiencies and improve performance.</p>
            <ul class="space-y-3 text-sm text-gray-500 border-t pt-6">
              <li class="flex items-center gap-2">• Process analysis & improvement</li>
              <li class="flex items-center gap-2">• Workflow automation support</li>
              <li class="flex items-center gap-2">• Performance reporting</li>
            </ul>
          </div>

          <!-- Consultancy -->
          <div v-scroll class="reveal-up delay-400 bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-[#00A659]/20">
            <font-awesome-icon :icon="faLightbulb" class="text-3xl text-[#00A659] mb-6 group-hover:scale-110 transition-transform" />
            <h3 class="text-xl font-bold mb-4 text-[#2E2E2E]">Consultancy & Advisory</h3>
            <p class="text-gray-500 mb-6">Strategic advisory to guide organizations in compliance and sustainable growth.</p>
            <ul class="space-y-3 text-sm text-gray-500 border-t pt-6">
              <li class="flex items-center gap-2">• Digital strategy advisory</li>
              <li class="flex items-center gap-2">• Compliance guidance</li>
              <li class="flex items-center gap-2">• Risk & performance assessment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- marketing -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 v-scroll class="reveal text-3xl lg:text-4xl font-bold text-[#2E2E2E] text-center mb-16">
          Advertising & Marketing
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-scroll class="reveal-left p-8 bg-slate-50 rounded-2xl flex items-start gap-5">
            <font-awesome-icon :icon="faBullhorn" class="text-2xl text-[#00A659] mt-1" />
            <div>
              <h3 class="text-lg font-bold mb-2">Digital Advertising</h3>
              <p class="text-gray-500 text-sm">Data-driven strategies focused on reach and conversion.</p>
            </div>
          </div>
          <div v-scroll class="reveal-up p-8 bg-slate-50 rounded-2xl flex items-start gap-5">
            <font-awesome-icon :icon="faEye" class="text-2xl text-[#00A659] mt-1" />
            <div>
              <h3 class="text-lg font-bold mb-2">Brand Visibility</h3>
              <p class="text-gray-500 text-sm">Strategic positioning to enhance market presence.</p>
            </div>
          </div>
          <div v-scroll class="reveal-right p-8 bg-slate-50 rounded-2xl flex items-start gap-5">
            <font-awesome-icon :icon="faMagnifyingGlassChart" class="text-2xl text-[#00A659] mt-1" />
            <div>
              <h3 class="text-lg font-bold mb-2">Marketing Analytics</h3>
              <p class="text-gray-500 text-sm">Performance measurement to maximize ROI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- packages
    
    <div class="relative w-full h-96 overflow-hidden">
 
      
      <div class="absolute inset-0 bg-gradient-to-t from-[#2E2E2E] to-transparent opacity-60"></div>
    </div>
    <img src="/office-green.jpg" class="absolute inset-0 w-full h-full object-cover" />

     
    -->
    <section class="relative py-24 bg-[#2E2E2E]/50 bg-[url('../assets/office green1.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 v-scroll class="reveal text-3xl lg:text-4xl font-bold text-white mb-16">
          Service Packages
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Starter -->
          <div v-scroll class="reveal-up bg-white/5 border border-white/10 p-10 rounded-3xl text-white">
            <font-awesome-icon :icon="faRocket" class="text-3xl text-[#00A659] mb-6" />
            <h3 class="text-2xl font-bold mb-4">Starter</h3>
            <p class="text-white/60 mb-6">Essential support for startups and small teams.</p>
            <button class="w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-[#2E2E2E] transition-all font-bold">Inquire Now</button>
          </div>

          <!-- Professional -->
          <div v-scroll class="reveal-up delay-200 bg-[#00A659] p-10 rounded-3xl text-white shadow-2xl scale-105">
            <font-awesome-icon :icon="faLayerGroup" class="text-3xl text-white mb-6" />
            <h3 class="text-2xl font-bold mb-4">Professional</h3>
            <p class="text-white/90 mb-6">Optimization-focused solutions for growing organizations.</p>
            <button class="w-full py-3 rounded-xl bg-white text-[#00A659] hover:bg-slate-100 transition-all font-bold">Get Started</button>
          </div>

          <!-- Enterprise -->
          <div v-scroll class="reveal-up delay-400 bg-white/5 border border-white/10 p-10 rounded-3xl text-white">
            <font-awesome-icon :icon="faBuilding" class="text-3xl text-[#00A659] mb-6" />
            <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
            <p class="text-white/60 mb-6">Tailored, large-scale management and advisory solutions.</p>
            <button class="w-full py-3 rounded-xl border border-white/20 hover:bg-white hover:text-[#2E2E2E] transition-all font-bold">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* animation of the atems */
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
