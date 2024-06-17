export default function _isMobile() {
    const
        mql = window.matchMedia('(max-width: 1023px)'),
        checkMobile = () => {
            const screen = mql.matches ? true : false
            return screen
        }

    mql.addEventListener('change', checkMobile)

    return checkMobile()
}