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



// Exports
export { slugify, arrayFrom }