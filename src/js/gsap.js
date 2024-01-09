import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $ } from './snips'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({ delay: 0.5 })
const dropIn = {
    y: -20,
    duration: 0.4,
    autoAlpha: 0,
    ease: 'back.out',
    clearProps: 'all',
    transition: 'none'
}

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
        duration: .5
    })
}

const FlyIn = () => {
    if (!$('[data-gsap="fly-in"]')) return
    gsap.from('[data-gsap="fly-in"]', {
        y: -8,
        scale: 1.15,
        opacity: 0,
        duration: .5
    })
}

const MoveIn = () => {
    if (!$('[data-gsap="move-in"]')) return
    gsap.from('[data-gsap="move-in"]', {
        y: 8,
        scale: 0.99,
        opacity: 0,
        duration: .5
    })
    setTimeout(() => { // or add a separate always running gsap on this fixed guy
        $('[data-gsap="move-in"]').removeAttribute('style')
    }, 3000)
}

const CreateAnimations = () => {
    if (!$('[data-gsap]')) return
    tl.from('[data-gsap="logo"]', dropIn, 0)
}

export { Silence, FlyIn, MoveIn, CreateAnimations }