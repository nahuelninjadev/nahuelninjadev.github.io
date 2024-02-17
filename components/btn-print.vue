<script setup>
import iconPrint from "~/components/icons/icon-print.vue";
</script>
<template>
  <a
    href="/CV.pdf"
    download="CV.pdf"
    class="btn-print fixed bottom-3 right-3 flex flex-col justify-center items-center w-9 h-9 rounded-full text-white bg-neutral-900"
  >
    <icon-print class="w-6 h-6" />
  </a>
</template>
