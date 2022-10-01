import {createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import EditTodo from '../components/EditTodo';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
    {
        name: 'todos',
        path: '/todos',
        component: Todos
    },
    {
        name: 'addtodo',
        path: '/todos/add',
        component: AddTodo
    },
    {
        name: 'edittodo',
        path: '/todos/edit/:id',
        component: EditTodo
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;

//-------------------------------------------------------------------------------------//
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// export default new VueRouter({
//     mode: 'history',
//     routes: [
//         {
//             path: '/', 
//             component: () => import("../pages/Home"),
//             name: 'home'
//         },
//         {
//             path: '/about', 
//             component: () => import("../pages/About"),
//             name: 'about'
//         },
//         {
//             path: '/register',
//             component: () => import("../pages/Register"),
//             name: 'register'
//         },
//         {
//             path: '/login',
//             component: () => import("../pages/Login"),
//             name: 'login'
//         },
//         {
//             path: '/dashboard',
//             component: () => import("../pages/Dashboard"),
//             name: 'dashboard'
//         },
//         {
//             path: '/todos',
//             component: () => import("../components/Todos"),
//             name: 'todos'
//         },
//         {
//             path: 'todos/add',
//             component: () => import("../components/AddTodo"),
//             name: 'addtodo'
//         },
//         {
//             path: '/todos/edit/:id',
//             component: () => import("../components/EditTodo"),
//             name: 'dashboard'
//         }
//     ]
// })