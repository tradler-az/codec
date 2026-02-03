<script setup>
import { ref, onMounted} from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faPhone, faEnvelope, faMapMarkerAlt, faClock,
    faTriangleExclamation, faGlobe, faChevronDown, faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// Form State
const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    agree: false
})

const activeFaq = ref(null)

// FAQ Data
const faqs = [
    { q: "What services does OptivalFM provide?", a: "We provide integrated digital facilities management, smart scheduling, asset tracking, and compliance monitoring through our proprietary platform." },
    { q: "How quickly can you respond to emergencies?", a: "Our platform features a 24/7 emergency hotline and mobile workforce dispatch for immediate on-site response." },
    { q: "Do you serve small businesses?", a: "Yes, we offer scalable packages from 'Starter' for small teams to 'Enterprise' for large-scale corporations." },
    { q: "What areas in Kenya do you serve?", a: "While headquartered in Nairobi, our digital platform allows us to provide consultancy and systems management nationwide." }
]
// Scroll Animation
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

// State
const map = ref(null);
const userMarker = ref(null);
const currentCity = ref("Nairobi, Kenya");

// Coordinates extracted from your Google Maps link
const targetLocation = [-1.286389, 36.817223];

onMounted(() => {
    // 1. Initialize the Map
    map.value = L.map('map-container', { 
        zoomControl: false,
        attributionControl: false 
    }).setView(targetLocation, 15);

    // 2. Add Map Tiles (Standard OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map.value);

    // 3. Add a static marker for your specific "Nairobi" link location
    L.marker(targetLocation).addTo(map.value)
        .bindPopup('<b>Target Destination</b>')
        .openPopup();

    // 4. Start Live Geolocation Tracking
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const userCoords = [latitude, longitude];

                // Update or create the "Live" marker
                if (!userMarker.ref) {
                    const liveIcon = L.divIcon({
                        className: 'bg-[#00A659] w-4 h-4 rounded-full border-2 border-white shadow-md',
                        iconSize: [16, 16]
                    });
                    userMarker.value = L.marker(userCoords, { icon: liveIcon }).addTo(map.value);
                } else {
                    userMarker.value.setLatLng(userCoords);
                }
            },
            (error) => console.error("Location error:", error),
            { enableHighAccuracy: true }
        );
    }
});
</script>

