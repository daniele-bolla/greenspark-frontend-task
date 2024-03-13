import ApiService from '@/services/ApiService'
import type { WidgetProductsModel } from '@/models/WidgetProductsModel'
const API_ENDPOINT = '/v2/product-widgets'

async function list() {
  const data = await ApiService.get<WidgetProductsModel[]>(`${API_ENDPOINT}`)
  return data
}

export default {
  list
}
