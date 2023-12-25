import { arrayFrom, scrollToTopOffset } from './snips'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

(() => {
    console.log('Thank God for Astro 😍')

    const links = arrayFrom('[data-link]')
    const headerHeight = document.querySelector('[data-main-header]').getBoundingClientRect().height

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const linkEl = document.querySelector(e.target.hash)
            const parent = linkEl.parentNode
            scrollToTopOffset(linkEl, headerHeight)

            parent.classList.add('is-focused')
            parent.addEventListener('animationend', () => parent.classList.remove('is-focused'), false)
        })
    })


    // All the gsap's
    gsap.registerPlugin(ScrollTrigger)
    const scaleInUp = document.querySelector('[data-gsap="scale-in-up"]')

    if (scaleInUp) {
        gsap.from(scaleInUp, {
            scrollTrigger: {
                trigger: scaleInUp,
                toggleActions: 'restart pause reverse pause'
            },
            y: '100%',
            ease: 'expoScale(0.3,7,none)',
            opacity: 0,
            scale: 2,
            duration: .4
        })
    }
})()