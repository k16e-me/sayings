// Functions
const slugify = str => {
    // Thanks to https://dev.to/bybydev/how-to-slugify-a-string-in-javascript-4o9n
    str = str.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()
    str = str
        .replace(/\/+/g, '-') // replace forward slash with hyphen any no. of times
        .replace(/[^a-z0-9 -]/g, '') // remove any character not corresponding to these
        .replace(/\s+/g, '-') // remove any whitespace character any no. of times
        .replace(/-+/g, '-') // replace even multiple hyphens with a single hyphen
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


const isEmpty = val => {
    return (
        val === undefined ||
        val === null ||
        (typeof val === 'object' && Object.keys(val).length === 0) ||
        (typeof val === 'string' && value.trim().length === 0)
    )
}


const clearSearch = (input, arr, obj) => {
    input.value = ''
    arr.map(a => hidePiece(a))
}



// Exports
export {
    body, slugify, $, $$, slideOut, slideIn, enter, leave, translateIn, translateOut, hidden, splitFirstOccurrenceOnly, isEmpty, dimOn, dimOff, invisible, visible, clearSearch
}