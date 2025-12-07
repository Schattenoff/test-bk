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
            currentMenuId: 'popular',
            menus: [
            {
                id: 'popular',
                title: "Популярное",
                dishes: [
                { id: 1, image: "/img/menu/popular/1.png", alt: "Чизбургер", badgeType: "Spicy", badgeText: "Spicy", name: "Чизбургер", weight: "190 г" },
                { id: 2, image: "/img/menu/popular/2.png", alt: "Кинг Фри большой", badgeType: "", badgeText: "", name: "Кинг Фри большой", weight: "300 г" },
                { id: 3, image: "/img/menu/popular/3.png", alt: "Наггетсы (9 шт.)", badgeType: "", badgeText: "", name: "Наггетсы (9 шт.)", weight: "125 г" },
                { id: 4, image: "/img/menu/popular/4.png", alt: "Двойной воппер с сыром", badgeType: "", badgeText: "", name: "Двойной воппер с сыром", weight: "250 г" },
                { id: 5, image: "/img/menu/popular/5.png", alt: "Фиш Бургер", badgeType: "Bestseller", badgeText: "Bestseller", name: "Фиш Бургер", weight: "195 г" },
                { id: 6, image: "/img/menu/popular/6.png", alt: "Чизбургер Жульен Двойной", badgeType: "", badgeText: "", name: "Чизбургер Жульен Двойной", weight: "210 г" },
                { id: 7, image: "/img/menu/popular/7.png", alt: "Двойной воппер с сыром", badgeType: "Bestseller", badgeText: "Bestseller", name: "Двойной воппер с сыром", weight: "250 г" },
                { id: 8, image: "/img/menu/popular/8.png", alt: "Чизбургер", badgeType: "", badgeText: "", name: "Чизбургер", weight: "190 г" }
                ]
            },
            {
                id: 'new',
                title: "Новинки",
                dishes: [
                { id: 1, image: "/img/menu/new/1.png", alt: "Двойной воппер с сыром", badgeType: "New", badgeText: "New", name: "Двойной воппер с сыром", weight: "250 г" },
                { id: 2, image: "/img/menu/new/2.png", alt: "Пирожок Черника", badgeType: "New", badgeText: "New", name: "Пирожок Черника", weight: "73 г" },
                { id: 3, image: "/img/menu/new/3.png", alt: "Шримп Ролл Жульен", badgeType: "New", badgeText: "New", name: "Шримп Ролл Жульен", weight: "179 г" },
                { id: 4, image: "/img/menu/new/4.png", alt: "Фиш Бургер", badgeType: "New", badgeText: "New", name: "Фиш Бургер", weight: "195 г" },
                { id: 5, image: "/img/menu/new/5.png", alt: "Роял Фри с Лисичками", badgeType: "New", badgeText: "New", name: "Роял Фри с Лисичками", weight: "245 г" },
                { id: 6, image: "/img/menu/new/6.png", alt: "Пунш Апельсин-Лайм", badgeType: "New", badgeText: "New", name: "Пунш Апельсин-Лайм", weight: "335 г" },
                { id: 7, image: "/img/menu/new/7.png", alt: "Фиш Бургер", badgeType: "New", badgeText: "New", name: "Фиш Бургер", weight: "195 г" },
                { id: 8, image: "/img/menu/new/8.png", alt: "Чизбургер", badgeType: "New", badgeText: "New", name: "Чизбургер", weight: "190 г" }
                ]
            },
            {
                id: 'combo',
                title: "Кинг Комбо",
                dishes: [
                { id: 1, image: "/img/menu/combo/1.png", alt: "Поесть как следует комбо Малое", badgeType: "Bestseller", badgeText: "Bestseller", name: "Поесть как следует комбо Малое", weight: "600 г" },
                { id: 2, image: "/img/menu/combo/2.png", alt: "Огненное Воппер Комбо на двоих", badgeType: "Spicy", badgeText: "Spicy", name: "Огненное Воппер Комбо на двоих", weight: "600 г" },
                { id: 3, image: "/img/menu/combo/3.png", alt: "Классическое комбо Малое", badgeType: "", badgeText: "", name: "Классическое комбо Малое", weight: "600 г" },
                { id: 4, image: "/img/menu/combo/4.png", alt: "Классическое комбо Большое", badgeType: "", badgeText: "", name: "Классическое комбо Большое", weight: "800 г" }
                ]
            },
            {
                id: 'burgers',
                title: "Бургеры",
                dishes: [
                { id: 1, image: "/img/menu/burgers/1.png", alt: "Чизбургер", badgeType: "Spicy", badgeText: "Spicy", name: "Чизбургер", weight: "190 г" },
                { id: 2, image: "/img/menu/burgers/2.png", alt: "Фиш Бургер", badgeType: "Bestseller", badgeText: "Bestseller", name: "Фиш Бургер", weight: "195 г" },
                { id: 3, image: "/img/menu/burgers/3.png", alt: "Чизбургер Жульен Двойной", badgeType: "New", badgeText: "New", name: "Чизбургер Жульен Двойной", weight: "210 г" },
                { id: 4, image: "/img/menu/burgers/4.png", alt: "Двойной воппер с сыром", badgeType: "", badgeText: "", name: "Двойной воппер с сыром", weight: "250 г" },
                { id: 5, image: "/img/menu/burgers/5.png", alt: "Фиш Бургер", badgeType: "", badgeText: "", name: "Фиш Бургер", weight: "195 г" },
                { id: 6, image: "/img/menu/burgers/6.png", alt: "Чизбургер Жульен Двойной", badgeType: "", badgeText: "", name: "Чизбургер Жульен Двойной", weight: "210 г" },
                { id: 7, image: "/img/menu/burgers/7.png", alt: "Двойной воппер с сыром", badgeType: "", badgeText: "", name: "Двойной воппер с сыром", weight: "250 г" },
                { id: 8, image: "/img/menu/burgers/8.png", alt: "Чизбургер", badgeType: "", badgeText: "", name: "Чизбургер", weight: "190 г" }
                ]
            },
            {
                id: 'takeaway',
                title: "Удобно с собой",
                dishes: [
                { id: 1, image: "/img/menu/takeaway/1.png", alt: "Синг Бокс", badgeType: "На одного", badgeText: "На одного", name: "Синг Бокс", weight: "" },
                { id: 2, image: "/img/menu/takeaway/2.png", alt: "Дуэт Бокс", badgeType: "На двоих", badgeText: "На двоих", name: "Дуэт Бокс", weight: "" },
                { id: 3, image: "/img/menu/takeaway/3.png", alt: "Пати Бокс", badgeType: "На троих", badgeText: "На троих", name: "Пати Бокс", weight: "" },
                { id: 4, image: "/img/menu/takeaway/4.png", alt: "Липтон 300 мл", badgeType: "", badgeText: "", name: "Липтон", weight: "300 мл" }
                ]
            },
            {
                id: 'shrimp',
                title: "Креветки",
                dishes: [
                { id: 1, image: "/img/menu/shrimp/1.png", alt: "Салат Цезарь с креветками", badgeType: "", badgeText: "", name: "Салат Цезарь с креветками", weight: "185 г" },
                { id: 2, image: "/img/menu/shrimp/2.png", alt: "Креветки", badgeType: "", badgeText: "", name: "Креветки", weight: "" },
                { id: 3, image: "/img/menu/shrimp/3.png", alt: "Кинг Букет Креветки XXL", badgeType: "", badgeText: "", name: "Кинг Букет Креветки XXL", weight: "400 г" },
                { id: 4, image: "/img/menu/shrimp/4.png", alt: "Шримп Ролл", badgeType: "", badgeText: "", name: "Шримп Ролл", weight: "149 г" }
                ]
            },
            {
                id: 'rolls',
                title: "Роллы",
                dishes: [
                { id: 1, image: "/img/menu/rolls/1.png", alt: "Шримп Ролл", badgeType: "", badgeText: "", name: "Шримп Ролл", weight: "149 г" },
                { id: 2, image: "/img/menu/rolls/2.png", alt: "Шримп Ролл Жульен", badgeType: "New", badgeText: "New", name: "Шримп Ролл Жульен", weight: "179 г" },
                { id: 3, image: "/img/menu/rolls/3.png", alt: "Цезарь Ролл со стрипсами", badgeType: "", badgeText: "", name: "Цезарь Ролл со стрипсами", weight: "189 г" },
                { id: 4, image: "/img/menu/rolls/4.png", alt: "Воппер Ролл", badgeType: "", badgeText: "", name: "Воппер Ролл", weight: "193 г" }
                ]
            },
            {
                id: 'sauces',
                title: "Соусы",
                dishes: [
                { id: 1, image: "/img/menu/sauces/1.png", alt: "Соус Сырный", badgeType: "", badgeText: "", name: "Соус Сырный", weight: "30 г" },
                { id: 2, image: "/img/menu/sauces/2.png", alt: "Соус Чили Чиз", badgeType: "New", badgeText: "New", name: "Соус Чили Чиз", weight: "45 г" },
                { id: 3, image: "/img/menu/sauces/3.png", alt: "Соус Барбекю", badgeType: "", badgeText: "", name: "Соус Барбекю", weight: "30 г" },
                { id: 4, image: "/img/menu/sauces/4.png", alt: "Соус Чесночный", badgeType: "", badgeText: "", name: "Соус Чесночный", weight: "30 г" },
                { id: 5, image: "/img/menu/sauces/5.png", alt: "Соус Горчичный", badgeType: "", badgeText: "", name: "Соус Горчичный", weight: "30 г" },
                { id: 6, image: "/img/menu/sauces/6.png", alt: "Соус Кисло-ладкий", badgeType: "New", badgeText: "New", name: "Соус Кисло-ладкий", weight: "30 г" },
                { id: 7, image: "/img/menu/sauces/7.png", alt: "Соус Брусничный", badgeType: "", badgeText: "", name: "Соус Брусничный", weight: "25 г" },
                { id: 8, image: "/img/menu/sauces/8.png", alt: "Соус Гриль Особый", badgeType: "", badgeText: "", name: "Соус Гриль Особый", weight: "30 г" }
                ]
            },
            {
                id: 'fries',
                title: "Картофель",
                dishes: [
                { id: 1, image: "/img/menu/fries/1.png", alt: "Кинг Фри большой", badgeType: "", badgeText: "", name: "Кинг Фри большой", weight: "300 г" },
                { id: 2, image: "/img/menu/fries/2.png", alt: "Роял Фри с Лисичками", badgeType: "New", badgeText: "New", name: "Роял Фри с Лисичками", weight: "245 г" },
                { id: 3, image: "/img/menu/fries/3.png", alt: "Картофель Деревенский", badgeType: "", badgeText: "", name: "Картофель Деревенский", weight: "153 г" },
                { id: 4, image: "/img/menu/fries/4.png", alt: "Кинг Фри большой + 2 соуса", badgeType: "", badgeText: "", name: "Кинг Фри большой + 2 соуса", weight: "" }
                ]
            },
            {
                id: 'snacks',
                title: "Закуски",
                dishes: [
                { id: 1, image: "/img/menu/snacks/1.png", alt: "Кинг Фри большой", badgeType: "", badgeText: "", name: "Кинг Фри большой", weight: "300 г" },
                { id: 2, image: "/img/menu/snacks/2.png", alt: "Роял Фри с Лисичками", badgeType: "New", badgeText: "New", name: "Роял Фри с Лисичками", weight: "245 г" },
                { id: 3, image: "/img/menu/snacks/3.png", alt: "Картофель Деревенский", badgeType: "", badgeText: "", name: "Картофель Деревенский", weight: "153 г" },
                { id: 4, image: "/img/menu/snacks/4.png", alt: "Кинг Фри большой + 2 соуса", badgeType: "", badgeText: "", name: "Кинг Фри большой + 2 соуса", weight: "" }
                ]
            },
            {
                id: 'drinks',
                title: "Напитки",
                dishes: [
                { id: 1, image: "/img/menu/drinks/1.png", alt: "Пунш Апельсин-Лайм", badgeType: "New", badgeText: "New", name: "Пунш Апельсин-Лайм", weight: "335 г" },
                { id: 2, image: "/img/menu/drinks/2.png", alt: "Липтон", badgeType: "", badgeText: "", name: "Липтон", weight: "300 мл" },
                { id: 3, image: "/img/menu/drinks/3.png", alt: "Липтон Грин", badgeType: "", badgeText: "", name: "Липтон Грин", weight: "300 г" },
                { id: 4, image: "/img/menu/drinks/4.png", alt: "Эвервесс Кола", badgeType: "", badgeText: "", name: "Эвервесс Кола", weight: "500 мл" },
                { id: 5, image: "/img/menu/drinks/5.png", alt: "Эвервесс Кола Вишня", badgeType: "", badgeText: "", name: "Эвервесс Кола Вишня", weight: "500 мл" },
                { id: 6, image: "/img/menu/drinks/6.png", alt: "Эвервесс Кола", badgeType: "", badgeText: "", name: "Эвервесс Кола", weight: "500 мл" }
                ]
            },
            {
                id: 'shakes',
                title: "Молочные коктейли",
                dishes: [
                { id: 1, image: "/img/menu/shakes/1.png", alt: "Малиновый шейк", badgeType: "", badgeText: "", name: "Малиновый шейк", weight: "400 мл" },
                { id: 2, image: "/img/menu/shakes/2.png", alt: "Шоколадный шейк", badgeType: "", badgeText: "", name: "Шоколадный шейк", weight: "400 мл" },
                { id: 3, image: "/img/menu/shakes/3.png", alt: "Шейк «Пломбир»", badgeType: "", badgeText: "", name: "Шейк «Пломбир»", weight: "400 мл" }
                ]
            },
            {
                id: 'desserts',
                title: "Десерты",
                dishes: [
                { id: 1, image: "/img/menu/desserts/1.png", alt: "Пирожок Черника", badgeType: "New", badgeText: "New", name: "Пирожок Черника", weight: "73 г" },
                { id: 2, image: "/img/menu/desserts/2.png", alt: "Шоколадный Брауни", badgeType: "Bestseller", badgeText: "Bestseller", name: "Шоколадный Брауни", weight: "80 г" },
                { id: 3, image: "/img/menu/desserts/3.png", alt: "Пирожок с вишней", badgeType: "", badgeText: "", name: "Пирожок с вишней", weight: "73 г" },
                { id: 4, image: "/img/menu/desserts/4.png", alt: "M&Ms Рожок", badgeType: "Bestseller", badgeText: "Bestseller", name: "M&Ms Рожок", weight: "" },
                { id: 5, image: "/img/menu/desserts/5.png", alt: "MM's Айс Твист Шоколадный", badgeType: "", badgeText: "", name: "MM's Айс Твист Шоколадный", weight: "" },
                { id: 6, image: "/img/menu/desserts/6.png", alt: "MM's Айс Твист Клубничный", badgeType: "", badgeText: "", name: "MM's Айс Твист Клубничный", weight: "" },
                { id: 7, image: "/img/menu/desserts/7.png", alt: "Шоколадный шейк", badgeType: "", badgeText: "", name: "Шоколадный шейк", weight: "400 мл" },
                { id: 8, image: "/img/menu/desserts/8.png", alt: "Малиновый шейк", badgeType: "", badgeText: "", name: "Малиновый шейк", weight: "400 мл" }
                ]
            },
            {
                id: 'kids',
                title: "Дети любят",
                dishes: [
                { id: 1, image: "/img/menu/kids/1.png", alt: "Креветки", badgeType: "", badgeText: "", name: "Креветки", weight: "" },
                { id: 2, image: "/img/menu/kids/2.png", alt: "Кинг Фри большой", badgeType: "", badgeText: "", name: "Кинг Фри большой", weight: "300 г" },
                { id: 3, image: "/img/menu/kids/3.png", alt: "Пирожок с вишней", badgeType: "", badgeText: "", name: "Пирожок с вишней", weight: "73 г" },
                { id: 4, image: "/img/menu/kids/4.png", alt: "M&Ms Рожок", badgeType: "Bestseller", badgeText: "Bestseller", name: "M&Ms Рожок", weight: "" },
                { id: 5, image: "/img/menu/kids/5.png", alt: "MM's Айс Твист Клубничный", badgeType: "", badgeText: "", name: "MM's Айс Твист Клубничный", weight: "" },
                { id: 6, image: "/img/menu/kids/6.png", alt: "Чизбургер", badgeType: "Spicy", badgeText: "Spicy", name: "Чизбургер", weight: "190 г" },
                { id: 7, image: "/img/menu/kids/7.png", alt: "L.O.L. Бокс", badgeType: "", badgeText: "", name: "L.O.L. Бокс", weight: "" }
                ]
            },
            {
                id: 'salads',
                title: "Салаты",
                dishes: [
                { id: 1, image: "/img/menu/salads/1.png", alt: "Салат Цезарь с креветками", badgeType: "", badgeText: "", name: "Салат Цезарь с креветками", weight: "185 г" },
                { id: 2, image: "/img/menu/salads/2.png", alt: "Салат Цезарь", badgeType: "", badgeText: "", name: "Салат Цезарь", weight: "185 г" }
                ]
            },
            {
                id: 'extras',
                title: "Дополнительно",
                dishes: [
                { id: 1, image: "/img/menu/extras/1.png", alt: "Перчатки", badgeType: "", badgeText: "", name: "Перчатки", weight: "" },
                { id: 2, image: "/img/menu/extras/2.png", alt: "Шоппер", badgeType: "", badgeText: "", name: "Шоппер", weight: "" },
                { id: 3, image: "/img/menu/extras/3.png", alt: "Влажная салфетка", badgeType: "", badgeText: "", name: "Влажная салфетка", weight: "" }
                ]
            }
            ]
        };
    },

    computed: {
        currentMenu() {
            return this.menus.find(menu => menu.id === this.currentMenuId);
        }
    },

    methods: {
        onChangeMenu(id) {
            this.currentMenuId = id;
        }
    }
};
</script>

<template>
    <div class="content">
        <div class="container">
            <div class="contentWrapper">
                <SidebarMain @change="onChangeMenu" />
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
                            <h1 class="productsTitle">{{ currentMenu.title }}</h1>
                            <div class="productsGrid">
                                <Dish
                                    v-for="dish in currentMenu.dishes"
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
    </div>
</template>

<style src="./main.css" scoped>
</style>