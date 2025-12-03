<script>
import Warning from "@/components/warning/Warning.vue";

export default {
    name: 'App',

    components: {
        Warning
    },

    provide() {
        return {
            openWarning: this.onOpenWarning,
        }
    },

    data() {
        return {
            isOpenWarning: false,
        }
    },

    methods: {
        onOpenWarning() {
            this.isOpenWarning = true;
        },

        onCloseWarning() {
            this.isOpenWarning = false;
        }
    }

};
</script>

<template>
    <RouterView />
    <Warning :isOpen="isOpenWarning"
             @close="onCloseWarning"></Warning>
</template>

<style>
@import '../common/fonts/flame/fonts.css';
@import '../common/style/reset.css';
@import '../common/style/app.css';
</style>
