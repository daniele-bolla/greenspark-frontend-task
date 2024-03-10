import type { WidgetProductsState } from '@/store/modules/widget_products/state'

const getAll = (state: WidgetProductsState): WidgetProductsState['all'] => state.all
const getById = (state: WidgetProductsState) => (widgetID: number) =>
  getAll(state).find(({ id }) => id == widgetID)

export default {
  getAll,
  getById
}
