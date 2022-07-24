<script setup>
import UserNameInput from './UserNameInput.vue';
import PasswordInput from './PasswordInput.vue';
import LogInButton from './LogInButton.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});

  
</script>

<template>
  <div class="Sign-In-Box">
    <div class="row">
      <UserNameInput></UserNameInput>
    </div>
    <div id="password-row" class="row">
      <PasswordInput></PasswordInput>
    </div>

    <div id="button-row" class="row">
      <LogInButton></LogInButton>
    </div>
  </div>
</template>

<style scoped>

#password-row
{
  padding-top: 10px;
}

#button-row
{
  padding-top: 10px;
  padding-left: 300px;
}
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