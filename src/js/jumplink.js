import {
    $$, scrollToTopOffset
} from '../js/snips'

export default function Jumplink() {
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