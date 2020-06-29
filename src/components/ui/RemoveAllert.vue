<template>
  <div class="allert">
    <h2 class="allert__title">Вы действительно хотите удалить заметку?</h2>
    <div class="allert__buttons">
      <delete theme="add" @btn-click="removeCard">Удалить</delete>
      <cancel class="allert__button" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/Button";
import ClosePopupButton from "@/components/ui/ClosePopupButton";
export default {
  components: {
    delete: Button,
    cancel: ClosePopupButton
  },
  methods: {
    removeCard() {
      this.$store.dispatch("removeCard");
      this.$store.dispatch("closePopup");
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped></style>
