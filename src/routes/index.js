import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue';
import Vacancies from "@/pages/vacancies/Vacancies.vue";
import Offer from "@/pages/offer/Offer.vue";
import Privacy from "@/pages/privacy/Privacy.vue";

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/vacancies',
        component: Vacancies,
    },
    {
        path: '/offer',
        component: Offer,
    },
    {
        path: '/privacy',
        component: Privacy,
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});