import type { Meta, StoryObj } from '@storybook/vue3'

import WidgetCard from '@/components/WidgetCard.vue'
import { beige, blue, green } from '@/units/components/mockApi'

const meta = {
  title: 'WidgetCard',
  component: WidgetCard,
  tags: ['autodocs']
} satisfies Meta<typeof WidgetCard>

export default meta
type Story = StoryObj<typeof meta>

export const Green: Story = {
  args: {
    widget: green
  }
}
export const Beige: Story = {
  args: {
    widget: beige
  }
}
export const Blue: Story = {
  args: {
    widget: blue
  }
}
