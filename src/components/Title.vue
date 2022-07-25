<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
});

  
</script>

<template>
  <div class="title">
    <h1>
        Board Game Companion
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: 10px;
}

h3 {
  font-size: 1.2rem;
}

.title
{
    text-align: center;
}


</style>
