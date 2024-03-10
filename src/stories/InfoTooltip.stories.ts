import type { Meta, StoryObj } from '@storybook/vue3'

import InfoTooltip from '../components/InfoTooltip.vue'

const meta = {
  title: 'InfoTooltip',
  component: InfoTooltip,
  //Buttons for selecting color and showing the selected one
  tags: ['autodocs']
  // args: { selectedColor: 'green' }
} satisfies Meta<typeof InfoTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Tooltip: Story = {}
