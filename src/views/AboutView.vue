<script setup>
import FirestoreTestButton from "../components/firestoreTestButton.vue";
import HelloWorld from "../components/HelloWorld.vue";
import LogInButton from "../components/LogInButton.vue";

</script>

<template>

  <h1>This is an about page</h1>
  <Suspense>
    <FirestoreTestButton></FirestoreTestButton>
  </Suspense>
  <!-- <LogInButton></LogInButton> -->
  <HelloWorld/>

<div id="content">

</div>

</template>

<style>

#content
{
  text-align: center;
}


h1
{
  text-align: center;
}
</style>
