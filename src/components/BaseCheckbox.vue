<template>
  <div class="flex">
    <label
      :for="id"
      :aria-label="labelDescription"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      <input
        :id="id"
        type="checkbox"
        :checked="value"
        class="relative block w-[18px] h-[18px] rounded-sm border border-grey-darker accent-green hover:cursor-pointer after:content-[''] after:hidden after:hover:block after:absolute after:w-8 after:h-8 after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:bg-green-light after:opacity-60 after:z-10 after:rounded-full"
        @input="handleChange"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBooleanInput, props } from '@/composables/useBooleanInput'

export default defineComponent({
  props,
  emits: ['update'],

  setup(_, { emit }) {
    const { handleChange } = useBooleanInput(emit)
    return {
      handleChange
    }
  }
})
</script>
