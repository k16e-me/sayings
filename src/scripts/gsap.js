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
        y: -12,
        ease: 'back.out',
        clearProps: 'all'
    },
    flyIn = {
        y: -12,
        scale: 1.05
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
        $('[data-gsap="rise-in"]') && tl.from('[data-gsap="rise-in"]', {
            ...riseIn,
            onComplete: () => $('[data-wrapper="main"]').removeAttribute('style')
        })
        $('[data-gsap="list-fly-in"]') && gsap.utils.toArray('[data-gsap="list-fly-in"]').forEach(el => {
            tl.from(el, {
                ...flyIn,
                stagger: {
                    from: 'start',
                    each: 0.2,
                    grid: 'auto'
                }
            })
        })
    }


// Exports
export { Silence, runAnimations }