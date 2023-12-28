import {
    $, $$, scrollToTopOffset, enter, leave, visible, invisible
} from './snips'
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'

gsap.registerPlugin(Flip)

Astrolog()
Jumplink()
Search()


function Search() {
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
            duration: 0.3,
            scale: true,
            ease: 'power1.inOut',
            stagger: 0.08,
            onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.3 }),
            onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0, duration: 0.3 })
        })
    }
}


function Jumplink() {
    const
        links = $$('[data-link]'),
        headerHeight = document.querySelector('[data-main-header]').getBoundingClientRect().height

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            const
                linkEl = document.querySelector(e.target.hash),
                parent = linkEl.parentNode

            scrollToTopOffset(linkEl, headerHeight)

            parent.classList.add('is-focused')
            parent.addEventListener('animationend', () => parent.classList.remove('is-focused'), false)
        })
    })
}


function Astrolog() {
    console.log('Thank God for Astro 😍')
}