<template>
  <div id="wrap">
    <header id="header" class="products">
      <nav>
        <h1><NuxtLink to="/products">Products</NuxtLink></h1>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div id="content">
      <slot /> <!-- output the page content -->
    </div>
  </div>
</template>