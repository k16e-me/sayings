import { atom } from 'nanostores'

export const
    _collections = atom([])

export function _addCollections(item) { _collections.set(item) }