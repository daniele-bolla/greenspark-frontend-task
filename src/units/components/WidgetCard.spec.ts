import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WidgetCard from '@/components/WidgetCard.vue'
import { createStore } from 'vuex'
import mutations from '@/store/modules/widget_products/mutations'
import BadgeColours from '@/components/BadgeColours.vue'
import InfoTooltip from '@/components/InfoTooltip.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseToggle from '@/components/BaseToggle.vue'
import { beige, blue, green } from '@/units/components/mockApi'

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
        widget: green
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
        widget: beige
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
    expect(textActionEl.text()).toBe('This product plants')
    expect(textAmountTypenEl.text()).toBe('10 trees')

    expect(baseCheckboxComp.props().value).toBe(true)
    expect(baseToggleComp.props().value).toBe(false)
    expect(badgeColoursComp.props().selectedColor).toBe('beige')
    expect(InfoTooltipComp.isVisible()).toBeTruthy()
  })

  it('sets color', () => {
    const wrapper = mount(WidgetCard, {
      props: {
        widget: blue
      },
      global: {
        plugins: [mockStore]
      }
    })
    // const card = wrapper.find('#card_2')
    // const cardHead = wrapper.find('.card-head')
    // const textActionEl = wrapper.find('.text-action')
    // const textAmountTypenEl = wrapper.find('.text-amount-type')

    // const badgeColoursComp = wrapper.findComponent(BadgeColours)
    // const InfoTooltipComp = wrapper.findComponent(InfoTooltip)
    // const baseCheckboxComp = wrapper.findComponent(BaseCheckbox)
    // const baseToggleComp = wrapper.findComponent(BaseToggle)

    // expect(card.classes()).toContain('text-green')
    // expect(cardHead.classes()).toContain('bg-beige')
    // expect(textActionEl.text()).toBe('This product plants')
    // expect(textAmountTypenEl.text()).toBe('0 carbon')

    // expect(baseCheckboxComp.props().value).toBe(true)
    // expect(baseToggleComp.props().value).toBe(false)
    // expect(badgeColoursComp.props().selectedColor).toBe('beige')
    // expect(InfoTooltipComp.isVisible()).toBeTruthy()
  })
})
