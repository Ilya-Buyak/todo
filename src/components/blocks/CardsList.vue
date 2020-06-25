<template>
  <ul v-if="hasCards" class="cards">
    <li class="card" v-for="card in cards" :key="card.id">
      <h2 class="card__title">{{ card.title }}</h2>
      <delete-btn theme="delete" />
      <p class="card__text">Составить план</p>
      <p class="card__text">Сделать структуру</p>
      <p class="card__text">Написать ui компоненты</p>
      <p class="card__text">Сделать главную страницу</p>
      <p class="card__text">Сделать страницу изменения карточки</p>
      <edit-btn theme="card">изменить</edit-btn>
    </li>
  </ul>
  <p v-else class="cards">Список пуст...</p>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  computed: {
    cards() {
      return this.$store.getters.cards;
    },
    hasCards() {
      return this.$store.getters.cardsLength;
    }
  },
  components: {
    "edit-btn": Button,
    "delete-btn": Button
  }
};
</script>

<style scoped>
.cards {
  padding: 50px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 30px;
  max-width: 1250px;
  width: 100%;
  list-style: none;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #7f89ff;
  border-radius: 10px;
  min-height: 250px;
}

.card__title {
  padding-left: 15px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
.card__text {
  margin: 10px 0 0 10px;
  color: #fff;
}
</style>
