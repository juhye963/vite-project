<template>
<div>페이지 이동 수 노출 (새로고침시 초기화)</div>
<div>vue router에서 이동할때마다 store의 count++</div>
<br>
<div>local count : <span>{{ localCount }}</span> <button v-on:click="increase">+</button><button v-on:click="decrease">-</button></div>
<div>main count : <span>{{ globalCount }}</span> <button v-on:click="add">+</button><button v-on:click="sub">-</button></div>
<button v-on:click="set">set local count to main count</button>
</template>
<script>
import { ref, reactive, computed, onMounted } from 'vue';
import store from '../../store';
export default {
    setup() {
        onMounted(() => {
            console.log(store.state);
        });
        const localCount = ref(0);
        const globalCount  = computed(() => {
            return store.getters.getGlobalCount;
        });

        function increase () {
            localCount.value++
        }
        function decrease () {
            localCount.value--
        }

        function add() {
            // store.state.pageMoveCount++
            store.commit('increaseCount');
        }
        function sub() {
            // store.state.pageMoveCount--
            store.commit('decreaseCount');
        }

        function set() {
            store.commit('setCount', localCount)
        }

        return {
            localCount,
            globalCount,
            increase,
            decrease,
            add,
            sub,
            set
        }
    },
}
</script>