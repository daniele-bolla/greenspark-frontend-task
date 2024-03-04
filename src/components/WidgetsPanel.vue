<template>
  <div class="rounded-lg shadow-2xl bg-dark-white max-w-[850px] w-full p-9">
    <h1 class="text-2xl text-dark_grey font-semibold border-b-2 border-grey pb-3 mb-5">
      Per product widgets
    </h1>
    <div class="grid grid-cols-3 gap-4">
      <widget-card
        v-for="widget in widgetProducts"
        :id="widget.id"
        :key="widget.id"
        :widget="widget"
      ></widget-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import WidgetCard from './WidgetCard.vue'

export default defineComponent({
  components: {
    WidgetCard
  },
  async setup() {
    const store = useStore()

    const widgetProducts = computed(() => store.getters['widget_products/getAll'])

    await store.dispatch('widget_products/fetchAll')
    return { widgetProducts }
  }
})
</script>
