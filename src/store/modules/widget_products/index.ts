import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'
import type { WidgetProductsState } from './state'

import type { Module } from 'vuex'

export interface RootState {
  WidgetProductsState: WidgetProductsState
}

const module: Module<WidgetProductsState, RootState> = {
  namespaced: true,
  state: state(),
  actions,
  getters,
  mutations
}

export default module
