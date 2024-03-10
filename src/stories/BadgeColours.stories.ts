import type { Meta, StoryObj } from '@storybook/vue3'

import BadgeColours from '../components/BadgeColours.vue'

const meta = {
  title: 'BadgeColours',
  component: BadgeColours,
  //Buttons for selecting color and showing the selected one
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
