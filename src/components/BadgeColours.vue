<template>
<div class="flex ">
  <div :class="{
    'border-2 border-grey':selectedColor==colour,
    'bg-blue': colour == 'blue',
    'bg-green': colour == 'green',
    'bg-beige': colour == 'beige',
    'bg-white-dark': colour == 'white',
    'bg-grey-darker': colour == 'black',
    }"   
  class="box-border w-4 h-4  mr-1 last:mr-0" :key="colour" v-for="colour in badgeColours">
  </div>
</div> 

</template>

<script lang="ts">
import type { WidgetProductsModel } from "@/models/WidgetProductsModel";
import { type PropType, defineComponent } from "vue";
import {badgeColours}  from "@/models/WidgetProductsModel"
export default defineComponent({
  props: {
    selectedColor: { type: Object as PropType<WidgetProductsModel['selectedColor']>, required: true },
  },
  setup(){
    return{badgeColours}
  }
});
</script>