<template>
  <main v-if="currentCard" class="main">
    <div class="main__content">
      <h1 class="main__title">{{ currentCard.title }}</h1>
      <remove-btn
        @btn-click="showRemoveCardPopup"
        class="main__remove-icon"
        theme="remove"
      ></remove-btn>
      <todos :todos="currentCard.todos" :index="index" />
      <div class="main__footer">
        <router-link to="/"
          ><save-button theme="add" @btn-click="saveChanges"
            >Сохранить</save-button
          ></router-link
        >
        <cancel-button
          theme="add"
          class="main__button"
          @btn-click="showCancelPopup"
          >Отменить</cancel-button
        >
      </div>
    </div>
  </main>
  <NotFound v-else />
</template>
<script>
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import NotFound from "@/views/NotFound.vue";

export default {
  components: {
    "remove-btn": Button,
    todos: Checkbox,
    "save-button": Button,
    "cancel-button": Button,
    NotFound
  },
  computed: {
    index() {
      return this.$store.getters.getCardItems.indexOf(this.currentCard);
    },
    currentCard() {
      return this.$store.getters.getCardItems.find(
        item => item.id == this.$route.params.id
      );
    }
  },
  methods: {
    showRemoveCardPopup() {
      this.$store.dispatch("showRemoveCardPopup");
      this.$store.dispatch("setId", this.index);
    },
    showCancelPopup() {
      this.$store.dispatch("showCancelPopup");
    },
    removeCard() {
      this.$store.dispatch("removeCard", this.index);
    },
    saveChanges() {
      this.$store.dispatch("saveChanges", {
        card: this.currentCard,
        index: this.index
      });
    }
  }
};
</script>

<style scoped>
.main {
  max-width: 1440px;
}
.main__content {
  position: relative;
  max-width: 80%;
  width: 100%;
  margin: 50px auto 0 auto;
  padding: 25px;
  background-color: #7f89ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}
.main__title {
  font-size: 76px;
  margin: 0 auto;
}
.main__remove-icon {
  position: absolute;
  top: 25px;
  right: 25px;
}
.main__footer {
  margin-top: 25px;
  align-self: center;
}
.main__button {
  margin-left: 25px;
}
@media (max-width: 362px) {
  .main__footer {
    display: flex;
    flex-direction: column;
  }
  .main__button {
    margin: 20px 0 0 0;
  }
}
</style>
