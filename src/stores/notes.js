import { createStore } from 'vuex';
import { useStorage } from '@vueuse/core';

// export const exampleNotes = [
//   {
//     id: 1,
//     title: 'First note',
//     content: 'This is the first note',
//     category: 'work',
//     createdAt: new Date().toISOString(),
//     editedAt: new Date().toISOString(),
//     selected: false,
//   },
//   {
//     id: 2,
//     title: 'Second note',
//     content: 'This is the second note',
//     category: 'personal',
//     createdAt: new Date().toISOString(),
//     editedAt: new Date().toISOString(),
//     selected: false,
//   },
//   {
//     id: 3,
//     title: 'Third note',
//     content: 'This is the third note',
//     category: 'work',
//     createdAt: new Date().toISOString(),
//     editedAt: new Date().toISOString(),
//     selected: true,
//   },
// ];

export default createStore({
  state: {
    notes: useStorage('vuex/notes', []),
  },

  getters: {
    getAllNotes: state => {
      return state.notes;
    },

    getNoteById: state => id => {
      return state.notes.find(note => note.id === id);
    },
  },

  mutations: {
    createNote(state, id) {
      const currentDate = new Date().toISOString();

      state.notes.push({
        id,
        title: 'New note',
        content: 'This is the new note',
        category: 'work',
        createdAt: currentDate,
        editedAt: currentDate,
        selected: false,
      });
    },
  },

  actions: {
    createNewNote({ state, commit }) {
      const newNoteId = state.notes.length.toString();

      commit('createNote', newNoteId);

      return newNoteId;
    },

    // updateNoteById(id, updatedNote) {
    //   const noteIndex = this.notes.findIndex(note => note.id === id);

    //   this.notes[noteIndex] = updatedNote;
    // },

    // deleteNoteById(id) {
    //   this.notes = this.notes.filter(note => note.id !== id);
    // },

    // deleteAllNotes() {
    //   this.notes = [];
    // },
  },
});
