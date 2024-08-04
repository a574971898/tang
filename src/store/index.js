import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        globalParam: 'Zh'
    },
    mutations: {
        SET_GLOBAL_PARAM(state, value) {
            state.globalParam = value;
        }
    },
    // 如果你需要处理异步操作，可以添加 actions
    actions: {
        updateGlobalParam({ commit }, value) {
            commit('SET_GLOBAL_PARAM', value);
        }
    },
    // 如果你需要计算属性，可以添加 getters
    getters: {
        globalParam: state => state.globalParam
    }
})