import { defineAsyncComponent } from "vue";

export const AsyncMain = defineAsyncComponent({
  loader: () => import("./Main.vue"),
});