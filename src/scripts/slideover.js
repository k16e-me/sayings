import {
    $, $$, translateIn, translateOut, hidden, body, dimOn, dimOff
} from '@scripts/snips'
import TrapFocus from './trap-focus'

export default function Slideover() {
    if ($('#slideover')) {
        const
            KEYCODE_ESCAPE = 27,
            slideoverToggles = $$('[data-toggle="slideover"]'),
            slideover = $('#slideover'),
            close = $('#close', slideover),
            backdrop = $('[data-backdrop]'),
            links = $$('[data-link]'),
            slideoverContent = $$('[data-slideover]', slideover),
            slideoverTitle = $('#slideoverTitle', slideover)

        hideSlideoverContent(slideoverContent)

        slideoverToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const
                    clickedEl = e.target,
                    attr = clickedEl.getAttribute('data-slideover'),
                    slideoverContentToShow = slideoverContent.find(el => (el.dataset.slideover === attr)),
                    title = slideoverContentToShow.getAttribute('data-slideover-title')

                TrapFocus(slideover, slideoverContentToShow, removeSlideover)
                showSlideoverContent(slideoverContentToShow)
                slideoverTitle.textContent = title

                dimOn(backdrop)
                body().style.overflow = 'hidden'
                backdrop.classList.remove(...hidden())
                slideover.classList.add(...translateIn())
                slideover.setAttribute('aria-hidden', 'false')
                slideover.classList.remove(...translateOut())
            })
        })

        backdrop.addEventListener('click', () => removeSlideover())
        close.addEventListener('click', () => removeSlideover())
        document.addEventListener('keydown', e => (e.key === 'Escape' || e.keyCode === KEYCODE_ESCAPE) && removeSlideover() )
        links.map(link => link.addEventListener('click', () => removeSlideover()))

        function removeSlideover() {
            dimOff(backdrop)
            body().style.overflow = 'auto'
            slideover.classList.remove(...translateIn())
            slideover.classList.add(...translateOut())
            slideover.setAttribute('aria-hidden', 'true')
            hideSlideoverContent(slideoverContent)
            setTimeout(() => backdrop.classList.add(...hidden()), 300)
        }

        function hideSlideoverContent(elAll) {
            elAll.forEach(elOne => {
                elOne.setAttribute('inert', 'true')
                elOne.classList.add('sr-only')
            })
        }
        function showSlideoverContent(el) {
            el.removeAttribute('inert')
            el.classList.remove('sr-only')
        }
    }
}