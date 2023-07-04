<template>
  <span class="thumb"><img :src="product.image" :alt="product.title"></span>
  <p>{{ product.title }}</p>
  <NuxtLink :to="`/products/${product.id}`" class="btn">View Details</NuxtLink>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>
