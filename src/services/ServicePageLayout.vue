<template>
  <main class="bg-white pt-24">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-16">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-white to-teal-50/30"></div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-dark-600 mb-6">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/services" class="hover:text-primary-600 transition-colors">Services</router-link>
          <span>/</span>
          <span class="font-medium text-dark-800">{{ title }}</span>
        </nav>

        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100 rounded-lg text-primary-700 text-xs font-semibold mb-4">
            <font-awesome-icon :icon="icon" class="w-3 h-3" />
            {{ category }}
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-800 leading-tight mb-4">
            {{ title }}
          </h1>
          
          <p class="text-xl md:text-2xl text-dark-600 leading-relaxed mb-8 max-w-3xl">
            {{ subtitle }}
          </p>

          <div class="flex flex-wrap gap-4">
            <button class="bg-gradient-to-r from-primary-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all flex items-center gap-2">
              Get Started
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button class="border-2 border-dark-200 text-dark-700 px-6 py-3 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section v-if="benefits && benefits.length > 0" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dark-800 mb-4">Key Benefits</h2>
          <p class="text-lg text-dark-600 max-w-3xl mx-auto">
            Transform your operations with measurable results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" 
               class="text-center p-6">
            <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <font-awesome-icon :icon="benefit.icon" class="text-primary-600 text-xl" />
            </div>
            <div class="text-3xl font-bold text-primary-600 mb-2">{{ benefit.value }}</div>
            <div class="text-sm font-semibold text-dark-700 mb-2">{{ benefit.title }}</div>
            <p class="text-sm text-dark-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section v-if="features && features.length > 0" class="py-16 bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dark-800 mb-4">Features</h2>
          <p class="text-lg text-dark-600 max-w-3xl mx-auto">
            Everything you need to {{ subtitle.toLowerCase() }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in features" :key="feature.title" 
               class="bg-white p-6 rounded-xl border border-dark-100 hover:border-primary-300 transition-colors group">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="feature.icon" class="text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-dark-800 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-dark-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section v-if="steps && steps.length > 0" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dark-800 mb-4">How It Works</h2>
          <p class="text-lg text-dark-600 max-w-3xl mx-auto">
            Simple process to get started
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="(step, index) in steps" :key="index" 
               class="text-center p-6">
            <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="font-semibold text-dark-800 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-dark-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section v-if="packages && packages.length > 0" class="py-16 bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dark-800 mb-4">Pricing Plans</h2>
          <p class="text-lg text-dark-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div v-for="pkg in packages" :key="pkg.name"
               :class="['p-8 rounded-xl border-2', pkg.featured ? 'border-primary-500 bg-primary-50/30 relative' : 'border-dark-100']">
            <div v-if="pkg.featured" class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span class="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </span>
            </div>
            
            <div class="text-center mb-6">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <font-awesome-icon :icon="pkg.icon" class="text-primary-600" />
              </div>
              <h3 class="text-xl font-bold text-dark-800 mb-2">{{ pkg.name }}</h3>
              <div class="flex items-baseline justify-center mb-4">
                <span class="text-3xl font-bold text-dark-800">{{ pkg.price }}</span>
                <span class="text-dark-600 ml-1">{{ pkg.price === 'Custom' ? '' : '/month' }}</span>
              </div>
              <p class="text-sm text-dark-600">{{ pkg.description }}</p>
            </div>

            <ul class="space-y-3 mb-6">
              <li v-for="feature in pkg.features" :key="feature"
                  class="flex items-center text-sm text-dark-600">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <button :class="['w-full py-3 rounded-lg font-semibold transition-colors', pkg.featured ? 'bg-primary-500 text-white hover:bg-primary-600' : 'bg-dark-100 text-dark-700 hover:bg-dark-200']">
              {{ pkg.featured ? 'Get Started' : 'Learn More' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section v-if="relatedServices && relatedServices.length > 0" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dark-800 mb-4">Related Services</h2>
          <p class="text-lg text-dark-600 max-w-3xl mx-auto">
            Explore other services that complement {{ title.toLowerCase() }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link
            v-for="service in relatedServices"
            :key="service.id"
            :to="service.path"
            class="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-dark-100 hover:border-primary-300 hover:-translate-y-1"
          >
            <div class="w-12 h-12 bg-gradient-to-br from-primary-100 to-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="service.icon" class="text-lg text-primary-600" />
            </div>
            <h3 class="text-lg font-bold text-dark-800 mb-2 group-hover:text-primary-600 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-sm text-dark-600">{{ service.description }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-primary-500 to-teal-500">
      <div class="max-w-3xl mx-auto text-center px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to optimize your operations?</h2>
        <p class="text-lg text-white/90 mb-8">
          Join thousands of organizations using our optimization platform
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  subtitle: String,
  category: String,
  icon: Object,
  heroImage: String,
  benefits: {
    type: Array,
    default: () => []
  },
  features: {
    type: Array,
    default: () => []
  },
  steps: {
    type: Array,
    default: () => []
  },
  packages: {
    type: Array,
    default: () => []
  },
  relatedServices: {
    type: Array,
    default: () => []
  }
})
</script>