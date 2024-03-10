import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import BaseToggle from '@/components/BaseToggle.vue'

describe('BaseToggle', () => {
  it('renders properly', async () => {
    const wrapper = shallowMount(BaseToggle, {
      props: {
        id: 'someid',
        value: true
      }
    })
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('emits correct value on checked', async () => {
    const wrapper = shallowMount(BaseToggle, {
      props: {
        id: 'someid',
        value: false
      }
    })
    const check = wrapper.find('input')
    check.setValue()
    await wrapper.trigger('click')
    expect(wrapper.emitted('update')).toHaveLength(1)
    expect(wrapper.emitted('update')).toEqual([[true]])
  })
})
