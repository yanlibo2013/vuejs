/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
import {
    ADD_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    SET_ACTIVE_NOTE,
    TOGGLE_FAVORITE
} from '../types'

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  [ADD_NOTE](state){
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
    console.log("add");
    console.log(state.notes);
  },
  [EDIT_NOTE](state,text){
    state.activeNote.text = text
  },
  [DELETE_NOTE](state){
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
    console.log("delelte");
    console.log(state.notes);
  },
  [SET_ACTIVE_NOTE](state,note){
    state.activeNote = note

  },
  [TOGGLE_FAVORITE](state){
    state.activeNote.favorite = !state.activeNote.favorite
  }
}

export default {
  state,
  mutations
}
