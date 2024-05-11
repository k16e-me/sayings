import {
    $, $$, translateIn, translateOut, hidden, body, dimOn, dimOff
} from '../js/snips'

export default function Slideover() {
    if ($('#slideover')) {
        const
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

        function hideSlideoverContent(elAll) { elAll.forEach(elOne => elOne.classList.add('sr-only')) }
        function showSlideoverContent(el) { el.classList.remove('sr-only') }
    }
}