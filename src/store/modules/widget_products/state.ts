import { type WidgetProductsModel } from "../../../models/WidgetProductsModel";

export interface WidgetProductsState {
  all: WidgetProductsModel[]
}

const state = (): WidgetProductsState => ({
  all: []
});

export default state;
