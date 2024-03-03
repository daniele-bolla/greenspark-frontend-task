import ApiService from "./ApiService";
import type { WidgetProductsModel } from "../models/WidgetProductsModel";
const API_ENDPOINT = "/product-widgets";

async function list() {
    const data = await ApiService.get<WidgetProductsModel[]>(`${API_ENDPOINT}`);
    return data
}

export default {
    list,

};