import { expect, describe, it, vi } from 'vitest'
import actions from '@/store/modules/widget_products/actions'
import type { WidgetProductsModel } from '@/models/WidgetProductsModel'
const all = [
  {
    id: 1,
    type: 'plastic bottles',
    amount: 100,
    action: 'collects',
    active: true,
    linked: true,
    selectedColor: 'green'
  },
  {
    id: 2,
    type: 'trees',
    amount: 10,
    action: 'plants',
    active: false,
    linked: false,
    selectedColor: 'black'
  },
  {
    id: 3,
    type: 'carbon',
    amount: 20,
    action: 'offsets',
    active: false,
    linked: false,
    selectedColor: 'blue'
  }
]
//https://github.com/vuejs/vuex/issues/1461#issuecomment-443482569
const fetchAll = actions.fetchAll as (context: {
  commit: unknown
  state: object
}) => Promise<WidgetProductsModel[]>

vi.doMock('@/services/WidgetProductsService', () => ({
  default: { list: vi.fn().mockResolvedValue(all) }
}))
describe('widget_products mutations and getters', () => {
  it('fetches all', async () => {
    const context = {
      commit: vi.fn(),
      state: {}
    }
    await fetchAll(context)
    expect(context.commit).toHaveBeenCalledWith('setAll', all)
  })
})
