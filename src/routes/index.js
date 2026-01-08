import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import AboutUs from "./../components/AboutUs.vue"
import Login from "./../components/Login.vue"
import Register from "./../components/Register.vue"
import Students from "./../components/Students.vue"
import Lecturers from "./../components/Lecturers.vue"
import Courses from  "./../components/Courses.vue"
import Hostels from  "./../components/Hostels.vue"
import Departments from  "./../components/Departments.vue"
import Classroom from  "./../components/Classroom.vue"
import NewCourse from  "./../components/NewCourse.vue"
import UpdateCourse from  "./../components/UpdateCourse.vue"
import Faculty from '../components/Faculty.vue'
import Admissions from '../components/Admissions.vue'
import Contact from '../components/Contact.vue'



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
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/students',
        name: 'students',
        component: Students,
    },
    {
        path: '/Lecturers',
        name: 'lecturers',
        component: Lecturers,
    },
    {
        path: '/Courses',
        name: 'courses',
        component: Courses,
    },
    {
        path: '/Hostels',
        name: 'hostels',
        component: Hostels,
    },
    {
        path: '/Departments',
        name: 'departments',
        component: Departments,
    },
    {
        path: '/Classroom',
        name: 'classroom',
        component: Classroom,
    },
   {
        path: '/NewCourse',
        name: 'Newcourse',
        component: NewCourse,
   },
   {    path: '/UpdateCourse',
        name: 'UpdateCourse',
        component: UpdateCourse,

   },
   {    path: '/Faculty',
        name: 'faculty',
        component: Faculty,

},
{
    path: '/admissions',
    name: 'admissions',
    component: Admissions,
},
{
    path: '/contact',
    name: 'contact',
    component: Contact,
}


]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        return { left: 0, top: 0 }
    },
})

export default router