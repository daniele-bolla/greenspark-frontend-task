<template>
  <panel-layout><Main/></panel-layout>
</template>

<script lang="ts">
import {  defineComponent } from "vue";
import Main from "./components/Main.vue";
import PanelLayout from "./layouts/PanelLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    PanelLayout,
    Main,
  },

  // async setup() {

  // },
});
</script>./layouts/PanelLayout.vue