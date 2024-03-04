<template> 
  <div :class="{ 
        'text-white-dark': ['green','blue','black'].includes(widget.selectedColor),
        'text-green': ['beige','white'].includes(widget.selectedColor),
      }" >
    <div :class="{ 
        'bg-blue': widget.selectedColor == 'blue',
        'bg-green': widget.selectedColor == 'green',
        'bg-beige': widget.selectedColor == 'beige',
        'bg-white-dark': widget.selectedColor == 'white',
        'bg-grey-darker': widget.selectedColor == 'black',
      }" class="rounded-lg flex items-center p-2.5">
      <icon-logo class="mr-2.5"></icon-logo>
      <div>
        <p class="text-sm">This product {{ widget.action }}</p>
        <h2 class="text-xl font-medium  mt-1">{{ widget.amount }} {{ widget.type }}</h2>
      </div>


    </div>  
    <div class="px-1">
        <ul class="text-green">
          <li class="mt-2.5 flex items-center justify-between"><span>Link to Public Profile <icon-info></icon-info></span></li>
          <li class="mt-2.5 flex items-center justify-between"><span>Badge colour</span> <badge-colours :selectedColor="widget.selectedColor"></badge-colours></li>
          <li class="mt-2.5 flex items-center justify-between">Activate badge</li>
        </ul>
      </div>
  </div>
</template>

<script lang="ts">
import type { WidgetProductsModel } from "@/models/WidgetProductsModel";
import { type PropType, defineComponent } from "vue";
import IconLogo from "../assets/IconLogo.vue";
import IconInfo from "../assets/IconInfo.vue";
import BadgeColours from "./BadgeColours.vue";

export default defineComponent({

  props: {
    widget: { type: Object as PropType<WidgetProductsModel>, required: true },
  },
  components: {
    IconLogo,
    IconInfo,
    BadgeColours
  },
});
</script>