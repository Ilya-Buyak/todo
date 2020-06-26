<template>
  <button
    :class="['button', `button_theme_${theme}`]"
    @click="$emit('btn-click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: String
  }
};
</script>

<style scoped>
.button {
  border: none;
  cursor: pointer;
  background: none;
  text-align: center;
  outline: none;
  display: block;
}

.button:hover {
  opacity: 0.7;
  transition: 0.3s;
}

.button_theme_main {
  margin: 0 auto;
  padding: 15px;
  font-size: 24px;
  font-weight: 500;
  color: white;
  background-color: #7f89ff;
}
.button_theme_card {
  padding: 15px 15px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  margin: auto 0 0 0;
}
.button_theme_delete {
  background: url(../../assets/trash-icon.svg) center no-repeat;
  border: none;
  width: 18px;
  height: 20px;
  position: absolute;
  top: 7px;
  right: 15px;
  cursor: pointer;
}
</style>
