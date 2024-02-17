<script setup>
import IconWorks from "./icons/icon-works.vue";
import IconMail from "./icons/icon-mail.vue";
const items = [
  {
    icon: IconMail,
    label: "nahuelsalazar53@gmail.com",
    href: "mailto:nahuelsalazar53@gmail.com",
  },
  {
    icon: IconWorks,
    label: "Perfil Linkedin",
    href: "https://www.linkedin.com/in/nahuel-salazar-4201501a6/",
  },
];
</script>

<template>
  <app-section id="contact" title="Contacto">
    <div class="text-gray-500">
      <ul class="font-medium bg-white">
        <li v-for="item in items" class="flex items-center gap-1 mb-2">
          <template v-if="!item.href">
            <component :is="item.icon" class="w-6 h-6" />
            {{ item.label }}
          </template>
          <template v-else>
            <a
              :href="item.href"
              target="_blank"
              class="flex items-center gap-1 mb-2"
            >
              <component :is="item.icon" class="w-6 h-6" /> {{ item.label }}
            </a>
          </template>
        </li>
      </ul>
    </div>
  </app-section>
</template>
