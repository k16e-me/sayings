import Alpine from 'alpinejs'

export default function runAlpine() {
    Alpine.store('states', {
        searchOn: false
    })

    Alpine.start()
}