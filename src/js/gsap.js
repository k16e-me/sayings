import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $ } from './snips'

gsap.registerPlugin(ScrollTrigger)

const
    scaleIn = $('[data-gsap="scale-in"]')

document.addEventListener('astro:page-load', () => {
    runScaleIn()
})


function runScaleIn() {
    gsap.from(scaleIn, {
        scrollTrigger: {
            trigger: scaleIn,
            toggleActions: 'restart pause reverse pause'
        },
        y: '100%',
        ease: 'expoScale(0.3,7,none)',
        opacity: 0,
        scale: 2,
        duration: .4
    })
}