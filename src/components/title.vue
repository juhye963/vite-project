<template>
    <h3>THIS IS <span>{{ title }}</span> PAGE</h3>
</template>
<style>
h3 > span {
    font-style:italic
}
</style>
<script>
import { computed } from "vue";

export default {
    props: ['name'],
    setup(props) {
        const title = computed(() => {
            return props.name
        })
        return {
            title
        }
    },
}
</script>