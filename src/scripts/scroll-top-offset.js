import _isMobile from './is-mobile'

export default function _scrollTopOffset(target, offset) {
    // Credit here @ https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
    const
        topOffset = _isMobile() ? 160 : offset,
        elPos = Math.round(target.getBoundingClientRect().top),
        offsetPos = (elPos + window.scrollY) - (topOffset + 8)

    window.scrollTo({ top: offsetPos })
}