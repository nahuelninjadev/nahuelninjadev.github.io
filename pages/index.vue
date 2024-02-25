<script setup>
const show = ref(true);
onMounted(() => {
  show.value = false;
});
</script>
<template>
  <main class="container mx-auto my-5">
    <div
      v-if="show"
      class="banner min-h-96 w-2/3 lg:w-2/4 aspect-video mx-auto rounded overflow-hidden flex items-center justify-center"
    ></div>
    <app-banner v-else />
    <about />
    <works />
    <lab />
    <skills />
    <contact />
    <btn-print />
  </main>
</template>
