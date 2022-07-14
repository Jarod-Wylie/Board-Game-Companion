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
        My VUE Sandbox
    </h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

.title
{
    text-align: center;
}

.title h1,
.title h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .helloWorld h1,
  .title h3 {
    text-align: center;
  }
}
</style>
