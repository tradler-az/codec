<script setup lang="js">
import { faLocation, faMailReply, faPhoneAlt, faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <footer class="footer">
        <div class="footer-upper">
            <div class="footer-col">
                <span class="footer-logo">VueCodec</span>
                <p class="footer-description">
                    Kenya's benchmark in Integrated Facilities Management — delivering unmatched efficiency, comfort,
                    sustainability, compliance, and cost-effective results in facilities and properties that add value
                    to every client and partner we serve.
                </p>
            </div>


            <div class="footer-col">
                <h4 class="footer-title">Quick Links</h4>
                <nav class="footer-links">
                    <router-link to="/" class="footer-link">Home</router-link>
                    <router-link to="/about" class="footer-link">About</router-link>
                    <router-link to="/services" class="footer-link">Services</router-link>
                    <router-link to="/contact" class="footer-link">Contact</router-link>
                </nav>
            </div>

            <div class="footer-col">
                <h4 class="footer-title">Contact</h4>
                <p class="contact-item">
                    <faMailReply /> info@codec.co.ke
                </p>
                <p class="contact-item">
                    <faPhoneAlt /> +254 700 000000
                </p>
                <p class="contact-item">
                    <faLocation /> Nairobi, Kenya
                </p>
            </div>

        </div>


        <div class="footer-lower">
            <p>&copy; 2024 Codec. All rights reserved.</p>

            <div class="social-links">
                <a href="https://facebook.com" target="_blank" class="social-link" aria-label="Facebook">
                    <faFacebook />
                </a>
                <a href="https://github.com" target="_blank" class="social-link" aria-label="GitHub">
                    <faGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" class="social-link" aria-label="LinkedIn">
                    <faLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" class="social-link" aria-label="Instagram">
                    <faInstagram />
                </a>
            </div>

            <div class="footer-policies">
                <router-link to="/privacy" class="policy-link">Privacy Policy</router-link>
                <router-link to="/terms" class="policy-link">Terms of Service</router-link>
            </div>
        </div>

    </footer>
</template>


<style scoped>
.footer {
    background: #f8f9fa;
    padding: 3rem 2rem 1.5rem;
    margin-top: 4rem;
}


.footer-upper {
    max-width: 1800px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.footer-col {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2563eb;
}

.footer-description {
    color: #555;
    line-height: 1.6;
}

.footer-title {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
}


.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.footer-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
}

.footer-link:hover {
    color: #2563eb;
}


.contact-item {
    font-size: 0.95rem;
    color: #333;
}


.footer-lower {
    max-width: 2000px;
    margin: 2.5rem auto 0;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-policies {
    display: flex;
    gap: 1rem;
}

.policy-link {
    text-decoration: none;
    font-size: 0.95rem;
    color: #2563eb;
}

.policy-link:hover {
    text-decoration: underline;
}

.social-links {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.social-link {
    font-size: 1.2rem;
    color: #555;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #2563eb;
}

@media (max-width: 900px) {
    .footer-upper {
        grid-template-columns: 1fr;
    }

    .footer-lower {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
