import { createStore } from 'vuex';
import { useStorage } from '@vueuse/core';
import { nanoid } from 'nanoid';

// export const exampleNotes = [
//   {
//     id: 1,
//     title: 'First note',
//     content: 'This is the first note',
//     category: 'work',
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     favorite: false,
//   },
//   {
//     id: 2,
//     title: 'Second note',
//     content: 'This is the second note',
//     category: 'personal',
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     favorite: false,
//   },
//   {
//     id: 3,
//     title: 'Third note',
//     content: 'This is the third note',
//     category: 'work',
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     favorite: true,
//   },
// ];

export default createStore({
  state: {
    notes: useStorage('vuex/notes', []),
    availableCategories: ['work', 'family', 'hobby'],
  },

  getters: {
    getNoteById: state => id => ({ ...state.notes.find(note => note.id === id) }),
  },

  mutations: {
    addNote(state, newNote) {
      state.notes.push(newNote);
    },

    updateNote(state, updatedNote) {
      const noteIndex = state.notes.findIndex(note => note.id === updatedNote.id);

      state.notes.splice(noteIndex, 1, updatedNote);
    },

    deleteNote(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
    },
  },

  actions: {
    createNote({ commit }) {
      const currentDate = new Date().toISOString();
      const newNote = {
        id: nanoid(5),
        title: '',
        content: '',
        category: '',
        createdAt: currentDate,
        updatedAt: currentDate,
        favorite: false,
      };

      commit('addNote', newNote);

      return newNote;
    },

    editNote({ commit }, updatedNote) {
      updatedNote.updatedAt = new Date().toISOString();

      commit('updateNote', updatedNote);
    },
  },
});
