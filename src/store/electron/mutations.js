/*
export function someMutation (state) {
}
*/

export function ipc(a_state, a_value) {
    a_state.ipc = a_value
}

export function maximized(a_state, a_value) {
    a_state.maximized = a_value || false
}
