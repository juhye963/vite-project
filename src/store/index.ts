import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state () {
        return {
            accessToken: undefined,
            user: {
                name: 'guest',
                login_id: 'guest'
            },
        }
    },
    plugins: [
        createPersistedState({
            paths: ['user', 'accessToken']
        })
    ],
    getters: {
        getUser: function (state) {
            return state.user;
        },
    },
    mutations: {
        setUser (state, user) {
            // state.auth.user = payload
            state.user.name = user.name;
            state.user.login_id = user.login_id;
        }
    }
});

export default store;