<template>
  <ul v-if="cards.length" class="cards">
    <li class="card" v-for="(card, id) in cards" :key="card.id">
      <div class="card__header">
        <h2 class="card__title">{{ card.title }}</h2>
        <delete-btn theme="remove" @btn-click="showRemoveCardPopup(id)" />
      </div>
      <p
        :class="['card__text', { card__text_completed: todo.completed }]"
        v-for="todo in card.todos.slice(0, 3)"
        :key="todo.id"
      >
        {{ todo.text }}
      </p>
      <router-link :to="`/${card.id}`" class="card__router"
        ><edit-btn theme="card" @btn-click="createCard(id)"
          >изменить</edit-btn
        ></router-link
      >
    </li>
  </ul>
  <p v-else class="cards">Список пуст...</p>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  computed: {
    cards() {
      return this.$store.getters.getCards;
    }
  },
  methods: {
    showRemoveCardPopup(id) {
      this.$store.dispatch("showRemoveCardPopup");
      this.$store.dispatch("setId", id);
    },
    createCard(id) {
      this.$store.dispatch("createCard", id);
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
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #7f89ff;
  border-radius: 10px;
  min-height: 250px;
}
.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
.card__title {
  background-color: #fff;
}
.card__text {
  font-size: 20px;
  margin: 10px 0 0 10px;
  color: #fff;
}
.card__text_completed {
  text-decoration: line-through;
}
.card__router {
  margin: auto 0 0 0;
}
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 650px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    max-width: 400px;
  }
}
</style>
