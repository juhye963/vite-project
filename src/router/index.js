import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('../pages/main.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../pages/login.vue')
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     console.log('next : ' + next);
// })

export default router