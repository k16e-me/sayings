import {
    $, $$
} from '@scripts/snips'
import _scrollTopOffset from './scroll-top-offset'

export default function Jumplink() {
    const
        links = $$('[data-link]'),
        headerHeight = $('[data-main-header]').getBoundingClientRect().height

    links.forEach(link => {
        link.target = '_blank'
        link.addEventListener('click', e => {
            e.preventDefault()

            const
                linkEl = $(e.target.hash),
                parent = linkEl.parentNode

            _scrollTopOffset(linkEl, headerHeight)

            setTimeout(parent.classList.add('is-focused'), 1)
            parent.addEventListener('animationend', () => parent.classList.remove('is-focused'), false)
        })
    })
}