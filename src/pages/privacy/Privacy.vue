<script>
import Header from "@/components/header/main/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
    name: 'Privacy',

    components: {
        Header,
        Footer
    }
}
</script>

<template>
    <Header />

    <section class="privacy">
        <div class="container">
            <h1 class="privacy__title">Политика конфиденциальности</h1>
            <div class="privacy__content">
                <p class="privacy__text">Здесь будет размещена политика конфиденциальности.</p>
            </div>
        </div>
    </section>

    <Footer />
</template>

<style src="./privacy.css" scoped>
</style>

