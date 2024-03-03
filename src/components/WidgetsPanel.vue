<template> 

  <div class="rounded-lg shadow-2xl bg-grey">
    <h1 class="text-xl border-b border-2 border-grey text-blue">Per product widgets</h1>
    {{ widgetProducts }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
   async setup() {
    const store = useStore();

    const widgetProducts = computed(() => store.getters["widget_products/getAll"]);

    await store.dispatch("widget_products/fetchAll");
    return { widgetProducts };
  },
});
</script>