<template>
  <div class="container">
    <div class="popup">
      <note-form />
      <img
        src="../../assets/close.svg"
        class="popup__close"
        alt="закрыть окно"
        @click="togglePopupVisible"
      />
    </div>
  </div>
</template>

<script>
import Form from "@/components/ui/Form";
export default {
  components: {
    "note-form": Form
  },
  methods: {
    togglePopupVisible() {
      this.$store.dispatch("togglePopupVisible");
    }
  },
  computed: {}
};
</script>

<style scoped>
.container {
  max-width: 700px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  z-index: 2;
}
.popup {
  width: 100%;
  padding: 20px;
  background-color: #7f89ff;
  color: #fff;
}
.popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.popup__close:hover {
  transition: 0.3s;
  opacity: 0.7;
}
</style>
