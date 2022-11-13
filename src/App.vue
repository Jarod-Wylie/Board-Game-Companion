<script setup >

import { RouterLink, RouterView } from "vue-router";
import Title from "@/components/Title.vue";
import { Suspense } from "vue";
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

// const docRef = doc(db, "users", 'ZQad1kxov80lGDx8lYPy');
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

  
  //   const querySnapshot = await (getDocs(collection(db, "users")));
  //   console.log(querySnapshot)
  // querySnapshot.forEach((doc) => {
  //   return (console.log(`${doc.id}  ${doc.data().UserName}`));
  //   return (doc.data().UserName);
  // });


</script>

<template>
  <header>
    <Title></Title>
<Suspense>

</Suspense>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/helloworld">Hello World</RouterLink>
        <RouterLink to="/countingcomponents">Counting Components</RouterLink>
        <RouterLink to="/forminputcomponents">Form Input Components</RouterLink>
        <RouterLink to="/generatecard">Generate Card</RouterLink>
      </nav>
  </header>

<button @click="blah++">adsf</button>
<button @click="getCities(dbBlah)">test {{blah}}</button>


<body>
    <RouterView />
</body>

</template>

<style>
@import "@/assets/base.css";

.logo {
  display: block;
  margin: 0 auto 2rem;
  top: 10px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
