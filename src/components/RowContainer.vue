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
    padding-top: 20px;
    margin-top: 10px;
    padding-bottom: 20px;
    border-style: solid;
    border-color: gray;
    border-radius: 1000px;
}

</style>

