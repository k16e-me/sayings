import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $ } from './snips'

gsap.registerPlugin(ScrollTrigger)

const scaleIn = () => {
    if (!'[data-gsap="scale-in"]') return
    gsap.from('[data-gsap="scale-in"]', {
        scrollTrigger: {
            trigger: '[data-gsap="scale-in"]',
            toggleActions: 'restart pause reverse pause'
        },
        y: '100%',
        ease: 'expoScale(0.3,7,none)',
        opacity: 0,
        scale: 2,
        duration: .4
    })
}

export { scaleIn }