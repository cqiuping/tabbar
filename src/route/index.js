import VueRouter  from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        component: () => import('../components/content/Home')
    },
    {
        path: '/category',
        component: () => import('../components/content/category')
    },
    {
        path: '/profile',
        component: () => import('../components/content/profile')
    },
    {
        path: '/cart',
        component: () => import('../components/content/cart')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
