<template>
  <main id="main-content" class="products-page min-h-screen bg-brand-green text-brand-black pt-36">
    <section class="text-center">
      <h1>Proizvodi</h1>
    </section>

    <section class="products-wrapper p-20 flex flex-wrap items-center justify-center gap-5">
      <article v-for="(product, index) in productsJson" :key="index" class="bg-brand-yellow text-brand-black rounded w-1/4 self-stretch flex-grow overflow-hidden hover:scale-[1.03] transition-all">
        <NuxtLink :to="'/proizvodi/' + product.url" class="flex h-72">
          <NuxtImg :src="'/images/products/jpg/' + product.main_image" :alt="product.name_sr" class="w-1/3 object-cover rounded-tl rounded-bl" />
          <div class="p-5 w-2/3 flex flex-col justify-center">
            <h2 class="text-left">{{ product.name_sr }}</h2>
            <p>{{ product.short_desc_sr }}</p>
          </div>
        </NuxtLink>
      </article>
    </section>
  </main>
</template>

<script setup>
import productsJson from '~/assets/products_db.json';

useHead({
  title: 'Proizvodi - Panić Plast',
  meta: [
    { property: 'og:title', content: 'Proizvodi - Panić Plast' },
    { name: 'twitter:title', content: 'Proizvodi - Panić Plast' },
    { name: 'description', content: 'Sirok spektar plasticnih proizvoda za domove, farme, proizvodnje, postrojenja, mala i velika. Ekoloski ispravni proizvodi, dugotrajni i povoljni.' },
    { property: 'og:description', content: 'Sirok spektar plasticnih proizvoda za domove, farme, proizvodnje, postrojenja, mala i velika. Ekoloski ispravni proizvodi, dugotrajni i povoljni.' },
    { name: 'twitter:description', content: 'Sirok spektar plasticnih proizvoda za domove, farme, proizvodnje, postrojenja, mala i velika. Ekoloski ispravni proizvodi, dugotrajni i povoljni.' },
    { property: 'og:url', content: 'https://panic-plast.rs/proizvodi' },
  ],
  link: [
    { rel: 'canonical', href: 'https://panic-plast.rs/proizvodi' },
  ],
});
</script>