<script>
import RestaurantsDropdown from '../restaurants-dropdown/RestaurantsDropdown.vue';

export default {
    name: 'TheHeader',

    components: {
        RestaurantsDropdown
    },

    inject: ['openWarning'],

    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
};
</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="headerNav">
                <a href="/" class="logoLink" aria-label="Burger King главная страница">
                    <img class="logoHeader" src="/img/logo.svg" alt="Burger King логотип" />
                </a>
                <RestaurantsDropdown />
                <ul class="headerLinks">
                    <li><a href="/vacancies" :class="['headerLink', { 'headerLink--active': isActive('/vacancies') }]">Вакансии</a></li>
                    <li><a href="/contacts" :class="['headerLink', { 'headerLink--active': isActive('/contacts') }]">Контакты</a></li>
                </ul>
                <button class="cartButton" type="button" aria-label="Корзина" @click="openWarning">
                    <span class="cartIconSearch">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.28418 0.00683594C7.93901 0.141752 10.0508 2.33703 10.0508 5.02539L10.0439 5.28418C9.99075 6.3311 9.61551 7.29244 9.01758 8.07422L11.8076 10.8643C12.0681 11.1247 12.0681 11.5472 11.8076 11.8076C11.5472 12.0681 11.1247 12.0681 10.8643 11.8076L8.07422 9.01758C7.22847 9.66458 6.17236 10.0507 5.02539 10.0508L4.7666 10.0439C2.19731 9.91374 0.1374 7.85338 0.00683594 5.28418L0 5.02539C0 2.25008 2.25008 0 5.02539 0L5.28418 0.00683594ZM5.02539 1.33398C2.98678 1.33398 1.33398 2.98678 1.33398 5.02539C1.33422 7.06381 2.98692 8.7168 5.02539 8.7168C7.06366 8.71656 8.71656 7.06366 8.7168 5.02539C8.7168 2.98692 7.0638 1.33422 5.02539 1.33398Z" fill="#532013"/>
                        </svg>
                    </span>
                    <span class="cartDetails">
                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.55957 0C7.30429 5.00926e-05 7.9677 0.263652 8.44531 0.741211C8.92269 1.2187 9.18634 1.88153 9.18652 2.62598V4.09668C10.257 4.43482 10.4167 5.27098 10.5371 6.24414L10.9824 9.9668C11.002 10.163 10.8514 10.3338 10.6553 10.334H2.96094C2.6927 10.334 2.46974 10.5494 2.46973 10.8242C2.46973 11.0925 2.69269 11.3145 2.96094 11.3145H10.832C11.0084 11.3147 11.1525 11.4457 11.1592 11.6221C11.1919 13.0091 10.583 14.0761 8.51562 14.0762H2.64062C0.344208 14.0762 -0.153592 12.7608 0.0361328 11.1514L0.625 6.24414C0.740442 5.27052 0.899149 4.43354 1.9707 4.0957V2.62598C1.97088 1.88142 2.23441 1.21872 2.71191 0.741211C3.18948 0.263815 3.85212 8.16698e-05 4.59668 0H6.55957ZM4.59668 1.98145C4.34839 1.98151 4.19927 2.05677 4.11328 2.14258C4.02739 2.22847 3.9523 2.37764 3.95215 2.62598V3.93457H7.20508V2.62598C7.20493 2.37784 7.12975 2.2285 7.04395 2.14258C6.95797 2.05666 6.80814 1.98149 6.55957 1.98145H4.59668Z" fill="#F4823D"/>
                        </svg>
                        <span class="cartPrice">0,00 руб.</span>
                    </span>
                </button>
            </nav>
        </div>
    </header>
</template>

<style src="./header.css" scoped>

</style>

