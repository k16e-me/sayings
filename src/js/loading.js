import { $ } from './snips'
import gsap from 'gsap'

export default function Loading() {
    document.addEventListener('astro:before-preparation', beforePrep)
    document.addEventListener('astro:after-preparation', afterPrep)

    const
        wrapper = $('[data-wrapper]')

    function beforePrep(params) {
        if (!wrapper) return

        console.log('Before prep')
    }

    function afterPrep(params) {
        if (!wrapper) return

        console.log('After prep')
    }
}