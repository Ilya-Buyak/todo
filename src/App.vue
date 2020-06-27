<template>
  <div class="root">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/blocks/Header";
export default {
  name: "App",
  components: {
    "app-header": Header
  }
};
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.root {
  max-width: 1440px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
