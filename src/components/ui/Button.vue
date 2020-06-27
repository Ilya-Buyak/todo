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
  display: block;
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
.button_theme_remove {
  background: url(../../assets/trash-icon.svg) center no-repeat;
  width: 18px;
  height: 20px;
}
.button_theme_note {
  width: 15%;
  height: 100%;
}

.button_theme_add {
  background-color: #fff;
  color: #7f89ff;
  padding: 10px;
  font-size: 20px;
  line-height: 24px;
}
</style>
