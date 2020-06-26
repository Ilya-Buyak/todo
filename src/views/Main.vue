<template>
  <main class="main">
    <h1 class="main__title">Todo List</h1>
    <main-btn theme="main" @btn-click="togglePopupVisible">
      Добавить заметку
    </main-btn>
    <cards-list />
    <popup v-if="isPopupShown" />
    <overlay v-if="isPopupShown" @overlay-click="togglePopupVisible" />
  </main>
</template>

<script>
import Button from "@/components/ui/Button";
import CardsList from "@/components/blocks/CardsList";
import Popup from "@/components/blocks/Popup";
import Overlay from "@/components/ui/Overlay";
export default {
  components: {
    "main-btn": Button,
    "cards-list": CardsList,
    popup: Popup,
    overlay: Overlay
  },
  methods: {
    togglePopupVisible() {
      console.log("as");
      return this.$store.dispatch("togglePopupVisible");
    }
  },
  computed: {
    isPopupShown() {
      return this.$store.getters.isPopupShown;
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
