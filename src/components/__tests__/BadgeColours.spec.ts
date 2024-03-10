import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import BadgeColours from '@/components/BadgeColours.vue'
import { badgeColours } from '@/models/WidgetProductsModel'

describe('BadgeColours', () => {
  it('renders properly', async () => {
    const wrapper = shallowMount(BadgeColours, {
      props: {
        selectedColor: 'green'
      }
    })
    expect(wrapper.isVisible()).toBeTruthy()
    const buttons = wrapper.findAll('button')
    const selected = wrapper.find('.selected')
    expect(buttons).toHaveLength(badgeColours.length)
    expect(selected.classes()).toContain('border-[1.5px]')
    expect(selected.classes()).toContain('bg-green')
  })

  it('emits correct value on checked', async () => {
    const wrapper = shallowMount(BadgeColours, {
      props: {
        selectedColor: 'beige'
      }
    })
    const btnGreen = wrapper.find('.bg-green')
    await btnGreen.trigger('click')
    expect(wrapper.emitted('update')).toHaveLength(1)
    expect(wrapper.emitted('update')).toEqual([['green']])
  })
})
