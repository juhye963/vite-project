<template>
<h3>THIS IS LOGIN PAGE</h3>
id
<input type="text" v-model="loginId">
password
<input type="password" v-model="password">
<button v-on:click="login">login</button>
</template>

<script>
import { ref, onMounted } from 'vue';
import router from '../router';
import backend from '../services/backend';
import store from '../store';
export default {
    setup() {
        onMounted(() => {
            // console.log(`${router.currentRoute.value.name} page mounted`);
        });

        const loginId = ref('');
        const password = ref('');

        function login () {
            backend.run('AUTH_LOGIN').then(function (__res) {
                const user = __res.data.user;
                if (loginId.value != 'test' || password.value != user.grade.idx) {
                    throw new Error('LOGIN FAILED');
                }
                
                alert('로그인 성공');
                store.commit('setUser', user);
                router.push({name: 'main'});
            }).catch(function (__err) {
                console.log(__err);
                alert(__err.response?.data?.message ?? __err.message)
            })
        }
        
        return {
            loginId,
            password,
            login
        }
    }
}
</script>
