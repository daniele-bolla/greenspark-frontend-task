<template>
  <div class="flex flex-col h-full">
    <main class="flex-1 container mx-auto flex items-center justify-center">
      <Suspense>
        <slot></slot>
        <template #fallback> Loading... </template>
      </Suspense>
    </main>
  </div>
</template>
