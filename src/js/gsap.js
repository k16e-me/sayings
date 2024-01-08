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

const Header = () => {
    if (!$('[data-main-header]')) return
    gsap.from('[data-main-header]', {
        scrollTrigger: {
            trigger: '[data-main-header]'
        },
        y: -24,
        opacity: 0,
        duration: .5,
        stagger: 0.1,
        delay: .5
    })
}

export { Silence, FlyIn, MoveIn, Header }