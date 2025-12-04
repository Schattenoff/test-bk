import { createRouter, createWebHistory } from 'vue-router'
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

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});