<template>
    <main class="bg-white pt-20">

        <!-- header -->
        <section class="relative h-[45vh] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img src="../assets/office green6.jpeg" class="w-full h-full object-cover" alt="Services Background" />
                <div class="absolute inset-0 bg-gradient-to-b from-[#2E2E2E]/90 to-[#2E2E2E]/70"></div>
            </div>

            <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 v-scroll class="reveal-up text-5xl lg:text-7xl font-bold text-white mb-6">
                    Get <span class="text-[#00A659]"> In Touch</span>
                </h1>
                <p v-scroll class="reveal-up delay-200 text-xl text-white/70 max-w-2xl mx-auto">
                    Have questions about the OptivalFM platform or our management services? Our team is ready to assist
                    you.
                </p>
            </div>
        </section>

        <!-- contact -->
        <section class="py-24">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="grid lg:grid-cols-3 gap-12">

                    <!-- info column -->
                    <div class="space-y-12">
                        <div v-scroll class="reveal-left">
                            <h3 class="text-2xl font-bold text-[#2E2E2E] mb-6">Contact Information</h3>
                            <div class="space-y-6">
                                <div class="flex gap-4">
                                    <font-awesome-icon :icon="faMapMarkerAlt" class="text-[#00A659] mt-1" />
                                    <p class="text-gray-600">langata<br />Nairobi, Kenya</p>
                                </div>
                                <div class="flex gap-4">
                                    <font-awesome-icon :icon="faPhone" class="text-[#00A659] mt-1" />
                                    <p class="text-gray-600">+254 700 000 000<br />+254 700 000 000</p>
                                </div>
                                <div class="flex gap-4">
                                    <font-awesome-icon :icon="faEnvelope" class="text-[#00A659] mt-1" />
                                    <p class="text-gray-600">info@codec.com</p>
                                </div>
                                <div class="flex gap-4">
                                    <font-awesome-icon :icon="faGlobe" class="text-[#00A659] mt-1" />
                                    <p class="text-gray-600">www.codec.com</p>
                                </div>
                            </div>
                        </div>

                        <div v-scroll class="reveal-left delay-200 bg-slate-50 p-8 rounded-3xl border border-gray-100">
                            <h3 class="flex items-center gap-2 text-xl font-bold text-[#2E2E2E] mb-6">
                                <font-awesome-icon :icon="faClock" class="text-[#00A659]" /> Business Hours
                            </h3>
                            <ul class="space-y-3 text-sm text-gray-600">
                                <li class="flex justify-between"><span>Mon - Fri</span> <span
                                        class="font-bold text-[#2E2E2E]">8:00 AM - 6:00 PM</span></li>
                                <li class="flex justify-between"><span>Saturday</span> <span
                                        class="font-bold text-[#2E2E2E]">9:00 AM - 2:00 PM</span></li>
                                <li class="flex justify-between text-[#00A659] font-bold"><span>Sunday</span>
                                    <span>Emergency Only</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- form column -->
                    <div v-scroll
                        class="reveal-up lg:col-span-2 bg-white shadow-2xl shadow-gray-200/50 rounded-[2.5rem] p-8 lg:p-12 border border-gray-50">
                        <h3 class="text-2xl font-bold text-[#2E2E2E] mb-8">Send Us a Message</h3>
                        <form @submit.prevent class="grid md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">First Name *</label>
                                <input type="text" placeholder="Enter your first name"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00A659] transition-all">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">Last Name *</label>
                                <input type="text" placeholder="Enter your last name"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00A659] transition-all">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">Email Address *</label>
                                <input type="email" placeholder="Enter your email"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00A659] transition-all">
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-bold text-gray-700">Phone Number</label>
                                <input type="text" placeholder="Enter your phone number"
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00A659] transition-all">
                            </div>
                            <div class="md:col-span-2 space-y-2">
                                <label class="text-sm font-bold text-gray-700">Service Interest</label>
                                <select
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00A659] transition-all">
                                    <option>Select a service</option>
                                    <option>Digital Management</option>
                                    <option>Operations Optimization</option>
                                    <option>Consultancy</option>
                                </select>
                            </div>
                            <div class="md:col-span-2 space-y-2">
                                <label class="text-sm font-bold text-gray-700">Message *</label>
                                <textarea rows="4" placeholder="Tell us about your needs..."
                                    class="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00A659] transition-all"></textarea>
                            </div>
                            <div class="md:col-span-2 flex items-start gap-3">
                                <input type="checkbox" class="mt-1 text-[#00A659] focus:ring-[#00A659] rounded">
                                <label class="text-xs text-gray-500 italic">I agree to the Privacy Policy and consent to
                                    being contacted about my inquiry. *</label>
                            </div>
                            <button
                                class="md:col-span-2 w-full py-4 bg-[#00A659] text-white font-bold rounded-xl hover:bg-[#00837B] transition-all shadow-lg shadow-[#00A659]/20 flex items-center justify-center gap-2">
                                <font-awesome-icon :icon="faPaperPlane" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- contact card -->
        <section class="py-12 bg-slate-50">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="grid md:grid-cols-3 gap-8">

                    <!-- Call Us Now -->
                    <div v-scroll
                        class="reveal-up p-10 rounded-2xl bg-white text-center shadow-[0_10px_30px_rgba(0,166,89,0.08)]">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#00A659]/10 text-[#00A659]">
                            <font-awesome-icon :icon="faPhone" class="text-2xl" />
                        </div>
                        <h3 class="font-bold text-lg mb-2">Call Us Now</h3>
                        <p class="text-gray-500 text-sm">Speak directly with our experts</p>
                        <p class="font-bold text-[#00A659] mt-3">+254 700 000 000</p>
                    </div>

                    <!-- Email Us -->
                    <div v-scroll
                        class="reveal-up delay-100 p-10 rounded-2xl bg-white text-center shadow-[0_10px_30px_rgba(0,166,89,0.08)]">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#00A659]/10 text-[#00A659]">
                            <font-awesome-icon :icon="faEnvelope" class="text-2xl" />
                        </div>
                        <h3 class="font-bold text-lg mb-2">Email Us</h3>
                        <p class="text-gray-500 text-sm">Send us detailed requirements</p>
                        <p class="font-bold text-[#00A659] mt-3">info@codec.com</p>
                    </div>

                    <!-- 24/7 Emergency -->
                    <div v-scroll
                        class="reveal-up delay-200 p-10 rounded-2xl bg-white text-center shadow-[0_10px_30px_rgba(0,166,89,0.08)]">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#00A659]/10 text-[#00A659]">
                            <font-awesome-icon :icon="faTriangleExclamation" class="text-2xl" />
                        </div>
                        <h3 class="font-bold text-lg mb-2">24/7 Emergency</h3>
                        <p class="text-gray-500 text-sm">Round-the-clock support</p>
                        <p class="font-bold text-[#00A659] mt-3">Emergency Hotline</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- office location -->
        <section class="py-24">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 v-scroll class="reveal text-2xl font-bold text-center mb-6">Visit Our Office</h2>
                <p v-scroll class="reveal text-center text-gray-500 mb-12">Located in the heart of Nairobi</p>

                <div v-scroll
                    class="reveal-up grid md:grid-cols-2 bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden">

                    <div class="p-12">
                        <h3 class="font-bold text-lg mb-4">Office Location</h3>
                        <p class="text-gray-600">Nairobi</p>
                        <p class="text-gray-600">Kenya</p>
                    </div>
    <div class="relative group w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-white/10">
        <!-- Live Map Container -->
        <div 
            class="absolute bg-[#1a1a1a] inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.1] z-0"
        ></div>

        <!-- Floating UI Overlay -->
        <div class="absolute bottom-4 left-4 z-[1000] bg-[#2E2E2E]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
            <p class="text-white text-xs font-bold flex items-center gap-2">
                <font-awesome-icon :icon="faMapMarkerAlt" class="text-[#00A659]" />
                {{ currentCity }}
            </p>
        </div>
    </div>


                </div>
            </div>
        </section>

        <!-- FAQ section -->
        <section class="py-24 bg-slate-50">
            <div class="max-w-3xl mx-auto px-6 lg:px-8">
                <h2 v-scroll class="reveal text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                <p v-scroll class="reveal text-center text-gray-500 mb-12">Quick answers to common questions</p>

                <div class="space-y-4">
                    <div v-for="(faq, i) in faqs" :key="i" v-scroll :style="{ transitionDelay: `${i * 100}ms` }"
                        class="reveal-up bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <button @click="activeFaq = activeFaq === i ? null : i"
                            class="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-[#2E2E2E]">
                            {{ faq.q }}
                            <font-awesome-icon :icon="faChevronDown" :class="{ 'rotate-180': activeFaq === i }"
                                class="transition-transform text-[#00A659]" />
                        </button>
                        <div v-show="activeFaq === i" class="px-6 pb-4 text-gray-500 text-sm leading-relaxed">
                            {{ faq.a }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.reveal,
.reveal-up,
.reveal-left,
.reveal-right {
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-up {
    transform: translateY(30px);
}

.reveal-left {
    transform: translateX(-30px);
}

.reveal-right {
    transform: translateX(30px);
}

.animate-active {
    opacity: 1 !important;
    transform: translate(0, 0) !important;
}


leaflet-default-icon-path {
    background-image: url(https://unpkg.com);
}
</style>
