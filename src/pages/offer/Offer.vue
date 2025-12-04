<script>
import Header from "@/components/header/main/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
    name: 'Offer',

    components: {
        Header,
        Footer
    }
}
</script>

<template>
    <Header />

    <section class="offer">
        <div class="container">
            <h1 class="offer__title">Публичная оферта</h1>
            <div class="offer__content">
                <p class="offer__text">Здесь будет размещена публичная оферта.</p>
            </div>
        </div>
    </section>

    <Footer />
</template>

<style src="./offer.css" scoped>
</style>

