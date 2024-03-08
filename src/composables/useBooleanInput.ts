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
export function useBooleanInput(emit: Function) {

    function handleChange(event: Event): void {
        const checked = getInputBooleanValue(event)
        console.log(checked, checked)
        emit('update', checked)
    }
    return { props, handleChange }
}