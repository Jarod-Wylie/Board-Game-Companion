<script setup>
import CountButton from "../components/CountButton.vue";

</script>

<template>
  <div class="about">
    <h1>This page displays components I have made that counts something.</h1>
  <CountButton></CountButton>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
