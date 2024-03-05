import type { RootState } from './index'
import WidgetProductsService from '../../../services/WidgetProductsService'
import type { WidgetProductsState } from './state'

import type { ActionTree } from 'vuex'
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const actions: ActionTree<WidgetProductsState, RootState> = {
  async fetchAll({ commit }) {
    try {
      const all = await WidgetProductsService.list()
      commit('setAll', all)
    } catch (error) {
      console.log(error)
    }
  },
  setWidgetProp({ commit, getters, rootGetters }, { id, prop, value }) {
    const action = `set${capitalizeFirstLetter(prop)}`
    commit(action)
  }
}
export default actions
