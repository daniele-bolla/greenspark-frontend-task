import type { Meta, StoryObj } from '@storybook/vue3'

import BaseCheckbox from '@/components/BaseCheckbox.vue'

const meta = {
  title: 'BaseCheckbox',
  component: BaseCheckbox,
  tags: ['autodocs'],
  args: { value: false, labelDescription: 'Test' }
} satisfies Meta<typeof BaseCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Selected: Story = {
  args: {
    value: true
  }
}

export const NotSelected: Story = {
  args: {
    value: false
  }
}
