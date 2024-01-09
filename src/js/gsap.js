import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $ } from './snips'

gsap.registerPlugin(ScrollTrigger)

const
    tl = gsap.timeline({ // Timeline
        defaults: {
            delay: 0.15,
            duration: 0.5,
            autoAlpha: 0,
            opacity: 0
        }
    }),


    // Signatures
    dropIn = {
        y: -24,
        ease: 'back.out',
        clearProps: 'all'
    },
    flyIn = {
        y: -12,
        scale: 1.125
    },
    riseIn = {
        y: 12,
        scale: 0.99
    },


    // Islands
    Silence = () => {
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
    },
    runAnimations = () => {
        $('[data-gsap="logo"]') && tl.from('[data-gsap="logo"]', dropIn)
        $('[data-gsap="fly-in"]') && tl.from('[data-gsap="fly-in"]', flyIn)
        $('[data-gsap="rise-in"]') && tl.from('[data-gsap="rise-in"]', {
            ...riseIn,
            onComplete: () => $('[data-wrapper="main"]').removeAttribute('style')
        })
    }


// Exports
export { Silence, runAnimations }