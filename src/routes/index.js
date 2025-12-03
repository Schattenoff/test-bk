import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue';
import Vacancies from "@/pages/vacancies/Vacancies.vue";

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/vacancies',
        component: Vacancies,
    },
];
const isServer = typeof window === 'undefined'

const history = isServer ? createMemoryHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL)

export const router = createRouter({
    history: history,
    routes,
});