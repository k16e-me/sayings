// Functions
const slugify = str => {
    // Thanks to https://dev.to/bybydev/how-to-slugify-a-string-in-javascript-4o9n
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()
    str = str
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    return str
}


// Selectors
const body = () => document.body
const $$ = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector))
const $ = (selector, parent) => (parent ? parent : document).querySelector(selector)


const slideOut = (obj, enterClasses, leaveClasses) => {
    obj.classList.remove(...enterClasses)
    obj.classList.add(...leaveClasses)
}
const slideIn = (obj, leaveClasses, enterClasses) => {
    obj.classList.remove(...leaveClasses)
    obj.classList.add(...enterClasses)
}


const enter = () => new Array('opacity-100', 'translate-y-0')
const leave = () => new Array('opacity-0', 'translate-y-12')
const translateIn = () => new Array('translate-x-0', 'opacity-100')
const translateOut = () => new Array('translate-x-full', 'opacity-0')
const hidden = () => new Array('invisible')
const dimOn = obj => {
    obj.classList.remove(`opacity-0`)
    obj.classList.add(`opacity-70`)
}
const dimOff = obj => {
    obj.classList.add(`opacity-0`)
    obj.classList.remove(`opacity-70`)
}
const invisible = obj => obj.classList.add('sr-only')
const visible = obj => obj.classList.remove('sr-only')


const splitFirstOccurrenceOnly = (str, delim) => {
    // Credit to https://bobbyhadz.com/blog/javascript-split-string-only-on-first-instance-of-character
    const [first, ...rest] = str.split(delim)
    const rem = rest.join('')

    return rem
}


const isEmpty = obj => {
    if (obj === undefined || obj === null) return true
    if (!Object.keys(obj).length) return true
}


const isMobile = () => {
    const mql = window.matchMedia('(max-width: 1023px)')
    const checkMobile = () => {
        const screen = mql.matches ? true : false
        return screen
    }

    mql.addEventListener('change', checkMobile)

    return checkMobile()
}


const scrollToTopOffset = (target, offset) => {
    // Credit here @ https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
    const topOffset = isMobile() ? 96 : offset
    const elPos = Math.round(target.getBoundingClientRect().top)
    const offsetPos = (elPos + window.scrollY) - (topOffset + 8)

    window.scrollTo({ top: offsetPos })
}

const clearSearch = (input, arr, obj) => {
    input.value = ''
    arr.map(a => hidePiece(a))
}



// Exports
export {
    body, slugify, $, $$, slideOut, slideIn, enter, leave, translateIn, translateOut, hidden, splitFirstOccurrenceOnly, isEmpty, scrollToTopOffset, isMobile, dimOn, dimOff, invisible, visible, clearSearch
}