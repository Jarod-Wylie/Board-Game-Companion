<script setup>
import CountButton from "../components/CountButton.vue";
import RowContainer from "@/components/RowContainer.vue";

</script>

<template>

    <h2>This page displays components I have made that counts something.</h2>

<RowContainer>
  <CountButton></CountButton>
</RowContainer>
<RowContainer>
  <CountButton></CountButton>
</RowContainer>
</template>

<style>
h2
{
  padding-top: 10px;
  text-align: center;
}
</style>
