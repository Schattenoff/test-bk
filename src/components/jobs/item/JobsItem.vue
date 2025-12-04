<script>
export default {
    name: "JobsItem",

    props: ['title', 'text'],

    data() {
        return {
            isOpened: false,
        }
    },

    methods: {
        onToggleJobsItem() {
            this.isOpened = !this.isOpened;
        }
    },

    directives: {
        spoiler: {
            mounted(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            beforeUnmount(el) {
                el.style.height = el.scrollHeight + 'px';
            }
        },
    }
}
</script>

<template>
    <div class="vJobsItem">
        <div class="vJobsItem__wrapper">
            {{title}}
            <div class="vJobsItem__button"
                 :class="{'vJobsItem__button--minus': isOpened}"
                 @click="onToggleJobsItem"></div>
        </div>
        <transition name="spoiler">
            <div v-if="isOpened" class="vJobsItem__text" v-spoiler>
                <div class="vJobsItem__textHtml" v-html="text"></div>
                <a href="#form" class="vJobsItem__btn">Отклинуться</a>
            </div>
        </transition>
    </div>
</template>

<style src="./jobs-item.css">
</style>