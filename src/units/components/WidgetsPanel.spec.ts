import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import WidgetsPanel from '@/components/WidgetsPanel.vue'
import { createStore } from 'vuex'
import getters from '@/store/modules/widget_products/getters'
import WidgetCard from '@/components/WidgetCard.vue'

const state = {
  all: [
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
}
const actions = {
  fetchAll: vi.fn()
}

const mockStore = createStore({
  modules: {
    widget_products: {
      namespaced: true,
      state,
      actions,
      getters
    }
  }
})
describe('WidgetsPanel', () => {
  it('renders the 3 intial widget products', () => {
    const wrapper = shallowMount(WidgetsPanel, {
      global: {
        plugins: [mockStore]
      }
    })
    expect(wrapper.isVisible()).toBeTruthy()
    const widgets = wrapper.findAllComponents(WidgetCard)
    expect(widgets).toHaveLength(3)
  })
})
