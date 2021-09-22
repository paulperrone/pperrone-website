<template>
  <the-header></the-header>
  <home-page></home-page>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    HomePage,
  },
};
</script>

<style>
</style>
