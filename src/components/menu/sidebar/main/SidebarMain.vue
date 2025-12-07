<script>
import CategoryItem from '../category/CategoryItem.vue';

export default {
    name: 'SidebarMain',
    components: {
        CategoryItem
    },
    data() {
        return {
            categories: [
                { id: 'popular', name: 'Популярное', icon: '/img/nav/1.png', isActive: true, isPopular: true },
                { id: 'new', name: 'Новинки', icon: '/img/nav/2.png' },
                { id: 'combo', name: 'Кинг Комбо', icon: '/img/nav/3.png' },
                { id: 'burgers', name: 'Бургеры', icon: '/img/nav/4.png' },
                { id: 'takeaway', name: 'Удобно с собой', icon: '/img/nav/5.png' },
                { id: 'shrimp', name: 'Креветки', icon: '/img/nav/6.png' },
                { id: 'rolls', name: 'Роллы', icon: '/img/nav/7.png' },
                { id: 'sauces', name: 'Соусы', icon: '/img/nav/8.png' },
                { id: 'fries', name: 'Картофель', icon: '/img/nav/9.png' },
                { id: 'snacks', name: 'Закуски', icon: '/img/nav/10.png' },
                { id: 'drinks', name: 'Напитки', icon: '/img/nav/11.png' },
                { id: 'shakes', name: 'Молочные коктейли', icon: '/img/nav/12.png' },
                { id: 'desserts', name: 'Десерты', icon: '/img/nav/13.png' },
                { id: 'kids', name: 'Дети любят', icon: '/img/nav/14.png' },
                { id: 'salads', name: 'Салаты', icon: '/img/nav/15.png' },
                { id: 'extras', name: 'Дополнительно', icon: '/img/nav/16.png' }
            ]
        };
    },
    methods: {
        handleCategoryClick(categoryId) {
            this.categories.forEach(category => {
                category.isActive = category.id === categoryId;
            });

            this.$emit('change', categoryId);
        }
    }
};
</script>

<template>
    <aside class="sidebar">
        <nav class="categoryNav" aria-label="Категории меню">
            <ul class="categoryList">
                <CategoryItem
                    v-for="category in categories"
                    :key="category.id"
                    :category="category"
                    @category-click="handleCategoryClick"
                />
            </ul>
        </nav>
    </aside>
</template>

<style src="./sidebar-main.css" scoped>
</style>

