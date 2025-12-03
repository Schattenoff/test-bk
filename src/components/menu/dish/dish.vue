<script>
export default {
    name: 'Dish',
    
    props:  ['dish'],
    
    computed: {
        badgeClass() {
            // Динамический класс для бейджа
            switch (this.dish.badgeType) {
                case 'Spicy':
                    return 'dishBadgeSpicy';
                case 'Bestseller':
                    return 'dishBadgeBestseller';
                case 'New':
                    return 'dishBadgeNew';
                default:
                    return '';
            }
        },
    },
};
</script>

<template>
    <article class="dishCard">
        <div class="dishImageWrapper">
            <span v-if="dish.badgeText" :class="['dishBadge', badgeClass]">{{ dish.badgeText }}</span>
            <img class="dishImage" :src="dish.image" :alt="dish.alt" />
        </div>
        <h2 class="dishName">
            {{ dish.name }} <span class="dishWeight">{{ dish.weight }}</span>
        </h2>
        <div class="dishCardButtons">
            <button class="dishButton dishButtonDisabled" disabled aria-label="Скоро в продаже">
                <span class="dishButtonText">Скоро в продаже</span>
            </button>
        </div>
    </article>
</template>

<style src="./dish.css" scoped>

</style>