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



// Exports
export { slugify, arrayFrom, slideOut, slideIn, enter, leave, splitFirstOccurrenceOnly }