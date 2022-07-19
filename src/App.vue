<script setup>

import { RouterLink, RouterView } from "vue-router";
import Title from "@/components/Title.vue";


</script>

<template>
  <header>
    <Title></Title>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/helloworld">Hello World</RouterLink>
        <RouterLink to="/countingcomponents">Counting Components</RouterLink>
        <RouterLink to="/forminputcomponents">Form Input Components</RouterLink>
      </nav>
  </header>



<body>
    <RouterView />
</body>

</template>

<style>
@import "@/assets/base.css";

.logo {
  display: block;
  margin: 0 auto 2rem;
  top: 10px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
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
