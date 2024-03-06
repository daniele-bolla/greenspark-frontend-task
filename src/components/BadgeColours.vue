<template>
  <div class="flex">
    <button
      v-for="colour in badgeColours"
      :key="colour"
      :class="{
        ' border-[1.5px] border-grey selected': selectedColor == colour,
        'bg-blue': colour == 'blue',
        'bg-green': colour == 'green',
        'bg-beige': colour == 'beige',
        'bg-white-dark': colour == 'white',
        'bg-grey-darker': colour == 'black'
      }"
      class="box-border w-4 h-4 mr-1.5 last:mr-0 hover:cursor-pointer hover:opacity-80"
      @click="handleClick(colour)"
    ></button>
  </div>
</template>

<script lang="ts">
import type { WidgetProductsModel } from '@/models/WidgetProductsModel'
import { type PropType, defineComponent } from 'vue'
import { badgeColours } from '@/models/WidgetProductsModel'
export default defineComponent({
  props: {
    selectedColor: {
      type: String as PropType<WidgetProductsModel['selectedColor']>,
      required: true
    }
  },
  emits: ['update'],
  setup(_, { emit }) {
    return {
      badgeColours,
      handleClick(colour: WidgetProductsModel['selectedColor']): void {
        emit('update', colour)
      }
    }
  }
})
</script>
