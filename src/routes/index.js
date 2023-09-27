import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from "./components/LandingPage"
import About from "./components/About"
import Login from "./components/Login.vue"
import Signup from "./components/Signup.vue"


Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'landingpage',
        components: LandingPage,
    },
    {
        path: '/about',
        name: 'about',
        components: About,
    },
    {
        path: '/Signup',
        name: 'Signup',
        components: Signup,
    },
    {
        path: '/Login',
        name: 'Login',
        components: Login,
    }

]