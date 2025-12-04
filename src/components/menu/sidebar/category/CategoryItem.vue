<script>
export default {
    name: 'CategoryItem',
    props: {
        category: {
            type: Object,
            required: true
        }
    },
    computed: {
        id() {
            return this.category.id || '';
        },
        name() {
            return this.category.name || '';
        },
        imgUrl() {
            return this.category.icon || '';
        },
        isActive() {
            return this.category.isActive || false;
        },
        isPopular() {
            return this.category.isPopular || false;
        }
    },
    methods: {
        handleClick() {
            this.$emit('category-click', this.id);
        }
    }
};
</script>

<template>
    <li class="categoryItem">
        <div 
            :class="['categoryLink', { categoryLinkActive: isActive }]"
            @click="handleClick"
        >
            <span class="categoryIcon">
                <img 
                    :class="['categoryImage', { categoryImagePopular: isPopular }]" 
                    :src="imgUrl" 
                    alt="" 
                    aria-hidden="true" 
                />
            </span>
            <span :class="['categoryName', { categoryNameActive: isActive }]">{{ name }}</span>
        </div>
    </li>
</template>

<style src="./category-item.css" scoped>
</style>

