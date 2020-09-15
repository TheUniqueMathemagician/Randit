/*
export function someGetter (state) {
}
*/

export function custom(a_state) {
  return a_state.custom
}

export function settings_custom(a_state) {
  return a_state.settings_custom
}

export function details(a_state) {
  return a_state.details
}

export function settings_details(a_state) {
  return a_state.settings_details
}

// is detailed mode enabled ?
export function isCustom(a_state) {
  return a_state.isCustom
}

export function settings_isCustom(a_state) {
  return a_state.settings_isCustom
}

// is it custom mode enabled?
export function usual(a_state) {
  return a_state.usual
}

export function settings_usual(a_state) {
  return a_state.settings_usual
}

// if not custom, which one is picked
export function usualIndex(a_state) {
  return a_state.usualIndex
}

export function settings_usualIndex(a_state) {
  return a_state.settings_usualIndex
}
