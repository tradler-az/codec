<script setup>

</script>

<template>
  <Transition name="fade">
    <div class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">


      <!-- dots animation -->
      <div class="flex items-center gap-3 mb-6">
        <div class="dot w-3 h-3 bg-[#00A659] rounded-full"></div>
        <div class="dot w-3 h-3 bg-[#00A659] rounded-full [animation-delay:1.2s]"></div>
        <div class="dot w-3 h-3 bg-[#00A659] rounded-full [animation-delay:2.4s]"></div>
        <div class="dot w-3 h-3 bg-[#00A659] rounded-full [animation-delay:3.6s]"></div>
        <div class="dot w-3 h-3 bg-[#00A659] rounded-full [animation-delay:4.8s]"></div>
      </div>

      <!-- Tagline -->
      <div class="relative">
        <p
          class="text-[#2E2E2E] font-bold tracking-[0.3em] uppercase text-sm flex items-center border-r-2 border-[#00A659] pr-1 animate-typewriter overflow-hidden whitespace-nowrap">
          Build. <span class="text-[#00A659] ml-2">Manage.</span> <span class="ml-2">Sustain.</span>
        </p>
      </div>



      <!--bottom progress bar -->
      <div
        class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A659] via-[#00837B] to-[#00A659] animate-progress">
      </div>
    </div>
  </Transition>
</template>



<style scoped>
/* dots animation */
.dot {
  animation: dot-pulse 1.2s infinite ease-in-out;
  opacity: 0.6;
}

@keyframes dot-pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.4;
  }

  50% {
    transform: scale(1.8);
    opacity: 1;
  }
}

/* typewriter animation */
.animate-typewriter {
  width: 0;
  animation:
    typing 2s steps(30, end) forwards,
    blink 0.8s infinite;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

@keyframes blink {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: #00A659
  }
}

/* progress bar animation */
.animate-progress {
  animation: progress-load 3s ease-in-out forwards;
  transform-origin: left;
}

@keyframes progress-load {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

/* fade transition */
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
