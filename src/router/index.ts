import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'main',
            path: '/',
            meta: {
                pageName: 'MAIN' // 노출용
            },
            component: () => import('../pages/main.vue')
        },
        {
            name: 'login',
            path: '/login',
            meta: {
                pageName: 'LOGIN' // 노출용
            },
            component: () => import('../pages/login.vue')
        },
        {
            name: 'features',
            path: '/features',
            component: () => import('../pages/features/index.vue'),
            redirect: {name: 'featureList'},
            children: [
                {
                    name: 'featureList',
                    path: 'list',
                    meta: {
                        pageName: 'FEATURE LIST' // 노출용
                    },
                    component: () => import('../pages/features/list.vue')
                },
                {
                    name: 'featureCounter',
                    path: 'counter',
                    meta: {
                        pageName: 'COUNTER FEATURE' // 노출용
                    },
                    component: () => import('../pages/features/counter.vue')
                }
            ]
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     console.log(from);
//     console.log('next : ' + next);
// })

export default router