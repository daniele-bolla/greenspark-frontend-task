<template>
  <div class="relative inline-flex cursor-pointer flex-col items-center group">
    <slot name="icon"></slot>
    <div
      class="absolute z-50 bottom-0 flex invisible flex-col items-center mb-2 opacity-0 group-hover:visible group-hover:opacity-100 p-2 transition-opacity ease-in delay-100 duration-200"
    >
      <span class="relative z-10"><slot name="content"></slot></span>
      <div class="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
    </div>
  </div>
</template>
