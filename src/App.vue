<template>
  <panel-layout><WidgetsPanel /></panel-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WidgetsPanel from './components/WidgetsPanel.vue'
import PanelLayout from './layouts/PanelLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    PanelLayout,
    WidgetsPanel
  }
})
</script>
