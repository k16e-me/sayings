import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $ } from './snips'

gsap.registerPlugin(ScrollTrigger)

const Silence = () => {
    if (!$('[data-gsap="silence"]')) return
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

const FlyIn = () => {
    gsap.from('[data-gsap="fly-in"]', {
        y: -8,
        scale: 1.15,
        opacity: 0,
        duration: .5
    })
}

const Header = () => {
    gsap.from('[data-main-header]', {
        y: '-100%',
        opacity: 0,
        duration: .5,
        delay: .5
    })
}

export { Silence, FlyIn, Header }