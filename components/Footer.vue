<template>
  <footer>
    <div class="bg-brand-black text-brand-yellow w-full flex flex-wrap gap-5 justify-center items-center p-5 text-center">
      <UTooltip text="Ovaj veb-sajt je pristupačan svima." class="w-20 order-2">
        <NuxtImg src="/accessibility_icon_yellow.png" alt="Pristupačnost bedž" />
      </UTooltip>
      <div class="w-full md:w-auto md:order-2 order-1">
        <p>Copyright &copy; {{ getCurrentYear }} Panić Plast. Sva prava zadržana.</p>
        <p>Izrada veb-sajtova - <a href="mailto:dpdavid156@gmail.com" class="hover:underline">Webdak</a></p>
      </div>
      <UTooltip text="Webdak Izrada veb-sajtova" class="w-20 rounded-full hover:rotate-6 transition-all order-3">
        <NuxtImg src="/webdak_logo_small.png" alt="Webdak Moderna Web Rešenja" />
      </UTooltip>
    </div>
  </footer>
</template>

<script setup>
const getCurrentYear = computed(() => {
  return new Date().getFullYear();
})
</script>
