<script>
export default {
    name: 'RestaurantsDropdown',

    data() {
        return {
            isOpen: false,
        }
    },

    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
    },

    beforeUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    },

    methods: {
        onToggle() {
            this.isOpen = !this.isOpen;
        },

        onClose() {
            this.isOpen = false;
        },

        handleOutsideClick(event) {
            if (this.isOpen && !this.$el.contains(event.target)) {
                this.onClose();
            }
        }
    }
};
</script>

<template>
    <div class="restaurantsDropdown"
         :class="{'restaurantsDropdown--open': isOpen}"
         @click="onToggle"
         aria-label="Наши рестораны" 
         :aria-expanded="isOpen">
        <span class="restaurantsText">Наши рестораны</span>
        <svg class="restaurantsArrow" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#532013" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <div class="rDropdownContent" @click.stop>
            <h1 class="rDropdownContent__title">Ждём вас по следующим адресам!</h1>

            <div class="rDropdownContent__list">
                <p class="rDropdownContent__item">
                    Алпомиш: Ледовый дворец Alpomish, <br />Ташкент, Шайхантохурский район, проспект Беруни, 41а.
                </p>
                <p class="rDropdownContent__item">ТЦ Tashkent City Mall, Ташкент, Шайхантохурский район, улица Батыра Закирова, 7</p>
                <p class="rDropdownContent__item">Сеул Мун: Ташкент Чиланзарский район, улица Сеульская, D30</p>
            </div>
        </div>
    </div>
</template>

<style src="./restaurants-dropdown.css" scoped>

</style>

