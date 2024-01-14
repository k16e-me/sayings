import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

export default function runAlpine() {
    Alpine.store('states', {
        searchOn: false
    })

    Alpine.plugin(persist)
    Alpine.start()
    
    console.log('Alpine take off 🚀')
}