import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WidgetCard from '../WidgetCard.vue'
import { createStore } from 'vuex'
import mutations from '../../store/modules/widget_products/mutations'
import BadgeColours from '../BadgeColours.vue'
import InfoTooltip from '../InfoTooltip.vue'
import BaseCheckbox from '../BaseCheckbox.vue'
import BaseToggle from '../BaseToggle.vue'

const mockStore = createStore({
  modules: {
    widget_products: {
      namespaced: true,
      mutations
    }
  }
})
describe('WidgetCard', () => {
  it('renders with correct badge color (green)', () => {
    const wrapper = mount(WidgetCard, {
      props: {
        widget: {
          id: 1,
          type: 'plastic bottles',
          amount: 100,
          action: 'collects',
          active: true,
          linked: true,
          selectedColor: 'green'
        }
      },
      global: {
        plugins: [mockStore]
      }
    })
    const card = wrapper.find('#card_1')
    const cardHead = wrapper.find('.card-head')
    const textActionEl = wrapper.find('.text-action')
    const textAmountTypenEl = wrapper.find('.text-amount-type')

    const badgeColoursComp = wrapper.findComponent(BadgeColours)
    const InfoTooltipComp = wrapper.findComponent(InfoTooltip)
    const baseCheckboxComp = wrapper.findComponent(BaseCheckbox)
    const baseToggleComp = wrapper.findComponent(BaseToggle)

    expect(card.classes()).toContain('text-white-dark')
    expect(cardHead.classes()).toContain('bg-green')
    expect(textActionEl.text()).toBe('This product collects')
    expect(textAmountTypenEl.text()).toBe('100 plastic bottles')

    expect(baseCheckboxComp.props().value).toBe(true)
    expect(baseToggleComp.props().value).toBe(true)
    expect(badgeColoursComp.props().selectedColor).toBe('green')
    expect(InfoTooltipComp.isVisible()).toBeTruthy()
  })

  it('renders with correct badge color (beige)', () => {
    const wrapper = mount(WidgetCard, {
      props: {
        widget: {
          selectedColor: 'beige',
          id: 2,
          type: 'carbon',
          amount: 0,
          action: 'collects',
          active: false,
          linked: true
        }
      },
      global: {
        plugins: [mockStore]
      }
    })
    const card = wrapper.find('#card_2')
    const cardHead = wrapper.find('.card-head')
    const textActionEl = wrapper.find('.text-action')
    const textAmountTypenEl = wrapper.find('.text-amount-type')

    const badgeColoursComp = wrapper.findComponent(BadgeColours)
    const InfoTooltipComp = wrapper.findComponent(InfoTooltip)
    const baseCheckboxComp = wrapper.findComponent(BaseCheckbox)
    const baseToggleComp = wrapper.findComponent(BaseToggle)

    expect(card.classes()).toContain('text-green')
    expect(cardHead.classes()).toContain('bg-beige')
    expect(textActionEl.text()).toBe('This product collects')
    expect(textAmountTypenEl.text()).toBe('0 carbon')

    expect(baseCheckboxComp.props().value).toBe(true)
    expect(baseToggleComp.props().value).toBe(false)
    expect(badgeColoursComp.props().selectedColor).toBe('beige')
    expect(InfoTooltipComp.isVisible()).toBeTruthy()
  })

  it('sets color (blue)', () => {
    const wrapper = mount(WidgetCard, {
      props: {
        widget: {
          selectedColor: 'beige',
          id: 2,
          type: 'carbon',
          amount: 0,
          action: 'collects',
          active: false,
          linked: true
        }
      },
      global: {
        plugins: [mockStore]
      }
    })
    const card = wrapper.find('#card_2')
    const cardHead = wrapper.find('.card-head')
    const textActionEl = wrapper.find('.text-action')
    const textAmountTypenEl = wrapper.find('.text-amount-type')

    const badgeColoursComp = wrapper.findComponent(BadgeColours)
    const InfoTooltipComp = wrapper.findComponent(InfoTooltip)
    const baseCheckboxComp = wrapper.findComponent(BaseCheckbox)
    const baseToggleComp = wrapper.findComponent(BaseToggle)

    expect(card.classes()).toContain('text-green')
    expect(cardHead.classes()).toContain('bg-beige')
    expect(textActionEl.text()).toBe('This product collects')
    expect(textAmountTypenEl.text()).toBe('0 carbon')

    expect(baseCheckboxComp.props().value).toBe(true)
    expect(baseToggleComp.props().value).toBe(false)
    expect(badgeColoursComp.props().selectedColor).toBe('beige')
    expect(InfoTooltipComp.isVisible()).toBeTruthy()
  })
})
