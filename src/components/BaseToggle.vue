<template>
  <label :for="id" :aria-label="labelDescription" class="inline-flex items-center cursor-pointer">
    <input :id="id" type="checkbox" :checked="value" class="sr-only peer" @input="handleChange" />
    <div
      class="relative w-10 h-5 border border-green-light rounded-full toggle-shadow peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-green peer-checked:bg-green peer-checked:border-grey after:content-[''] after:hover:ring-4 after:hover:ring-green-light after:absolute after:-top-[1px] after:bg-white after:border after:border-grey after:-start-[1px] after:rounded-full after:h-5 after:w-5 after:transition-all"
    ></div>
  </label>
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
<style>
.toggle-shadow {
  box-shadow: inset 0px 1.02541px 6.83608px rgba(0, 0, 0, 0.15);
}
</style>
