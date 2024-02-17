<script setup>
defineProps(["title"]);
</script>

<template>
  <section class="px-4 lg:p-0 lg:w-2/4 mx-auto my-6">
    <h1 class="text-2xl font-bold mb-6" v-if="title">{{ title }}</h1>
    <slot />
  </section>
</template>
