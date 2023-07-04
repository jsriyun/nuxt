<template>
  <div id="wrap">
    <header id="header">
      <nav>
        <h1><NuxtLink to="/">Nuxt Test</NuxtLink></h1>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <!-- <li><a href="/about">normal link - about</a></li>
          <li><NuxtLink to="/products/abc">Products error</NuxtLink></li> -->
        </ul>
      </nav>
    </header>

    <div id="content">
      <slot /> <!-- output the page content -->
    </div>
  </div>
</template>
