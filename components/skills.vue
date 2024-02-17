<script setup>
import iconDesktop from "~/components/icons/icon-desktop.vue";
import iconModule from "~/components/icons/icon-module.vue";
import iconMobile from "~/components/icons/icon-mobile.vue";
import iconUsers from "~/components/icons/icon-users.vue";
import iconCode from "~/components/icons/icon-code.vue";
import iconLab from "~/components/icons/icon-lab.vue";

const items = [
  {
    icon: iconModule,
    label: "Arquitectura y programación modular",
  },
  {
    icon: iconMobile,
    label: "Diseño responsivo y accesibilidad",
  },
  {
    icon: iconUsers,
    label: "Colaboración y trabajo en equipo",
  },
  {
    icon: iconCode,
    label: "Desarrollo frontend y backend",
  },
  {
    icon: iconDesktop,
    label: "Maquetación web",
  },
  {
    icon: iconLab,
    label: "Testing",
  },
];
</script>
<template>
  <app-section id="habilidades" title="Habilidades">
    <div class="text-gray-500">
      <ul class="font-medium bg-white">
        <li v-for="item in items" class="flex items-center gap-1 mb-2">
          <component :is="item.icon" class="w-6 h-6" /> {{ item.label }}
        </li>
      </ul>
    </div>
  </app-section>
</template>
