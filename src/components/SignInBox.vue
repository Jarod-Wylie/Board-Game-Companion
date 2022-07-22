<script setup>
import UserNameInput from './UserNameInput.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

  
</script>

<template>
  <div class="Sign-In-Box">
    <UserNameInput></UserNameInput>
  </div>
</template>

<style scoped>

.Sign-In-Box
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