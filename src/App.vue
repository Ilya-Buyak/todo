<template>
  <div class="root">
    <app-header />
    <router-view />
    <popup v-if="isPopupShown" />
    <overlay v-if="isPopupShown" @overlay-click="closePopup" />
  </div>
</template>

<script>
import Header from "@/components/blocks/Header";
import Popup from "@/components/blocks/Popup";
import Overlay from "@/components/ui/Overlay";
export default {
  name: "App",
  components: {
    "app-header": Header,
    popup: Popup,
    overlay: Overlay
  },
  computed: {
    isPopupShown() {
      return this.$store.getters.isPopupShown;
    }
  },
  methods: {
    closePopup() {
      this.$store.dispatch("closePopup");
    }
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
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: black;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

.root {
  max-width: 1440px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
