<template>
  <div class="flex">
    <div
      v-for="colour in badgeColours"
      :key="colour"
      :class="{
        'border-2 border-grey': selectedColor == colour,
        'bg-blue': colour == 'blue',
        'bg-green': colour == 'green',
        'bg-beige': colour == 'beige',
        'bg-white-dark': colour == 'white',
        'bg-grey-darker': colour == 'black'
      }"
      class="box-border w-4 h-4 mr-1.5 last:mr-0 hover:cursor-pointer hover:opacity-80"
    ></div>
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
  setup() {
    return { badgeColours }
  }
})
</script>
