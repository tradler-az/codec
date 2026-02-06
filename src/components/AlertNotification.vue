<script setup>
import { ref, watch, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faCircleExclamation, faCircleCheck, faCircleInfo, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  type: {
    type: String,
    default: 'info', // 'error', 'success', 'warning', 'info'
    validator: (value) => ['error', 'success', 'warning', 'info'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 5000 // Auto-dismiss after 5 seconds (0 = no auto-dismiss)
  },
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const isVisible = ref(props.show)
let timeoutId = null

const getIcon = () => {
  switch (props.type) {
    case 'error':
      return faCircleExclamation
    case 'success':
      return faCircleCheck
    case 'warning':
      return faTriangleExclamation
    case 'info':
      return faCircleInfo
    default:
      return faCircleInfo
  }
}

const getColorClasses = () => {
  switch (props.type) {
    case 'error':
      return {
        container: 'bg-red-50 border-red-200 hover:border-red-300',
        icon: 'text-red-600',
        iconBg: 'bg-red-100',
        title: 'text-red-900',
        message: 'text-red-700',
        closeBtn: 'text-red-400 hover:text-red-600 hover:bg-red-100',
        progress: 'bg-red-500'
      }
    case 'success':
      return {
        container: 'bg-primary-50 border-primary-200 hover:border-primary-300',
        icon: 'text-primary-600',
        iconBg: 'bg-primary-100',
        title: 'text-primary-900',
        message: 'text-primary-700',
        closeBtn: 'text-primary-400 hover:text-primary-600 hover:bg-primary-100',
        progress: 'bg-primary-500'
      }
    case 'warning':
      return {
        container: 'bg-yellow-50 border-yellow-200 hover:border-yellow-300',
        icon: 'text-yellow-600',
        iconBg: 'bg-yellow-100',
        title: 'text-yellow-900',
        message: 'text-yellow-700',
        closeBtn: 'text-yellow-400 hover:text-yellow-600 hover:bg-yellow-100',
        progress: 'bg-yellow-500'
      }
    case 'info':
      return {
        container: 'bg-blue-50 border-blue-200 hover:border-blue-300',
        icon: 'text-blue-600',
        iconBg: 'bg-blue-100',
        title: 'text-blue-900',
        message: 'text-blue-700',
        closeBtn: 'text-blue-400 hover:text-blue-600 hover:bg-blue-100',
        progress: 'bg-blue-500'
      }
    default:
      return {}
  }
}

const close = () => {
  isVisible.value = false
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  setTimeout(() => {
    emit('close')
  }, 300)
}

watch(() => props.show, (newVal) => {
  isVisible.value = newVal
  if (newVal && props.duration > 0) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      close()
    }, props.duration)
  }
})

onMounted(() => {
  if (props.show && props.duration > 0) {
    timeoutId = setTimeout(() => {
      close()
    }, props.duration)
  }
})
</script>

<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-2"
  >
    <div
      v-if="isVisible"
      :class="['relative flex items-start gap-4 p-5 rounded-2xl border-2 shadow-lg backdrop-blur-sm transition-all duration-300', getColorClasses().container]"
      role="alert"
    >
      <!-- Icon -->
      <div :class="['flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center', getColorClasses().iconBg]">
        <font-awesome-icon :icon="getIcon()" :class="['text-2xl', getColorClasses().icon]" />
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0 pt-1">
        <h4 :class="['text-base font-bold mb-1', getColorClasses().title]">
          {{ title }}
        </h4>
        <p v-if="message" :class="['text-sm leading-relaxed', getColorClasses().message]">
          {{ message }}
        </p>
      </div>

      <!-- Close Button -->
      <button
        @click="close"
        :class="['flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200', getColorClasses().closeBtn]"
        aria-label="Close notification"
      >
        <font-awesome-icon :icon="faXmark" class="text-lg" />
      </button>

      <!-- Auto-dismiss progress bar -->
      <div v-if="duration > 0" class="absolute bottom-0 left-0 right-0 h-1 bg-black/5 rounded-b-2xl overflow-hidden">
        <div
          :class="['h-full transition-all ease-linear', getColorClasses().progress]"
          :style="{ width: '100%', animation: `shrink ${duration}ms linear` }"
        ></div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>
