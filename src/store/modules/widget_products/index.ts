import mutations from '@/store/modules/widget_products/mutations'
import actions from '@/store/modules/widget_products/actions'
import getters from '@/store/modules/widget_products/getters'
import state from '@/store/modules/widget_products/state'
import type { WidgetProductsState } from '@/store/modules/widget_products/state'

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
