import {
    $, $$, slideIn, slideOut, enter, leave
} from '../js/snips'

export default function Toast() {
    const
        links = $$('[data-copy]'),
        toast = $('[data-toast]')

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            navigator.clipboard.writeText(e.target.href)

            if (toast.classList.contains('opacity-100')) return

            slideIn(toast, leave(), enter())

            setTimeout(() => {
                slideOut(toast, enter(), leave())
            }, 3000)
        })
    })
}