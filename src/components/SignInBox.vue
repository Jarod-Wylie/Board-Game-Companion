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
    <h1>Welcome Back</h1>

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

h1
{
  font-size: 40;
  text-align: left;
  padding-left: 400px;
  padding-bottom: 20px;
}

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
    display: inline-block;
    text-align: center;
    /* padding-top: 20px; */
    margin-top: 10px;
    width: 1000px;
    /* margin-left: 300px;
    margin-right: 300px; */
    padding-bottom: 20px;
    border-style: solid;
    border-color: white;
    box-shadow: 5px 5px 10px rgb(83, 83, 83);
  
}

</style>