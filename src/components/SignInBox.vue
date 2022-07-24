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

    <div class="row">
      <PasswordInput></PasswordInput>
    </div>

    <div id="forgot-password-row" class="row">
      <a>
          Forgot your password?  
      </a>  
    </div>

    <div id="button-row" class="row">
      <LogInButton></LogInButton>
    </div>
  </div>
</template>

<style scoped>
  .Sign-In-Box
  {
      display: inline-block;
      text-align: center;
      /* padding-top: 20px; */
      margin-top: 10px;
      width: 700px;
      /* margin-left: 300px;
      margin-right: 300px; */
      padding-bottom: 20px;
      border-style: solid;
      border-color: white;
      box-shadow: 5px 5px 10px rgb(83, 83, 83);
    
  }

h1
{
  font-size: 40;
  font-weight: bold;
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

</style>