<template>
  <div class="layout">
    <header>
      <NuxtLink to="/">
        <h1>Nuxt<span>Blog</span></h1>
      </NuxtLink>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/news">News</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.router-link-exact-active {
    color: rgb(104, 209, 160);
}
</style>
