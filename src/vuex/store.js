import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import middlewares from './middlewares'
import apps from './modules/apps'

/*const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = debug

const mutations = {
    // common mutations
    [types.INIT_STATE] (state, moduleName) {
        state[moduleName] = { ...module.exports.default._modules[moduleName].state }
    },
    [types.CONTROL_MODAL](state, module, modalProperty, flag) {
        state[module][modalProperty] = flag
    },
    [types.CONTROL_LOADING](state, module, loadingProperty, flag) {
        state[module][loadingProperty] = flag
    }
}

export default new Vuex.Store({
    modules: {
        apps
    },
    strict: debug,
    middlewares
})*/

Vue.use(Vuex)
export default new Vuex.Store(apps);

/*const state = {
    notes: [],
    activeNote: {}
}

const mutations = {
    ADD_NOTE (state) {
        const newNote = {
            text: 'New note',
            favorite: false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },

    EDIT_NOTE (state, text) {
        state.activeNote.text = text
    },

    DELETE_NOTE (state) {
        state.notes.$remove(state.activeNote)
        state.activeNote = state.notes[0]
    },

    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note
    }
}*/

