/*
export function someAction (context) {
}
*/
export function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (
        typeof navigator === 'object' &&
        typeof navigator.userAgent === 'string' &&
        navigator.userAgent.indexOf('Electron') >= 0
    ) {
        return true
    }

    return false
}

export function init({ commit, dispatch }) {
    if (dispatch('isElectron')) {
        commit('isElectron', true)
    } else {
        commit('isElectron', false)
    }
}
