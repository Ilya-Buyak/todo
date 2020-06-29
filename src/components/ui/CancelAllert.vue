<template>
  <div class="allert">
    <h2 class="allert__title">
      Вы действительно хотите отменить редактирование?
    </h2>
    <div class="allert__buttons">
      <leave theme="add" @btn-click="leavePages">Да</leave>
      <cancel class="allert__button" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/Button";
import ClosePopupButton from "@/components/ui/ClosePopupButton";

export default {
  components: {
    leave: Button,
    cancel: ClosePopupButton
  },
  methods: {
    leavePages() {
      this.$router.push("/");
      this.$store.dispatch("closePopup");
    }
  }
};
</script>

<style>
.allert {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.allert__title {
  max-width: 500px;
  margin-bottom: 50px;
  text-align: center;
}
.allert__button {
  margin-left: 25px;
}
</style>
