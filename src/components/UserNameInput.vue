<script setup>
import { ref } from 'vue'


</script>

<template>
   <input class="input-1" placeholder="User Name"/>
</template>

<style scoped>

input:focus 
{
  outline-color: rgb(136, 191, 236);
}
.input-1
{
  width: 20%;
  height: 40px;
  box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent;
  background-color: rgb(224, 232, 235);
  border:0;
  border-width: 10px;
  font-size:18px;
  text-align: center;
  
}

</style>
