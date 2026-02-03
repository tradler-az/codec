<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faRocket, faCalendarCheck, faMobileAlt, faTags, 
  faShieldAlt, faComments, faChartBar, faCheckCircle 
} from '@fortawesome/free-solid-svg-icons'

/* Scroll Animation */
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

const techFeatures = [
  { title: 'Smart Scheduling', desc: 'Automates preventive maintenance and work orders.', icon: faCalendarCheck },
  { title: 'Mobile Workforce', desc: 'Real-time task logging and quality checks via app.', icon: faMobileAlt },
  { title: 'Asset Management', desc: 'Complete lifecycle tracking and asset tagging.', icon: faTags },
  { title: 'Compliance Dashboard', desc: 'Adherence to OSHA, NEMA, and EPRA requirements.', icon: faShieldAlt },
  { title: 'Customer Helpdesk', desc: 'Streamlined feedback hub for all stakeholders.', icon: faComments },
  { title: 'Transparent Reporting', desc: 'Real-time dashboards and audit-ready reports.', icon: faChartBar }
]
</script>

<template>
  <main class="bg-white">
    
    <!-- hero section -->
    <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="../assets/office green.jpeg" 
          alt="OptivalFM Background" 
          class="w-full h-full object-cover scale-105"
        />
        <div class="absolute inset-0 bg-[#2E2E2E]/80 backdrop-blur-[2px]"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 v-scroll class="reveal-up text-5xl lg:text-7xl font-bold text-white mb-6">
          The Future of <span class="text-[#00A659]">Facilities Management</span>
        </h1>
        <p v-scroll class="reveal-up delay-200 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          OptivalFM is a technology-driven platform designed to integrate all aspects of facility operations into one powerful, easy-to-use system.
        </p>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-24 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div v-scroll class="reveal-left">
            <h2 class="text-sm font-bold tracking-[0.2em] text-[#00A659] uppercase mb-4">Our Mission</h2>
            <h3 class="text-4xl font-bold text-[#2E2E2E] mb-6">Total Visibility, Control, and Efficiency.</h3>
            <p class="text-lg text-gray-600 mb-8">
              Unlike traditional management, our in-house digital platform gives you real-time data to drive decisions. We bridge the gap between field teams and management.
            </p>
            <ul class="space-y-4">
              <li v-for="item in ['Lower Operational Costs', 'Faster Response Times', 'Customized Solutions']" :key="item" class="flex items-center gap-3 font-semibold text-[#2E2E2E]">
                <font-awesome-icon :icon="faCheckCircle" class="text-[#00A659]" /> {{ item }}
              </li>
            </ul>
          </div>
          
          <!-- digital compliance -->
          <div v-scroll class="reveal-right relative">
            <img src="../assets/check.jpeg" class="rounded-[2rem] shadow-2xl w-[500px] h-[650px]" alt="Technology Integration" />
            <div class="absolute -bottom-6 -right-6 bg-[#00A659] p-8 rounded-2xl text-white hidden md:block">
              <p class="text-3xl font-bold">100%</p>
              <p class="text-xs uppercase tracking-widest opacity-80">Digital Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- technical-->
    <section class="py-24 bg-[#00A659]/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 v-scroll class="reveal text-4xl font-bold text-[#2E2E2E]">OptivalFM Core Capabilities</h2>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div 
          v-scroll 
          v-for="(feat, i) in techFeatures" 
          :key="i"
          :style="{ transitionDelay: `${i * 100}ms` }"
          class="reveal-up bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#00A659]/20 group"
        >
          <div class="w-14 h-14 bg-[#00A659]/10 text-[#00A659] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A659] group-hover:text-white transition-colors">
            <font-awesome-icon :icon="feat.icon" class="text-xl" />
          </div>
          <h4 class="text-xl font-bold text-[#2E2E2E] mb-3">{{ feat.title }}</h4>
          <p class="text-gray-500 text-sm leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <section class="py-24 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <div v-scroll class="reveal-up bg-[#2E2E2E] rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <h3 class="text-3xl font-bold mb-6 relative z-10">Experience the OptivalFM Advantage</h3>
          <p class="text-white/60 mb-8 relative z-10 max-w-2xl mx-auto">
            Clients gain peace of mind knowing their facilities are managed with efficiency, compliance, and excellence.
          </p>
          <router-link to="/contact" class="inline-block px-10 py-4 bg-[#00A659] rounded-xl font-bold hover:bg-[#00837B] transition-all relative z-10">
            Get Started Today
          </router-link>
          <font-awesome-icon :icon="faRocket" class="absolute -right-10 -bottom-10 text-white/5 text-[15rem] -rotate-12" />
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
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
