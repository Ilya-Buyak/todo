<template>
  <div class="container">
    <div class="popup">
      <todo-form v-if="isFormShown" />
      <removeCard v-if="isRemoveAlertShown" />
      <cancel v-if="isCancelAllertShown" />
      <img
        src="../../assets/close.svg"
        class="popup__close"
        alt="закрыть окно"
        @click="closePopup"
      />
    </div>
  </div>
</template>

<script>
import Form from "@/components/ui/Form";
import RemoveAllert from "@/components/ui/RemoveAllert";
import CancelAllert from "@/components/ui/CancelAllert";
export default {
  components: {
    "todo-form": Form,
    removeCard: RemoveAllert,
    cancel: CancelAllert
  },
  methods: {
    closePopup() {
      this.$store.dispatch("closePopup");
    }
  },
  computed: {
    isFormShown() {
      return this.$store.getters.isFormShown;
    },
    isRemoveAlertShown() {
      return this.$store.getters.isRemoveAlertShown;
    },
    isCancelAllertShown() {
      return this.$store.getters.isCancelAllertShown;
    }
  }
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
