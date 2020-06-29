<template>
  <div class="todos">
    <ul class="todos__items">
      <li class="todo__item" v-for="(todo, id) in todos" :key="todo.id">
        <div class="todo__content">
          <input
            v-if="editPage"
            class="todo__input"
            type="checkbox"
            v-model="todo.completed"
            :id="`${todo.id}`"
          />
          <input
            type="text"
            :class="['todo__input-text', { 'todo__input-text_on': todo.edit }]"
            :placeholder="`${todo.text}`"
            v-model="changedTodo"
          />
          <label
            :for="`${todo.id}`"
            :class="[
              'todo__checkbox-text',
              { 'todo__checkbox-text_completed': todo.completed },
              { 'todo__checkbox-text_edit': editPage },
              { 'todo__checkbox-text_off': todo.edit }
            ]"
          >
            {{ todo.text }}
          </label>
          <div v-if="editPage" class="change__todo">
            <add-todo
              v-if="todo.edit"
              @btn-click="changeTodo(changedTodo, index, id)"
              ><img
                class="todo__icon"
                src="../../assets/doneBlack.svg"
                alt="изменить заметку"
            /></add-todo>
            <change-todo
              v-else
              v-model="todo.edit"
              @btn-click="addInput(index, id)"
              ><img
                class="todo__icon"
                src="../../assets/edit-icon.svg"
                alt="редактировать заметку"
            /></change-todo>
            <cancel-change v-if="todo.edit" @btn-click="undo"
              ><img
                class="todo__icon"
                src="../../assets/undo.svg"
                alt="отменить действие"
            /></cancel-change>
            <replay-change v-if="todo.edit" @btn-click="redo"
              ><img
                class="todo__icon"
                src="../../assets/redo.svg"
                alt="повторить отмененное действие"
            /></replay-change>
            <remove-todo
              theme="remove"
              @btn-click="removeTodoFromCardPage(index, id)"
              type="button"
            />
          </div>
          <remove-todo
            v-if="isFormShown"
            theme="remove"
            @btn-click="removeTodo(id)"
            type="button"
          />
        </div>
      </li>
    </ul>
    <div v-if="editPage" class="new-todo">
      <input
        class="new-todo__input"
        type="text"
        placeholder="Заметка"
        v-model="newTodo"
      />
      <add-button theme="add" @btn-click="addNewTodo(newTodo, index)"
        >&plus;</add-button
      >
    </div>
  </div>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  props: {
    todos: Array,
    index: Number
  },
  data() {
    return {
      changedTodo: "",
      newTodo: ""
    };
  },
  components: {
    "remove-todo": Button,
    "add-button": Button,
    "change-todo": Button,
    "add-todo": Button,
    "cancel-change": Button,
    "replay-change": Button
  },
  computed: {
    editPage() {
      return this.$route.path !== "/";
    },
    isFormShown() {
      return this.$store.getters.isFormShown;
    }
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch("removeTodo", id);
    },
    removeTodoFromCardPage(index, id) {
      this.$store.dispatch("removeTodoFromCardPage", {
        index,
        id
      });
    },
    addInput(index, id) {
      this.$store.dispatch("addInput", {
        index,
        id
      });
    },
    changeTodo(changedTodo, index, id) {
      this.$store.dispatch("changeTodo", {
        changedTodo,
        index,
        id
      });
      this.changedTodo = "";
    },
    undo() {
      document.execCommand("undo");
    },
    redo() {
      document.execCommand("redo");
    },
    addNewTodo(newTodo, index) {
      this.$store.dispatch("addNewTodo", {
        newTodo,
        index
      });
      this.newTodo = "";
    }
  }
};
</script>

<style scoped>
.todos__items {
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
}
.todo__content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.todo__input {
  width: 20px;
  height: 20px;
}
.todo__item:last-child {
  margin-bottom: 25px;
}
.todo__checkbox-text {
  width: max-content;
  font-size: 20px;
  margin: 0 10px 0 10px;
}
.todo__checkbox-text_edit {
  color: white;
  font-size: 28px;
}
.todo__checkbox-text_completed {
  text-decoration: line-through;
}
.todo__checkbox-text_off {
  display: none;
}
.todo__input-text {
  display: none;
  background-color: transparent;
  border: 2px solid transparent;
  border-bottom: 2px solid black;
  outline: none;
  margin-left: 10px;
  font-size: 22px;
}
.todo__input-text::placeholder {
  color: #fff;
}
.todo__input-text_on {
  display: block;
  max-width: 100%;
}
.todo__icon {
  width: 30px;
  height: 30px;
}
.new-todo__input {
  background-color: transparent;
  border: 2px solid transparent;
  border-bottom: 2px solid black;
  outline: none;
  margin-left: 10px;
  font-size: 22px;
  padding: 0;
  max-width: 80%;
}
.new-todo__input::placeholder {
  color: #fff;
}
</style>
