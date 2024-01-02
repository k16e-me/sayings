export default function Loading() {
    document.addEventListener('astro:before-preparation', beforePrep)
    document.addEventListener('astro:after-preparation', afterPrep)

    function beforePrep(params) {
        console.log('Before prep')
    }

    function afterPrep(params) {
        console.log('After prep')
    }
}