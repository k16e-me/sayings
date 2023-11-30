const
    backToTop = document.querySelector('[data-backtotop]'),
    button = backToTop.querySelector('button'),
    enter = ['opacity-100', 'translate-y-0'],
    leave = ['opacity-0', 'translate-y-20']

window.addEventListener('scroll', () => {
    if (window.scrollY > 640) {
        backToTop.classList.add(...enter)
        backToTop.classList.remove(...leave)
    }
    else {
        backToTop.classList.remove(...enter)
        backToTop.classList.add(...leave)
    }
})

button.addEventListener('click', () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), false)