import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//vuetify
import router from './routes'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Icons
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi
        }},
    components,
    directives,
})

const app = createApp(App)

app.directive('reveal', {
    mounted(el, binding) {
        el.classList.add('reveal')

        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
        if (prefersReducedMotion) {
            el.classList.add('is-visible')
            return
        }

        const threshold = typeof binding.value === 'number' ? binding.value : 0.12

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                }
            },
            { threshold }
        )

        observer.observe(el)
        el.__revealObserver = observer
    },
    unmounted(el) {
        el.__revealObserver?.disconnect?.()
        delete el.__revealObserver
    },
})

app.directive('parallax', {
    mounted(el, binding) {
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
        if (prefersReducedMotion) return

        const opts = typeof binding.value === 'object' && binding.value !== null ? binding.value : {}
        const speed = typeof binding.value === 'number' ? binding.value : (typeof opts.speed === 'number' ? opts.speed : 0.15)
        const max = typeof opts.max === 'number' ? opts.max : 28

        let rafId = 0
        const update = () => {
            rafId = 0
            const rect = el.getBoundingClientRect()
            const viewH = window.innerHeight || 1
            const distanceFromCenter = (rect.top + rect.height / 2) - viewH / 2
            const progress = distanceFromCenter / viewH

            const y = Math.max(-max, Math.min(max, -progress * (max * 2) * speed))
            el.style.setProperty('--parallax-y', `${y.toFixed(2)}px`)
        }

        const schedule = () => {
            if (rafId) return
            rafId = window.requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule)

        el.__parallaxCleanup = () => {
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
            if (rafId) window.cancelAnimationFrame(rafId)
        }
    },
    unmounted(el) {
        el.__parallaxCleanup?.()
        delete el.__parallaxCleanup
    },
})

app.use(vuetify).use(router).mount('#app')
