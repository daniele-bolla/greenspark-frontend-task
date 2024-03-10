import type { RootState } from './index'
import WidgetProductsService from '@/services/WidgetProductsService'
import type { WidgetProductsState } from '@/store/modules/widget_products/state'
import type { ActionTree } from 'vuex'

const actions: ActionTree<WidgetProductsState, RootState> = {
  async fetchAll({ commit }) {
    const all = await WidgetProductsService.list()
    commit('setAll', all)
  }
}
export default actions
