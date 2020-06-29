<template>
  <main class="main">
    <h1 class="main__title">Todo List</h1>
    <main-btn theme="main" @btn-click="showForm">
      Добавить заметку
    </main-btn>
    <cards-list />
  </main>
</template>

<script>
import Button from "@/components/ui/Button";
import CardsList from "@/components/blocks/CardsList";

export default {
  components: {
    "main-btn": Button,
    "cards-list": CardsList
  },
  methods: {
    showForm() {
      this.$store.dispatch("showForm");
    }
  }
};
</script>

<style>
.main__title {
  margin: 25px auto;
  text-align: center;
  font-size: 44px;
}
</style>
