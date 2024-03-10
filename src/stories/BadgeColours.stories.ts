import type { Meta, StoryObj } from '@storybook/vue3'

import BadgeColours from '@/components/BadgeColours.vue'

const meta = {
  title: 'BadgeColours',
  component: BadgeColours,
  tags: ['autodocs'],
  args: { selectedColor: 'green' }
} satisfies Meta<typeof BadgeColours>

export default meta
type Story = StoryObj<typeof meta>

export const Beige: Story = {
  args: {
    selectedColor: 'beige'
  }
}
