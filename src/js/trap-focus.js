import {
    $$
} from '../js/snips'

export default function TrapFocus(el, content) {
    /**
        * Credit
        * https://hidde.blog/using-javascript-to-trap-focus-in-an-element/
        * https://stackoverflow.com/questions/72006912/add-focus-to-pop-up-modal-on-click-for-tabbing-accessibility-javascript
    */
    let
        query = `a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='email']:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]), [tabindex='0']`,
        focusableEls = $$(query, el),
        firstFocusableEl = focusableEls[0],
        contentFocusableEls = $$(query, content),
        lastFocusableEl = contentFocusableEls[contentFocusableEls.length - 1]

    const
        KEYCODE_TAB = 9,
        KEYCODE_ENTER = 13

    firstFocusableEl.focus()
    el.addEventListener('keydown', e => {
        let
            isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB)

        if (!isTabPressed) return

        if (e.shiftKey) {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus()
                e.preventDefault()
            }
        } else {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus()
                e.preventDefault()
            }
        }
    })
}