import type { MutationTree } from 'vuex'
import type { WidgetProductsState } from '@/store/modules/widget_products/state'
import { type Colors } from '@/models/WidgetProductsModel'
interface setColorParams {
  id: number
  value: Colors
}
interface setBoleanParams {
  id: number
  value: boolean
}

const mutations: MutationTree<WidgetProductsState> = {
  setAll(state: WidgetProductsState, all: WidgetProductsState['all']): void {
    state.all = all
  },
  setActive(state: WidgetProductsState, { id: widegetID, value }: setBoleanParams): void {
    const widget = state.all.find(({ id }) => widegetID == id)
    if (widget) {
      widget.active = value
      if (value === true) {
        const others = state.all.filter(({ id }) => widegetID != id)
        others.forEach((w) => {
          w.active = false
        })
      }
    }
  },
  setLinked(state: WidgetProductsState, { id: widegetID, value }: setBoleanParams): void {
    const widget = state.all.find(({ id }) => widegetID == id)
    if (widget) widget.linked = value
  },
  setColor(state: WidgetProductsState, { id: widegetID, value }: setColorParams): void {
    const widget = state.all.find(({ id }) => widegetID == id)
    if (widget) widget.selectedColor = value
  }
}

export default mutations
