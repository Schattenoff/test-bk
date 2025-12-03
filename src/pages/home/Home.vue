<script>
import Header from "@/components/header/Header.vue";
import Promos from "@/components/promos/Promos.vue";
import Menu from "@/components/menu/main/Main.vue";
import Footer from "@/components/footer/Footer.vue";
import Warning from "@/components/warning/Warning.vue"

export default {
    name: 'Home',

    components: {
        Header,
        Promos,
        Menu,
        Footer,
        Warning
    }
}
</script>

<template>
    <div class="mainWrapper">
        <Header />
        <Promos />
        <Menu />
        <Footer />
    </div>
</template>

<style src="./home.css">

</style>