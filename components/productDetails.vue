<template>
  <div class="thumb">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="info">
      <h2>{{ product.title }}</h2>
      <p>${{ product.price }}</p>
      <p>{{ product.description }}</p>
      <NuxtLink to="/products" class="btn">List</NuxtLink>
    </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>
