import { getInputBooleanValue } from '@/utils/getInputBooleanValue'
export const props = {
  id: {
    type: String,
    required: true
  },
  value: {
    type: Boolean,
    required: true
  }
}
export function useBooleanInput(emit: (event: 'update', checked?: boolean) => void) {
  function handleChange(event: Event): void {
    const checked = getInputBooleanValue(event)
    emit('update', checked)
  }
  return { props, handleChange }
}
