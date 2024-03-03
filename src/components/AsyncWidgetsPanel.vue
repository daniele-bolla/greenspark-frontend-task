<template> 
    <suspense>
      <template #default>
        <Layout><Main /></Layout>
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </suspense>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  async setup() {
    const store = useStore();
    
    return {  };
  },
});
</script>