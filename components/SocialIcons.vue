<template>
  <ul class="flex items-center gap-2 z-50">
    <li v-for="icon in socIcons" :key="icon.name">
      <a :href="icon.path" :target="icon.target" class="text-3xl p-1 flex justify-center items-center hover:text-brand-black hover:bg-brand-yellow rounded"><Icon :name="icon.name"></Icon><span class="sr-only">{{ icon.text }}</span></a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const socIcons = computed(() => [
  {
    name: 'ic:baseline-facebook',
    path: 'https://www.facebook.com/panicplast/',
    target: '_blank',
    text: 'Facebook stranica'
  },
  {
    name: 'ic:outline-email',
    path: 'mailto:panicplast@gmail.com',
    target: '_self',
    text: 'Email adresa'
  },
  {
    name: 'iconoir:phone',
    path: 'tel:+381654441560',
    target: '_self',
    text: 'Kontakt telefon'
  },
]);
</script>
