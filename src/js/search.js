import { $, $$, scrollToTopOffset } from '../js/snips'
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import Alpine from 'alpinejs'

gsap.registerPlugin(Flip)

export default function Search() {
    let typingTimer

    const
        pieces = $$('[data-piece]'),
        input = $('#search'),
        typeInterval = 150,
        icon = $('[data-search-icon]'),
        container = $('[data-wrapper="content"]'),
        close = $('[data-search-close]')

    document.addEventListener('keydown', e => {
        if ((e.metaKey && e.key === 'k')) focus()
        if (input === document.activeElement) {
            if (e.key === 'Escape') input.blur()
        }
    })

    icon && icon.addEventListener('click', () => focus())

    input && input.addEventListener('keyup', () => {
        clearTimeout(typingTimer)
        typingTimer = setTimeout(liveSearch, typeInterval)
    })
    // console.log(Alpine.store('states').searchOn)
    input.addEventListener('input', () => console.log(Alpine.store('states').searchOn))

    close.addEventListener('click', () => {
        clearSearch(input)
        Alpine.store('states').searchOn = false
    })

    function focus() {
        input.focus()
        scrollToTopOffset(container, 12)
    }

    function liveSearch() {
        const
            query = input.value.toLowerCase().trim(),
            state = Flip.getState(pieces)

        if (query.length) Alpine.store('states').searchOn = true
        else Alpine.store('states').searchOn = false

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

    function clearSearch(input) {
        input.value = ''
    }
}