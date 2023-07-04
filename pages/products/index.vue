<template>
  <Head>
    <Title>Nuxt3 Test | Products</Title>
    <Meta name="description" content="Nuxt3 Test Products Page" />
  </Head>
  <div>
    <ul class="list">
      <li v-for="product in products" :key="product.id">
        <!-- <span class="thumb"><img :src="product.image" :alt="product.title"></span>
        <p>{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`" class="btn">View Details</NuxtLink> -->
        <productList :product="product" />
      </li>
    </ul>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  console.log(products)
</script>
