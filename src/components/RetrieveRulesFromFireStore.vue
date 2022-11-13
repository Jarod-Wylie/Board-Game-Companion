<script setup>
import { ref } from "vue";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc } from "firebase/firestore"; 

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD9SUohpF_TVy_dqFX-no-2ZBOl8YKmB8Q",
  authDomain: "board-game-companio.firebaseapp.com",
  databaseURL: "https://board-game-companio-default-rtdb.firebaseio.com",
  projectId: "board-game-companio",
  storageBucket: "board-game-companio.appspot.com",
  messagingSenderId: "408109557278",
  appId: "1:408109557278:web:4e84d110280ddb72dd700f",
  measurementId: "G-5TT75JM4QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
console.log('db:', db)


const RetrievedRuleArray = ref([]);


try {
   var snapshot = await (getDocs(collection(db, "GovernanceRuleBank"))) 
   console.log(snapshot);
}

catch (e) {
console.log("Error getting cached document:", e);
}
snapshot.forEach((doc) => {
  RetrievedRuleArray.value.push(doc.data().RuleDescription)
  return (console.log(`${doc.id}  ${doc.data().RuleDescription}`));
});

const emit = defineEmits(['retrivedRules'])

emit('retrivedRules', RetrievedRuleArray)
</script>

<template>
    Retreive rules from Firestore...
</template>

<style scoped>

</style>
