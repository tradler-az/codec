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
  <main class="bg-white pt-20">

    <!-- hero section -->
    <section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="../assets/office green.jpeg"
          alt="OptivalFM Background"
          class="w-full h-full object-cover scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-800/80 to-dark-900/95"></div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-teal-500/10 opacity-30 mix-blend-overlay"></div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div v-scroll class="reveal-up inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold mb-6">
          About Us
        </div>
        <h1 v-scroll class="reveal-up text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          The Future of <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">Facilities Management</span>
        </h1>
        <p v-scroll class="reveal-up delay-200 text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
          OptivalFM is a technology-driven platform designed to integrate all aspects of facility operations into one powerful, easy-to-use system.
        </p>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-32 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div v-scroll class="reveal-left space-y-8">
            <div>
              <div class="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-4">
                Our Mission
              </div>
              <h3 class="text-4xl lg:text-5xl font-extrabold text-dark-800 mb-6 leading-tight">
                Total Visibility, Control, and <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">Efficiency</span>
              </h3>
              <p class="text-xl text-dark-600 leading-relaxed font-light">
                Unlike traditional management, our in-house digital platform gives you real-time data to drive decisions. We bridge the gap between field teams and management.
              </p>
            </div>

            <ul class="space-y-5">
              <li v-for="item in ['Lower Operational Costs', 'Faster Response Times', 'Customized Solutions']" :key="item" class="flex items-center gap-4 group">
                <div class="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  <font-awesome-icon :icon="faCheckCircle" class="text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <span class="text-lg font-semibold text-dark-800 group-hover:text-primary-600 transition-colors">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- digital compliance -->
          <div v-scroll class="reveal-right relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="../assets/check.jpeg" class="w-full h-[600px] object-cover" alt="Technology Integration" />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
            </div>
            <div class="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary-500 to-teal-500 p-10 rounded-3xl text-white shadow-2xl shadow-primary-500/30 hidden md:block">
              <p class="text-5xl font-extrabold mb-2">100%</p>
              <p class="text-sm uppercase tracking-widest opacity-90 font-semibold">Digital Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- technical-->
    <section class="py-32 bg-gradient-to-b from-primary-50/30 via-white to-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
        <div v-scroll class="reveal inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-4">
          Platform Features
        </div>
        <h2 v-scroll class="reveal text-5xl lg:text-6xl font-extrabold text-dark-800 tracking-tight">
          OptivalFM Core <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-500">Capabilities</span>
        </h2>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-10">
        <div
          v-scroll
          v-for="(feat, i) in techFeatures"
          :key="i"
          :style="{ transitionDelay: `${i * 100}ms` }"
          class="reveal-up relative bg-white p-12 rounded-3xl shadow-xl shadow-primary-500/5 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 border border-dark-100 hover:border-primary-300 group overflow-hidden hover:-translate-y-2"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-teal-500/5 transition-all duration-500"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-teal-500/20 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
              <font-awesome-icon :icon="feat.icon" class="text-2xl" />
            </div>
            <h4 class="text-2xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">{{ feat.title }}</h4>
            <p class="text-dark-600 leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <section class="py-32 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div v-scroll class="reveal-up bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-3xl p-16 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div class="relative z-10 space-y-8">
            <h3 class="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Experience the <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-teal-400">OptivalFM</span> Advantage
            </h3>
            <p class="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Clients gain peace of mind knowing their facilities are managed with efficiency, compliance, and excellence.
            </p>
            <router-link
              to="/contact"
              class="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-500 via-primary-600 to-teal-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <span class="relative z-10">Get Started Today</span>
              <svg class="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </router-link>
          </div>

          <font-awesome-icon :icon="faRocket" class="absolute -right-16 -bottom-16 text-white/5 text-[20rem] -rotate-12" />
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
