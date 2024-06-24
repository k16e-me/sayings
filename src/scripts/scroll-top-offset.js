import _isMobile from './is-mobile'

export default function _scrollTopOffset(target, offset) {
    // Credit here @ https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
    const
        smallScreenOffset = 160,
        offsetAdjust = 8,
        topOffset = _isMobile() ? smallScreenOffset : offset,
        elPos = Math.round(target.getBoundingClientRect().top),
        offsetPos = (elPos + window.scrollY) - (topOffset + offsetAdjust)

    window.scrollTo({ top: offsetPos })
}