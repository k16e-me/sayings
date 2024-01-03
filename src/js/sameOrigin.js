export default function sameOrigin() {
    const
        anchors = Array.from(document.querySelectorAll('a')),
        localAnchors = anchors.filter(a => a.hostname === location.hostname && a.hash === '')

    localAnchors.forEach(a => {
        console.log(location.pathname === a.pathname)
        a => a.addEventListener('click', e => a.pathname === location.pathname && e.preventDefault())
    })
}