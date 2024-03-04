<template>
  <div class="flex">
    <label :for="id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <input
        :id="id"
        type="checkbox"
        :checked="value"
        class="relative block w-[18px] h-[18px] rounded-sm border border-grey-darker accent-green  hover:cursor-pointer
        after:content-[''] after:hidden after:hover:block after:absolute after:w-8 after:h-8 after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 
        after:bg-green-light after:opacity-60 after:z-10 after:rounded-full"
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
  emits: ['update'],
  setup(_, { emit }) {
    return {
      handleChange(event: Event): void {
        const checked = getValue(event)
        emit('update', checked)
      }
    }
  }
})
</script>