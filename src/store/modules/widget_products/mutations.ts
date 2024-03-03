import type { MutationTree } from "vuex";
import type { WidgetProductsState } from "./state";

const mutations: MutationTree<WidgetProductsState> = {
  setAll(state: WidgetProductsState, all: WidgetProductsState['all']): void {
    state.all = all;
  },
}

export default mutations;
