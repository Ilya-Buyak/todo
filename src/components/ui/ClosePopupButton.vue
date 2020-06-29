<template>
  <close-popup theme="add" @btn-click="closePopup">Отмена</close-popup>
</template>

<script>
import Button from "@/components/ui/Button";
export default {
  components: {
    "close-popup": Button
  },
  methods: {
    closePopup() {
      this.$store.dispatch("closePopup");
    }
  }
};
</script>

<style scoped></style>
