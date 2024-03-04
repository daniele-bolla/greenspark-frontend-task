<template>
  <label :for="id" class="inline-flex items-center cursor-pointer">
    <input :id="id" type="checkbox" :checked="value" class="sr-only peer" />
    <div
      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
    ></div>
  </label>
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
