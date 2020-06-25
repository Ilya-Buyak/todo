<template>
  <div class="popup">
    <img
      src="../../assets/close.svg"
      class="popup__close"
      alt="закрыть окно"
      @click="togglePopupVisible"
    />
  </div>
</template>

<script>
export default {
  methods: {
    togglePopupVisible() {
      this.$store.dispatch("togglePopupVisible");
    }
  },
  computed: {}
};
</script>

<style scoped>
.popup {
  max-width: 700px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  padding: 20px;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: #7f89ff;
  color: #fff;
}
.popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
