import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const exampleNotes = [
  {
    id: 1,
    title: 'First note',
    content: 'This is the first note',
    category: 'work',
    createdAt: new Date().toISOString(),
    editedAt: new Date().toISOString(),
    selected: false,
  },
  {
    id: 2,
    title: 'Second note',
    content: 'This is the second note',
    category: 'personal',
    createdAt: new Date().toISOString(),
    editedAt: new Date().toISOString(),
    selected: false,
  },
  {
    id: 3,
    title: 'Third note',
    content: 'This is the third note',
    category: 'work',
    createdAt: new Date().toISOString(),
    editedAt: new Date().toISOString(),
    selected: true,
  },
];

export const useNoteStore = defineStore('notes', {
  state: () => ({
    notes: useStorage('pinia/notes', []),
  }),

  // getters: {
  //   doubleCount: state => state.count * 2,
  // },

  actions: {
    getAllNotes() {
      return this.notes;
    },

    getNoteById(id) {
      return this.notes.find(note => note.id === id);
    },

    createNote() {
      const newNoteId = this.notes.length.toString();
      const currentDate = new Date().toISOString();

      this.notes.push({
        id: newNoteId,
        title: 'New note',
        content: 'This is the new note',
        category: 'work',
        createdAt: currentDate,
        editedAt: currentDate,
        selected: false,
      });

      return newNoteId;
    },

    updateNoteById(id, updatedNote) {
      const noteIndex = this.notes.findIndex(note => note.id === id);

      this.notes[noteIndex] = updatedNote;
    },

    deleteNoteById(id) {
      this.notes = this.notes.filter(note => note.id !== id);
    },

    deleteAllNotes() {
      this.notes = [];
    },
  },
});
