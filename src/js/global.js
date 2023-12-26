import { arrayFrom, scrollToTopOffset, enter, leave } from './snips'

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

    const main = document.querySelector('[data-main]')
    // document.addEventListener('astro:before-preparation', () => {
    //     main.classList.add(...enter())
    //     main.classList.remove(...leave())
    // })
    // document.addEventListener('astro:after-preparation', () => {
    //     main.classList.remove(...enter())
    //     main.classList.add(...leave())
    // })
})()