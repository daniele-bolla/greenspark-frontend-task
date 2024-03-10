import type { Meta, StoryObj } from '@storybook/vue3'

import InfoTooltip from '@/components/InfoTooltip.vue'

const meta = {
  title: 'InfoTooltip',
  component: InfoTooltip,
  tags: ['autodocs']
} satisfies Meta<typeof InfoTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Tooltip: Story = {}
