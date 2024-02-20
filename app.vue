<script setup>
import { onBeforeMount } from "vue";
useSeoMeta({
  title: "Nahuel Salazar - Fullstack Developer",
});

onBeforeMount(() => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <div>
    <app-navbar />
    <NuxtPage />
  </div>
</template>
