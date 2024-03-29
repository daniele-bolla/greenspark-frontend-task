import { createStore, createLogger } from 'vuex'
import widget_products from '@/store/modules/widget_products'

const store = createStore({
  modules: {
    widget_products
  },
  strict: true,
  plugins: [createLogger()]
})
export default store
