import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { computed, ref } from 'vue'

const store = createStore({
    state () {
        return {
            pageMoveCount: -1,
            user: {
                name: 'guest',
                login_id: 'guest'
            },
        }
    },
    plugins: [
        createPersistedState({
            paths: ['user']
        })
    ],
    getters: {
        getUser: function (state) {
            return state.user;
        },
        getGlobalCount: function (state) {
            return state.pageMoveCount;
        }
    },
    // 동기 처리(순차적 로직)
    // mutations 에 비동기 처리 로직들이 포함되면 같은 값에 대해 여러 개의 컴포넌트에서 변경을 요청했을 때, 그 변경 순서 파악이 어렵기 때문이다.
    mutations: {
        setUser (state, user) {
            // state.auth.user = payload
            state.user.name = user.name;
            state.user.login_id = user.login_id;
        },
        increaseCount (state) {
            state.pageMoveCount++
        },
        decreaseCount (state) {
            state.pageMoveCount--
        },
        setCount(state, payload) {
            state.pageMoveCount = payload
        }
    },
    // 비동기처리
    // setTimeout() 이나 서버와의 http 통신 처리 같이 결과를 받아올 타이밍이 예측되지 않은 로직은 Actions 에 선언한다.
    actions: {

    }
});


/**
 * vuex mapGetters 를 vue setup computed 인스턴스로 반환하는 랩핑메소드
 * @param mappedGetters
 * @returns
 */
export function mapComputedGetters(mappedGetters: any): any {
  const computeds = Object.fromEntries(
    Object.keys(store.getters).map((getter) => [
      getter,
      computed(() => store.getters[getter]),
    ]),
  )

  const mapped: any = {}
  for (const key in mappedGetters) {
    if (Object.hasOwnProperty.call(mappedGetters, key)) {
      const getterName = mappedGetters[key]
      mapped[key] = computeds[getterName]
    }
  }

  return mapped
}


export default store;