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
    text-align: left;;
    padding-top: 20px;
    margin-top: 10px;
    padding-bottom: 20px;
    border-style: solid;
    border-color: gray;
    border-radius: 50px;
    background-color: rgb(144, 150, 155);
}

</style>

