<script setup>
import iconCube from "~/components/icons/icon-cube.vue";
import iconHome from "~/components/icons/icon-home.vue";
import iconLab from "~/components/icons/icon-lab.vue";
import iconWorks from "~/components/icons/icon-works.vue";
import iconMoon from "~/components/icons/icon-moon.vue";
import iconSun from "~/components/icons/icon-sun.vue";
import iconDownload from "~/components/icons/icon-download.vue";

const darkTheme = ref(false);

const items = computed(() => [
  {
    icon: iconHome,
    label: "Yo",
    href: "#about",
    target: null,
  },
  {
    icon: iconWorks,
    label: "Experiencia",
    href: "#works",
    target: null,
  },

  {
    icon: iconLab,
    label: "Experimentos",
    href: "#lab",
    target: null,
  },
  {
    icon: iconCube,
    label: "Arte",
    href: "https://www.instagram.com/voxelcode",
    target: "_blank",
  },
  {
    icon: iconDownload,
    label: "Descargar CV",
    href: "/CV.pdf",
    target: "_blank",
  },
  {
    icon: darkTheme.value ? iconSun : iconMoon,
    label: darkTheme.value ? "Modo Claro" : "Modo Oscuro",
    href: null,
    target: null,
  },
]);

const handleClick = (label) => {
  if (label == "Modo Oscuro" || label == "Modo Claro") {
    darkTheme.value = !darkTheme.value;
  }
};
</script>
<template>
  <nav class="mt-3">
    <ul class="nav-items">
      <li
        v-for="item in items"
        class="nav-item"
        @click="handleClick(item.label)"
      >
        <a
          v-if="item.href"
          :href="item.href"
          :target="item.target ? item.target : ''"
        >
          <component :is="item.icon" class="w-6 h-6" />
        </a>

        <component v-else :is="item.icon" class="w-6 h-6" />

        <!-- <span class="tooltip">
          {{ item.label }}
        </span> -->
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-items {
  @apply flex items-center justify-center gap-4;
}
.nav-item {
  @apply flex flex-col justify-center items-center w-9 h-9 rounded-full text-white bg-neutral-900 relative cursor-pointer shadow-xl;
}
.tooltip {
  @apply absolute bottom-0 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded pointer-events-none opacity-0 hover:opacity-100 transition-all duration-300 ease-tooltip-transition  
         before:w-2 before:h-2 before:bg-neutral-900 before:absolute before:top-[-3px] before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:transition-all before:duration-300 before:ease-tooltip-transition;
}

.nav-item:hover .tooltip {
  @apply bottom-[-45px] opacity-100 visible pointer-events-auto;
}
</style>
