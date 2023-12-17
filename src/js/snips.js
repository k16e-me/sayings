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


const arrayFrom = (list, ref = document) => {
    // Helper to convert nodelist to array literal
    return Array.from(ref.querySelectorAll(list))
}


const slideOut = (obj, enterClasses, leaveClasses) => {
    obj.classList.remove(...enterClasses)
    obj.classList.add(...leaveClasses)
}
const slideIn = (obj, leaveClasses, enterClasses) => {
    obj.classList.remove(...leaveClasses)
    obj.classList.add(...enterClasses)
}


const enter = () => (new Array('opacity-100', 'translate-y-0'))
const leave = () => (new Array('opacity-0', 'translate-y-20'))


const splitFirstOccurrenceOnly = (str, delim) => {
    // Credit to https://bobbyhadz.com/blog/javascript-split-string-only-on-first-instance-of-character
    const [first, ...rest] = str.split(delim)
    const rem = rest.join('')

    return rem
}


const isEmpty = obj => {
    // Credit here @ https://stackoverflow.com/questions/24403732/how-to-check-if-array-is-empty-or-does-not-exist#24403771
    if (!Array.isArray(obj) || !obj.length) return true
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
    const topOffset = isMobile() ? 56 : offset
    const elPos = Math.round(target.getBoundingClientRect().top)
    const offsetPos = elPos + window.scrollY - (topOffset - 24)

    window.scrollTo({ top: offsetPos })
}




// Exports
export {
    slugify, arrayFrom, slideOut, slideIn, enter, leave, splitFirstOccurrenceOnly, isEmpty, scrollToTopOffset, isMobile
}