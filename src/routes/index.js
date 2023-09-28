import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import AboutUs from "./../components/AboutUs.vue"
import Login from "./../components/Login.vue"
import Signup from "./../components/Signup.vue"



const routes =[
    {
        path: '/',
        name: 'landingpage',
        component: LandingPage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutUs,
    },
    {
        path: '/Signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router