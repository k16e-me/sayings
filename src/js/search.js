import {
    $, $$
} from './snips'
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'

gsap.registerPlugin(Flip)

export default function Search() {
    let
        typingTimer

    const
        pieces = $$('[data-piece]'),
        input = $('#search'),
        typeInterval = 500

    input.addEventListener('keyup', () => {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(liveSearch, typeInterval)
    })

    function liveSearch() {
        const
            query = input.value.toLowerCase(),
            state = Flip.getState(pieces)

        pieces.forEach(piece => {
            if (piece.textContent.toLowerCase().includes(query)) {
                piece.classList.remove('hidden')
            } else {
                piece.classList.add('hidden')
            }
        })

        Flip.from(state, {
            duration: 0.5,
            scale: true,
            ease: 'power1.inOut',
            absoluteOnLeave: true,
            prune: true,
            absolute: true,
            fade: true,
            simple: true,
            onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.3 }),
            onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0, duration: 0.3 })
        })
    }
}

/** Credits/refs
 * https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/
 * https://codepen.io/GreenSock/pen/NWRxarv?editors=0010
 * https://gsap.com/docs/v3/Plugins/Flip/
*/