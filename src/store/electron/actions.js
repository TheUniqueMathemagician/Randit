/*
export function someAction (context) {
}
*/

export function init({ commit, dispatch }) {
    const electron = window.require('electron')
    const ipc = electron.ipcRenderer
    // IPC events
    ipc.on('maximized', (a_event, a_data) => {
        commit('maximized', true)
    })
    ipc.on('unMaximized', (a_event, a_data) => {
        commit('maximized', false)
    })
    ipc.on('setConfig', (a_event, a_data) => {
        // commit('application/config', a_data)
        this.commit('application/config', a_data)
    })

    // Saving IPc to the store
    commit('ipc', ipc)

    // Send to IPC
    ipc.send('getConfig')
}
