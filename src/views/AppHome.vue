<template>
  <main class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="gradient-text">
          Building Digital<br />Solutions That Matter
        </h1>

        <p class="hero-text">
          Codec is focused on innovation, technology, and empowering
          communities through modern digital solutions.
        </p>

        <div class="hero-actions">
          <router-link to="/services" class="btn outline">
            <i class="fas fa-laptop-code"></i>
            Our Services
          </router-link>

          <router-link to="/contact" class="btn blur">
            Get Started
          </router-link>
        </div>
      </div>
    </section>

    <section class="section dark">
      <div class="container">
        <div class="card">
          <i class="fas fa-bullseye section-icon"></i>
          <h2 class="section-title">Our Mission</h2>
          <p class="section-text">
            We bridge the gap between technology and real-world impact
            by building scalable, secure, and accessible systems.
          </p>
        </div>

        <div class="card">
          <i class="fas fa-bullseye section-icon"></i>
          <h2 class="section-title">Our Vission</h2>
          <p class="section-text">Our vision is to build a future where the boundary between complex technology and
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


    <section class="section light">
      <div class="container">
        <h2 class="section-title center">What We Do</h2>

        <div class="cards">
          <div class="card">
            <i class="fas fa-code card-icon"></i>
            <h3>Web Development</h3>
            <p>Fast, scalable and modern web applications.</p>
          </div>

          <div class="card">
            <i class="fas fa-shield-halved card-icon"></i>
            <h3>Cybersecurity</h3>
            <p>Security-first systems and digital awareness.</p>
          </div>

          <div class="card">
            <i class="fas fa-graduation-cap card-icon"></i>
            <h3>Tech Training</h3>
            <p>Practical skills for the modern digital economy.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="section dark center">
      <h2 class="section-title">
        Let’s Build Something Impactful
      </h2>
      <router-link to="/contact" class="btn blur large">
        Contact Us
      </router-link>
    </section>

  </main>
</template>

<script setup>
</script>

<style scoped>
.home {
  padding-top: 80px;
  color: #fff;
}


.hero {
  min-height: 70vh;
  background: url(../assets/office.jpeg) center/cover no-repeat;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  margin: 1rem;
  border-radius: 1rem;
}

.hero-content {
  max-width: 700px;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  padding: 3rem;
  border-radius: 1rem;
}

.hero-text {
  margin-top: 1rem;
  line-height: 1.7;
  opacity: 0.9;
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}


.section {
  padding: 5rem 2rem;
  border-radius: 1rem;
  margin: 1rem;
}

.section.dark {
  background: linear-gradient(90deg, #60a5fa, rgb(27, 27, 146));
}

.section.light {
  background: linear-gradient(120deg, #111827, #1f2933);
}

.container {
  max-width: 1100px;
  margin: auto;
}


.section-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.section-text {
  max-width: 700px;
  opacity: 0.9;
}

.center {
  text-align: center;
}


.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 1.2rem;
  transition: transform 0.3s ease;
  margin-top: 2rem;
}

.card:hover {
  transform: translateY(-6px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.section-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #60a5fa;
}


.btn {
  padding: 0.7rem 1.6rem;
  border-radius: 0.6rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn.outline {
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.btn.outline:hover {
  background: rgba(255, 255, 255, 0.2);
}

.btn.blur {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);
}

.btn.large {
  padding: 0.9rem 2.3rem;
}

.gradient-text {
  background: linear-gradient(90deg, #60a5fa, #f59e0b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
