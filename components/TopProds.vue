<template>
  <section>
    <h2 class="text-center mb-5 text-brand-black">Top 3 proizvoda</h2>
    <div class="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center max-w-[1600px] w-11/12 mx-auto">
      <NuxtLink to="/proizvodi" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-brand-black order-2 lg:order-1 w-full sm:w-[45%] lg:w-[30%] text-center rounded-lg">
        <NuxtImg class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="/images/products/jpg/phr_plasticni_horizontalni_rezervoar_3.jpg" alt="" />
        <h3 class="px-3">Plasticni horizontalni rezervoari</h3>
      </NuxtLink>
      <NuxtLink to="/proizvodi" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-brand-black order-1 lg:order-2 w-full lg:w-[40%] text-center rounded-lg">
        <NuxtImg class="w-full object-cover rounded-t-lg mb-3 h-[300px]" src="/images/products/jpg/pvr_plasticni_vertikalni_rezervoari_3.jpg" alt="" />
        <h3 class="px-3">Plasticni vertikalni rezervoari</h3>
      </NuxtLink>
      <NuxtLink to="/proizvodi" class="bg-white hover:scale-[1.03] pb-3 self-stretch lg:self-auto flex-grow transition-all text-brand-black order-3 lg:order-3 w-full sm:w-[45%] lg:w-[30%] text-center rounded-lg">
        <NuxtImg class="w-full object-cover rounded-t-lg mb-3 h-[200px]" src="/images/products/jpg/psj_plasticna_septicka_jama_1.jpg" alt="" />
        <h3 class="px-3">Plasticne septicke jame</h3>
      </NuxtLink>
    </div>
    <NuxtLink to="/proizvodi" class="btn-2 block w-fit mx-auto !mb-10" active-class="" exact-active-class="">Svi proizvodi</NuxtLink>
  </section>
</template>

<script setup>

</script>
