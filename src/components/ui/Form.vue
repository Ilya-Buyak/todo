<template>
  <form class="form" name="form" @submit.prevent="submitForm(title)">
    <h2 class="form__title">Добавьте заметку</h2>
    <div class="form__container">
      <div class="form__fieldset">
        <label class="form__label" for="name">Название</label>
        <input
          class="form__input"
          id="name"
          placeholder="Введите название заметки"
          v-model="title"
          @input="validName"
        />
        <p class="error">{{ errorTitleText }}</p>
      </div>
      <div class="form__fieldset">
        <label class="form__label" for="todo">Заметка</label>
        <div class="form__note">
          <input
            class="form__input form__input_note"
            id="todo"
            name="todo"
            placeholder="Сделать дела"
            v-model="newTodo"
          />
          <addTodo-button
            theme="note"
            type="button"
            @btn-click="addTodo(newTodo)"
          >
            <img class="form__img" alt="галочка" src="../../assets/done.svg" />
          </addTodo-button>
        </div>
        <p class="error">{{ errorTodoText }}</p>
      </div>
    </div>
    <todos :todos="todos" />
    <submit-form theme="add" @btn-click="submitForm(title)"
      >Добавить</submit-form
    >
  </form>
</template>

<script>
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
export default {
  components: {
    "addTodo-button": Button,
    "submit-form": Button,
    todos: Checkbox
  },
  data() {
    return {
      title: "",
      errorTitleText: "",
      errorTodoText: "",
      newTodo: ""
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    addTodo(newTodo) {
      this.$store.dispatch("addTodo", newTodo);
      this.validTodo();
      this.newTodo = "";
    },
    submitForm(title) {
      if (!this.title || !this.todos.length) {
        this.validName();
        this.validTodo();
        return;
      }
      this.$store.dispatch("closePopup");
      this.title = "";
      this.$store.dispatch("submitForm", title);
    },
    validTodo() {
      if (!this.todos.length) {
        this.errorTodoText = "Должна быть хотя бы одна заметка";
      } else {
        this.errorTodoText = "";
      }
    },
    validName() {
      if (!this.title) {
        this.errorTitleText = "Введите название";
      } else {
        this.errorTitleText = "";
      }
    }
  }
};
</script>

<style scoped>
.form__title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 25px;
}
.form__fieldset {
  margin: 0 20px 30px 20px;
}
.form__label {
  margin-bottom: 10px;
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
}
.form__input {
  outline: none;
  width: 100%;
  padding: 10px 0;
  border: 2px solid transparent;
  font-size: 18px;
  line-height: 22px;
  font-family: inherit;
  border-bottom: 2px solid #fff;
  background-color: transparent;
}
.form__input_note {
  width: 85%;
}
.form__input::placeholder {
  color: #fff;
}

.form__container {
  margin: 0 -20px;
  display: flex;
}
.form__container .form__fieldset {
  width: 100%;
}
.form__note {
  display: flex;
}

.form__img {
  width: 100%;
  height: 100%;
}

.error {
  font-size: 16px;
  line-height: 24px;
  color: #ed433f;
  height: 24px;
}
</style>
