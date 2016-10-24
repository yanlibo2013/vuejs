/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
import  ajax from '../lib/ajax';
import * as types from './types'
export const addNote = ({dispatch}) => {
  dispatch(types.ADD_NOTE);
  ajax({
    url: '/qm/api/banner/list',
    success: (result)=>{
      console.log("success");
      console.log(result);

    },
    error:(result)=>{
      console.log("error");
      console.log(result);
    }
  })

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

