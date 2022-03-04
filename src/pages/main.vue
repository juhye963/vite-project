<template>
<div>USER ID : {{ userId }}</div>
<div>USER NAME: {{ userName }}</div>
</template>
<script>

import { ref } from 'vue'; 
import store from '../store';

export default {
    setup() {
        const user = store.getters['getUser'];
        const userId = ref(user.login_id);
        const userName = ref(user.name);

        return {
            userId,
            userName,
        }
    },
}
</script>
