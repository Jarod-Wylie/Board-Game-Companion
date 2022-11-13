<script setup>
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


  function testBlah() {
    console.log('BLAH');
    snapshot.forEach((doc) => {
 (console.log(`${doc.id}  ${doc.data().UserName}`))});
}

try {
   var snapshot = await (getDocs(collection(db, "users"))) 
   console.log(snapshot);
}

catch (e) {
console.log("Error getting cached document:", e);
}
snapshot.forEach((doc) => {
return (console.log(`${doc.id}  ${doc.data().UserName}`));
});
</script>

<template>
    <button @click="testBlah" id="login-button">TEST</button>
</template>

<style scoped>

#login-button
{
    background-color: rgb(27,169,76);
    color: white;
    border-radius: 1000px;
    border: 0ch;
    font-size: 20px;
    box-shadow: 1px 1px 5px black;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 40px;
    padding-right: 40px;
}
#login-button:active
{
    background-color: rgb(50, 121, 75);
    color: white;
    border-radius: 1000px;
    border: 0ch;
    font-size: 20px;
    box-shadow: 1px 1px 5px black;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 40px;
    padding-right: 40px;
}

</style>
