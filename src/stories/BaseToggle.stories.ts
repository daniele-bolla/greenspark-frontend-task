import type { Meta, StoryObj } from '@storybook/vue3'

import BaseToggle from '@/components/BaseToggle.vue'

const meta = {
  title: 'BaseToggle',
  component: BaseToggle,
  tags: ['autodocs'],
  args: { value: false }
} satisfies Meta<typeof BaseToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Selected: Story = {
  args: {
    value: true
  }
}

export const NotSelected: Story = {
  args: {
    value: true
  }
}
