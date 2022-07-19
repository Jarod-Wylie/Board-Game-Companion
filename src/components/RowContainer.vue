<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
});

  
</script>

<template>
  <div class="row">
      <slot> </slot>
  </div>
</template>

<style scoped>

.row
{
    text-align: center;
    /* padding-left: 200px; */
}

</style>

