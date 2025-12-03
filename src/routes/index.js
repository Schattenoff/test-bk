import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/Home.vue';
import Contacts from "@/pages/contacts/Contacts.vue";
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
    history: createWebHistory(),
    routes,
});