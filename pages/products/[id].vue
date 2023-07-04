<template>
  <Head>
    <Title>Nuxt3 Test | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <div class="detail">
    <!-- <div class="thumb">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="info">
      <h2>{{ product.title }}</h2>
      <p>${{ product.price }}</p>
      <p>{{ product.description }}</p>
      <NuxtLink to="/products" class="btn">List</NuxtLink>
    </div> -->
    <productDetails :product="product" />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  const { id } = useRoute().params

  const { data: product } = await useFetch('https://fakestoreapi.com/products/' + id, { key: id })
  console.log(product);

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: '제품이 없습니다.', fatal: true })
  }
</script>
