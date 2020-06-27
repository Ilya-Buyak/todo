<template>
  <form class="form" name="form">
    <h2 class="form__title">Добавьте заметку</h2>
    <div class="form__container">
      <div class="form__fieldset">
        <label class="form__label" for="name">Название</label>
        <input
          class="form__input"
          id="name"
          placeholder="Введите название заметки"
          v-model="title"
          @input="validCard"
        />
        <p class="error">{{ errorName }}</p>
      </div>
      <div class="form__fieldset">
        <label class="form__label" for="note">Заметка</label>
        <div class="form__note">
          <input
            class="form__input form__input_note"
            id="note"
            name="note"
            placeholder="Сделать дела"
            v-model="newNote"
          />
          <note-button theme="note" type="button" @btn-click="addNote">
            <img class="form__img" alt="галочка" src="../../assets/done.svg" />
          </note-button>
        </div>
        <p class="error">{{ errorNotes }}</p>
      </div>
    </div>
    <ul v-if="notes.length" class="form__list-items">
      <li class="form__list-item" v-for="(note, id) in notes" :key="note.id">
        <p class="form__checkbox-text">{{ note }}</p>
        <remove-note theme="remove" @btn-click="removeNote(id)" type="button" />
      </li>
    </ul>
    <submit-form theme="add" type="button" @btn-click="submitForm"
      >Добавить</submit-form
    >
  </form>
</template>

<script>
import Button from "@/components/ui/Button";

export default {
  components: {
    "note-button": Button,
    "submit-form": Button,
    "remove-note": Button
  },
  data() {
    return {
      title: "",
      newNote: "",
      notes: [],
      errorName: "",
      errorNotes: ""
    };
  },
  methods: {
    addNote() {
      if (!this.newNote) return;
      this.notes.push(this.newNote);
      this.newNote = "";
      this.errorNotes = "";
    },
    removeNote(id) {
      this.notes.splice(id, 1);
    },
    submitForm() {
      const card = {
        id: Date.now(),
        title: this.title,
        notes: this.notes
      };
      this.$store.dispatch("submitForm", card);
      if (this.notes.length === 0) {
        this.errorNotes = "Должна быть хотя бы одна заметка";
      } else {
        this.errorNotes = "";
      }
      if (this.title === "" || this.notes.length === 0) return;
      this.$store.dispatch("togglePopupVisible");
      this.title = "";
    },
    validCard() {
      if (this.title === "") {
        this.errorName = "Введите название";
      } else {
        this.errorName = "";
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

.form__list-items {
  list-style: none;
  padding: 0;
}
.form__list-item {
  display: flex;
  align-items: center;
}
.form__list-item:last-child {
  margin-bottom: 25px;
}
.form__checkbox-text {
  width: max-content;
  font-size: 20px;
  margin: 0 10px 0 0;
}

.error {
  font-size: 16px;
  line-height: 24px;
  color: #ed433f;
  height: 24px;
}
</style>
