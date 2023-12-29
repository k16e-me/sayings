import {
    $, $$, scrollToTopOffset, enter, leave, visible, invisible
} from './snips'
import Search from './search'

Astrolog()
Jumplink()
$('#search') && Search()


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