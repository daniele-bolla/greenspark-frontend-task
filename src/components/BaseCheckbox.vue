<template>
  <div class="flex">
    <label :for="id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <input
        :id="id"
        type="checkbox"
        :checked="value"
        class="w-[18px] h-[18px] rounded-sm accent-green focus:ring-blue-500 focus:ring-2"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

function getValue(event: Event): boolean | undefined {
  const checked = (event.target as HTMLInputElement).checked
  return checked
}

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return {
      handleChange(event: Event): void {
        const checked = getValue(event)
        emit('update:modelValue', checked)
      }
    }
  }
})
</script>
