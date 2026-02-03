<script setup>

</script>
<template>
  <main class="pt-20 text-white">
    <!-- Hero Section -->
    <section class="min-h-[70vh] flex items-center px-8 py-16 m-4 rounded-2xl bg-cover bg-center"
             style="background-image: url('/src/assets/office.jpeg')">
      <div class="max-w-[700px] bg-black/55 backdrop-blur-lg p-12 rounded-2xl">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">
          Building Digital<br />Solutions That Matter
        </h1>

        <p class="mt-4 leading-relaxed opacity-90">
          Codec is focused on innovation, technology, and empowering
          communities through modern digital solutions.
        </p>

        <div class="mt-8 flex gap-4 flex-wrap">
          <router-link
              to="/services"
              class="px-6 py-3 rounded-lg font-semibold border border-white/60 hover:bg-white/20 transition-all inline-flex items-center gap-2">
            <i class="fas fa-laptop-code"></i>
            Our Services
          </router-link>

          <router-link
              to="/contact"
              class="px-6 py-3 rounded-lg font-semibold bg-white/25 backdrop-blur-xl hover:bg-white/35 transition-all">
            Get Started
          </router-link>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-20 px-8 rounded-2xl m-4 bg-gradient-to-r from-blue-400 to-blue-800">
      <div class="max-w-[1100px] mx-auto">
        <div class="bg-white/10 backdrop-blur-lg p-10 rounded-2xl mt-8 hover:-translate-y-1 transition-transform">
          <i class="fas fa-bullseye text-4xl mb-4 text-blue-400"></i>
          <h2 class="text-4xl font-bold mb-4">Our Mission</h2>
          <p class="max-w-[700px] opacity-90">
            We bridge the gap between technology and real-world impact
            by building scalable, secure, and accessible systems.
          </p>
        </div>

        <div class="bg-white/10 backdrop-blur-lg p-10 rounded-2xl mt-8 hover:-translate-y-1 transition-transform">
          <i class="fas fa-eye text-4xl mb-4 text-blue-400"></i>
          <h2 class="text-4xl font-bold mb-4">Our Vision</h2>
          <p class="max-w-[700px] opacity-90">
            Our vision is to build a future where the boundary between complex technology and
            meaningful human progress completely disappears. We aspire to be the primary architect of a world where
            every digital interaction is inherently secure, every innovation is globally scalable, and high-impact tools
            are accessible to everyone. By creating a standard of excellence in system integrity and inclusive design,
            we envision a global landscape where technology doesn't just exist alongside humanity but actively empowers
            every individual and organization to solve their most critical challenges. We strive to be the most trusted
            name in digital transformation, ensuring that the systems we build today serve as the durable, life-changing
            foundations for the breakthroughs of tomorrow.
          </p>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section class="py-20 px-8 rounded-2xl m-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div class="max-w-[1100px] mx-auto">
        <h2 class="text-4xl font-bold mb-4 text-center">What We Do</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:-translate-y-1 transition-transform">
            <i class="fas fa-code text-3xl mb-4 text-white"></i>
            <h3 class="text-2xl font-bold mb-2">Web Development</h3>
            <p class="opacity-90">Fast, scalable and modern web applications.</p>
          </div>

          <div class="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:-translate-y-1 transition-transform">
            <i class="fas fa-shield-halved text-3xl mb-4 text-white"></i>
            <h3 class="text-2xl font-bold mb-2">Cybersecurity</h3>
            <p class="opacity-90">Security-first systems and digital awareness.</p>
          </div>

          <div class="bg-white/10 backdrop-blur-lg p-10 rounded-2xl hover:-translate-y-1 transition-transform">
            <i class="fas fa-graduation-cap text-3xl mb-4 text-white"></i>
            <h3 class="text-2xl font-bold mb-2">Tech Training</h3>
            <p class="opacity-90">Practical skills for the modern digital economy.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-8 rounded-2xl m-4 bg-gradient-to-r from-blue-400 to-blue-800 text-center">
      <h2 class="text-4xl font-bold mb-8">
        Let's Build Something Impactful
      </h2>
      <router-link
          to="/contact"
          class="px-9 py-4 rounded-lg font-semibold bg-white/25 backdrop-blur-xl hover:bg-white/35 transition-all inline-block">
        Contact Us
      </router-link>
    </section>
  </main>
</template>



<style scoped>
/* Any custom styles that Tailwind can't handle */
</style>