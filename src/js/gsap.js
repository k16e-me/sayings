import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $ } from './snips'

gsap.registerPlugin(ScrollTrigger)

const
    tl = gsap.timeline({
        delay: 0.5,
        duration: 0.5
    }),
    dropIn = {
        y: -24,
        autoAlpha: 0,
        ease: 'back.out',
        clearProps: 'all',
        transition: 'none'
    },
    flyIn = {
        y: -12,
        scale: 1.15,
        opacity: 0
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

const runAnimations = () => {
    $('[data-gsap="logo"]') && tl.from('[data-gsap="logo"]', dropIn, 0)
    $('[data-gsap="fly-in"]') && tl.from('[data-gsap="fly-in"]', flyIn, 0)
}

export { Silence, MoveIn, runAnimations }