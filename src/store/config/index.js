import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import dice from './dice'
import key from './key'
import wheel from './wheel'
import word from './word'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    dice,
    key,
    wheel,
    word
  }
}
