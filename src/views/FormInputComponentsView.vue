<script setup>
import UserNameInput from "../components/UserNameInput.vue";
import RowContainer from "../components/RowContainer.vue";

</script>

<template>
  <h1>This page displays components related to form input.</h1>
  <RowContainer>
    <UserNameInput></UserNameInput>
  </RowContainer>
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
