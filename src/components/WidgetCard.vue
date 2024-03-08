<template>
  <div
    :id="`card_${id}`"
    :class="`text-${badgeColoursMap[widget.selectedColor]['text']}`"
    class="card pb-9 max-w-[220px]"
  >
    <div
      :id="`card_head_${id}`"
      :class="`bg-${badgeColoursMap[widget.selectedColor]['bg']}`"
      class="card-head rounded-lg flex items-center p-3 h-[66px]"
    >
      <icon-logo class="mr-2.5"></icon-logo>
      <div class="flex flex-col">
        <span class="text-action text-xs">This product {{ widget.action }}</span>
        <span class="text-amount-type text-[17px] font-bold truncate"
          >{{ widget.amount }} {{ widget.type }}</span
        >
      </div>
    </div>
    <div class="px-1">
      <ul class="text-green">
        <li class="mt-2.5 flex items-center justify-between">
          <div>Link to Public Profile <info-tooltip></info-tooltip></div>
          <base-checkbox
            :id="`input_linked_${id}`"
            :value="widget.linked"
            @update="setLinkedStatus"
          ></base-checkbox>
        </li>
        <li class="mt-2.5 flex items-center justify-between">
          <div>Badge colour</div>
          <badge-colours
            :selected-color="widget.selectedColor"
            @update="setColorStatus"
          ></badge-colours>
        </li>
        <li class="mt-2.5 flex items-center justify-between">
          <div>Activate badge</div>
          <base-toggle
            :id="`input_active_${id}`"
            :value="widget.active"
            @update="setActiveStatus"
          ></base-toggle>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { badgeColoursMap, type WidgetProductsModel } from '@/models/WidgetProductsModel'
import { type PropType, defineComponent } from 'vue'
import IconLogo from '../assets/IconLogo.vue'
import BadgeColours from './BadgeColours.vue'
import BaseCheckbox from './BaseCheckbox.vue'
import BaseToggle from './BaseToggle.vue'
import InfoTooltip from './InfoTooltip.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    IconLogo,
    BadgeColours,
    BaseCheckbox,
    BaseToggle,
    InfoTooltip
  },
  props: {
    widget: { type: Object as PropType<WidgetProductsModel>, required: true }
  },
  setup(props) {
    const store = useStore()
    const {
      widget: { id }
    } = props
    return {
      id,
      badgeColoursMap,
      setActiveStatus(value: boolean) {
        store.commit('widget_products/setActive', { id, value })
      },
      setLinkedStatus(value: boolean) {
        store.commit('widget_products/setLinked', { id, value })
      },
      setColorStatus(value: WidgetProductsModel['selectedColor']) {
        store.commit('widget_products/setColor', { id, value })
      }
    }
  }
})
</script>
