<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Event from './views/Event.vue'

</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/ShowData">ShowData</RouterLink>
      </nav> 
  <RouterView />
      <!-- <Event/> -->
      <!-- <Particles/> -->
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  /*margin-top: 2rem;*/
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
