import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $ } from './snips'

gsap.registerPlugin(ScrollTrigger)

const Silence = () => {
    if (!'[data-gsap="silence"]') return
    gsap.from('[data-gsap="silence"]', {
        scrollTrigger: {
            trigger: '[data-gsap="silence"]',
            toggleActions: 'restart pause reverse pause'
        },
        y: '100%',
        ease: 'expoScale(0.3,7,none)',
        opacity: 0,
        scale: 2,
        duration: .4
    })
}

export { Silence }