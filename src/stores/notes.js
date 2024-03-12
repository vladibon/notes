import { createStore } from 'vuex';
import { useStorage } from '@vueuse/core';
import { nanoid } from 'nanoid';

export default createStore({
  state: {
    notes: useStorage('vuex/notes', []),
    favoritesFilter: useStorage('vuex/favoritesFilter', false),
    availableCategories: ['work', 'family', 'hobby'],
  },

  getters: {
    getFilteredNotes: state =>
      state.notes
        .filter(n => !state.favoritesFilter || n.favorite)
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),

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
