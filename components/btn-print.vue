<script setup>
import iconPrint from "~/components/icons/icon-print.vue";
</script>
<template>
  <a
    href="/CV.pdf"
    download="CV.pdf"
    class="btn-print fixed bottom-3 right-3 flex flex-col justify-center items-center w-9 h-9 rounded-full text-white bg-neutral-900 dark:bg-purple-400"
  >
    <icon-print class="w-6 h-6" />
  </a>
</template>

<style scoped>
html.dark .btn-print {
  box-shadow: 0 0 10px rgb(168 85 247), 0 0 15px rgb(168 85 247),
    0 0 15px rgb(168 85 247);
}
</style>
