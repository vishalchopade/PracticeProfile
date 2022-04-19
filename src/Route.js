import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
// import Profile from './components/Profile.vue'
// import Login from './components/Login.vue'
const routes=[
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'ProfilePage',
        path: '/profilePage',
        component: () => import('./components/ProfilePage.vue')
    },
    {
        name: 'ProfileAdmin',
        path: '/profileAdmin',
        component: () => import('./components/ProfileAdmin.vue')
    },    
];

const router = createRouter({
        history:createWebHistory(),
        routes
    }
);
export default router;