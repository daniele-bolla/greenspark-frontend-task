import type { RootState } from './index'
import WidgetProductsService from '../../../services/WidgetProductsService'
import type { WidgetProductsState } from './state'
import type { ActionTree } from 'vuex'

const actions: ActionTree<WidgetProductsState, RootState> = {
  async fetchAll({ commit }) {
    try {
      const all = await WidgetProductsService.list()
      commit('setAll', all)
    } catch (error) {
      console.log(error)
    }
  }
}
export default actions
