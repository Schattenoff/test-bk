<script>

import SidebarMain from "@/components/menu/sidebar/main/SidebarMain.vue";
import Dish from "@/components/menu/dish/dish.vue";

export default {
    name: 'TheMainContent',

    inject: ['openWarning'],

    components: {
        SidebarMain,
        Dish,
    },
    data() {
        return {
            dishes: [
                { id: 1, image: '/img/menu/6.png', alt: 'Чизбургер', badgeType: 'Spicy', badgeText: 'Spicy', name: 'Чизбургер', weight: '190 г' },
                { id: 2, image: '/img/menu/1.png', alt: 'Фиш Бургер', badgeType: 'Bestseller', badgeText: 'Bestseller', name: 'Фиш Бургер', weight: '195 г' },
                { id: 3, image: '/img/menu/7.png', alt: 'Чизбургер Жульен Двойной', badgeType: 'New', badgeText: 'New', name: 'Чизбургер Жульен Двойной', weight: '210 г' },
                { id: 4, image: '/img/menu/3.png', alt: 'Двойной воппер с сыром', badgeType: '', badgeText: '', name: 'Двойной воппер с сыром', weight: '250 г' },
                { id: 5, image: '/img/menu/8.png', alt: 'Фиш Бургер', badgeType: '', badgeText: '', name: 'Фиш Бургер', weight: '195 г' },
                { id: 6, image: '/img/menu/4.png', alt: 'Чизбургер Жульен Двойной', badgeType: '', badgeText: '', name: 'Чизбургер Жульен Двойной', weight: '210 г' },
                { id: 7, image: '/img/menu/2.png', alt: 'Двойной воппер с сыром', badgeType: '', badgeText: '', name: 'Двойной воппер с сыром', weight: '250 г' },
                { id: 8, image: '/img/menu/5.png', alt: 'Чизбургер', badgeType: '', badgeText: '', name: 'Чизбургер', weight: '190 г' },
            ],
        };
    },
};
</script>

<template>
    <div class="container">
        <div class="contentWrapper">
            <SidebarMain />
            <section class="mainContent">
                <div class="mainContentContainer">
                    <div class="deliverySection">
                        <div class="deliveryToggle">
                            <button class="deliveryButton deliveryButtonActive" aria-pressed="true">Доставка</button>
                            <button class="deliveryButton" @click="openWarning" aria-pressed="false">Самовывоз</button>
                        </div>
                        <button class="addressInput"
                                @click="openWarning"
                                aria-label="Выбрать адрес доставки">
                        <span class="addressIcon">
                            <img class="addressIconCircle" src="/img/pointer.svg" alt="" aria-hidden="true" />
                        </span>
                            <span class="addressText">На какой адрес доставить?</span>
                            <img class="addressArrow" src="/img/arrow.svg" alt="" aria-hidden="true" />
                        </button>
                    </div>

                    <img class="promoBanner" src="/img/banner.png" alt="Промо баннер" />

                    <article class="productsSection">
                        <h1 class="productsTitle">Популярное</h1>
                        <div class="productsGrid">
                            <Dish
                                v-for="dish in dishes"
                                :key="dish.id"
                                :dish="dish"
                            />
                        </div>
                    </article>
                </div>
            </section>
            <img class="searchIcon" src="" alt="" aria-hidden="true" />
        </div>
    </div>
</template>

<style src="./main.css" scoped>
</style>