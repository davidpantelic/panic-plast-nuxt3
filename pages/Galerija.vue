<template>
  <main id="main-content" class="products-page min-h-screen bg-brand-green text-brand-black pt-36">
    <section class="text-center">
      <h1>Galerija</h1>
    </section>
    <section class="flex flex-wrap items-center justify-center gap-2 p-2 mt-5">
      <img class="w-[350px] h-[350px] grow object-cover border border-brand-black" v-for="(image, index) in images" :key="index" :src="image" alt="" />
    </section>
  </main>
</template>

<script setup>
// Use import.meta.glob to import all images from the directory
const images = ref([]);
const imageModules = import.meta.glob('@/assets/images/products/jpg/*.jpg');

// Load all image URLs into the `images` array
for (const path in imageModules) {
  imageModules[path]().then((mod) => {
    images.value.push(mod.default);
  });
}
</script>