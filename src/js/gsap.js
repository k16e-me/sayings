import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scaleIn = document.querySelector('[data-gsap="scale-in"]')
const cards = gsap.utils.toArray('[data-gsap="move-in"]')

if (scaleIn) {
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

// if (cards.length) {
//     gsap.from(cards, {
//         scrollTrigger: {
//             trigger: cards,
//             toggleActions: 'play none none none'
//         },
//         stagger: { each: 0.3 },
//         y: 24,
//         ease: 'expoScale(0.3,7,none)',
//         opacity: 0,
//         duration: .4
//     })
// }