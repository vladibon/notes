import { createStore } from 'vuex';
import { useStorage } from '@vueuse/core';

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
  },

  getters: {
    getNoteById: state => id => {
      return state.notes.find(note => note.id === id);
    },
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
    createNote({ state, commit }) {
      const currentDate = new Date().toISOString();
      const newNote = {
        id: state.notes.length.toString(),
        title: 'New note',
        content: 'This is the new note',
        category: 'work',
        createdAt: currentDate,
        updatedAt: currentDate,
        favorite: false,
      };

      commit('addNote', newNote);

      return newNote.id;
    },

    updateNote({ commit }, updatedNote) {
      updatedNote.updatedAt = new Date().toISOString();

      commit('updateNote', updatedNote);
    },
  },
});
