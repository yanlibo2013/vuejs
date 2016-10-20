
import * as types from './types'
export const addNote = ({dispatch}) => {
  dispatch(types.ADD_NOTE)
}

export const editNote = ({ dispatch }, e) => {
  dispatch(types.EDIT_NOTE, e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch(types.DELETE_NOTE)
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch(types.SET_ACTIVE_NOTE, note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch(types.TOGGLE_FAVORITE)
}

/*
export const addNote = function ({ dispatch }) {
  dispatch('ADD_NOTE');
  /!*this.$http.get('/qm/api/banner/list').then((response) => {
   // success callback
   console.log(response);
   }, (response) => {
   // error callback
   });*!/
}

export const editNote = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}
*/

