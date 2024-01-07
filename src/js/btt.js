import {
    slideOut, enter, leave, invisible, visible
} from '../js/snips'

export default function BackToTop() {
    const
        btt = document.querySelector('[data-backtotop]'),
        btn = btt.querySelector('button')

    hideBtt()

    window.addEventListener('scroll', () => {
        if (window.scrollY > 640) showBtt()
        else hideBtt()
    })

    function showBtt() {
        visible(btt)
        btt.classList.add(...enter())
        btt.classList.remove(...leave())
    }
    function hideBtt() {
        slideOut(btt, enter(), leave())
        setTimeout(() => invisible(btt), 300)
    }

    btn.addEventListener('click', () => window.scrollTo({ top: 0, left: 0 }))
}