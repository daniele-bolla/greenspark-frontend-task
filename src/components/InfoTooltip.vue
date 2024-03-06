<template>
  <base-tooltip>
    <template #icon><IconInfo></IconInfo></template>
    <template #content>
      <div class="text-center text-sm px-6 py-4 gap-3 shadow rounded w-64 bg-white">
        <p class="mb-4 text-grey-darker">
          This widget links directly to your public profile so that you can easily share your impact
          with your customers. Turn it off here if you do not want the badge to link to it.
        </p>
        <a class="text-green font-semibold" href="#">View Public Profile</a>
      </div>
    </template>
  </base-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconInfo from '../assets/IconInfo.vue'

import BaseTooltip from './BaseTooltip.vue'

export default defineComponent({
  components: {
    IconInfo,
    BaseTooltip
  },
})
</script>
