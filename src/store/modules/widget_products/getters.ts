import type { WidgetProductsState } from "./state";

const getAll = (state: WidgetProductsState): WidgetProductsState['all'] => state.all;

export default {
  getAll
};
