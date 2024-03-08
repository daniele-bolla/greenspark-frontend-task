<template>
  <div v-if="!widgetProducts.length">Loading...</div>
  <div
    v-else
    class="rounded-lg panel-shadow bg-white-dark max-w-[850px] w-full m-6 min-h-[45%] p-9"
  >
    <h1
      class="text-3xl text-center md:text-left text-dark_grey font-semibold border-b-2 border-grey pb-3 mb-5"
    >
      Per product widgets
    </h1>
    <div class="flex justify-between items-center flex-col md:flex-row">
      <widget-card v-for="widget in widgetProducts" :key="widget.id" :widget="widget"></widget-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import WidgetCard from './WidgetCard.vue'

export default defineComponent({
  components: {
    WidgetCard
  },
  setup() {
    const store = useStore()

    const widgetProducts = computed(() => store.getters['widget_products/getAll'])
    onMounted(async () => {
      await store.dispatch('widget_products/fetchAll')
    })
    return { widgetProducts }
  }
})
</script>
<style>
.panel-shadow {
  box-shadow:
    0px 42px 76px rgba(0, 0, 0, 0.05),
    0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963),
    0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704),
    0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
    0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296),
    0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);
}
</style>
