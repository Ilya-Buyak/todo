<template>
  <main class="main">
    <h1 class="main__title">Упс... Страница не найдена</h1>
    <router-link to="/" class="router"
      ><home-button theme="home">Вернуться на главную</home-button></router-link
    >
  </main>
</template>

<script>
import Button from "@/components/ui/Button";
export default {
  components: {
    "home-button": Button
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.router {
  margin-top: 50px;
}
</style>
