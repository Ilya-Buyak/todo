<template>
  <div class="root">
    <app-header />
    <h1 class="root__title">Todo List</h1>
    <root-btn theme="root" @btn-click="togglePopupVisible">
      Добавить заметку
    </root-btn>
    <main class="main">
      <cards-list />
    </main>
    <popup v-if="isPopupShown" />
    <overlay v-if="isPopupShown" @overlay-click="togglePopupVisible" />
  </div>
</template>

<script>
import Header from "@/components/blocks/Header";
import Button from "@/components/ui/Button";
import CardsList from "@/components/blocks/CardsList";
import Popup from "@/components/blocks/Popup";
import Overlay from "@/components/ui/Overlay";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "root-btn": Button,
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
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
}

.root {
  max-width: 1440px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.root__title {
  margin: 25px auto;
  text-align: center;
  font-size: 44px;
}
</style>
