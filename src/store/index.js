import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            auth: {
                accessToken: undefined,
                isUser: false,
                user: {
                    name: 'guest',
                    login_id: 'guest'
                },
            }
        }
    },
    getters: {
        getUser: function (state) {
            return state.auth.user;
        }
    },
    mutations: {
        setUser (state, payload) {
            // state.auth.user = payload
            state.auth.user.name = payload.name;
            state.auth.user.login_id = payload.login_id;
            state.auth.isUser = true;
        }
    }
});

export default store;