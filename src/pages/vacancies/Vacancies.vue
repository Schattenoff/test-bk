<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default  {
    name: "Vacancies",

    components: {
        Header,
        Footer
    }

}
</script>

<template>
    <Header />

    <section class="hero-section">
        <h1>Карьера с Burger King</h1>
        <p>Стань частью команды, где идеи оживают</p>
        <button class="cta-button">Заполнить анкету</button>
        <div class="hero-image">
        </div>
    </section>

    <section class="benefits-section">
        <h2>Преимущества работы</h2>
        <div class="benefits-grid">
            <div class="benefit-item">
                <h3>Стабильный доход</h3>
                <p>Выплата зарплаты на карту, премирование</p>
            </div>
            <div class="benefit-item">
                <h3>Работа рядом с домом</h3>
                <p>Широкие возможности выбора расположения</p>
            </div>
            <div class="benefit-item">
                <h3>Гибкий график</h3>
                <p>Возможность совмещать с учебой и работой</p>
            </div>
            <div class="benefit-item">
                <h3>Карьерный рост</h3>
                <p>Карьера, на которую Ты можешь влиять</p>
            </div>
        </div>
    </section>

    <section class="vacancies-section">
        <h2>Нам нужны в команду</h2>
        <div class="vacancy-list">
            <details class="vacancy-item">
                <summary>Работник ресторана</summary>
            </details>
            <details class="vacancy-item">
                <summary>Работник ресторана (стажёр)</summary>
            </details>
            <details class="vacancy-item">
                <summary>Тренер-инструктор</summary>
            </details>
            <details class="vacancy-item">
                <summary>Менеджер ресторана</summary>
            </details>
        </div>
    </section>

    <section class="application-form-section">
        <h2>Заполни анкету</h2>
        <form action="#" method="POST" class="application-form">
            <div class="form-group">
                <label for="position">Желаемая должность</label>
                <select id="position" name="position" required>
                </select>
            </div>
            <div class="form-group">
                <label for="name">Имя</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="age">Возраст</label>
                <input type="number" id="age" name="age" required>
            </div>
            <div class="form-group">
                <label for="phone">Телефон</label>
                <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group checkbox-group">
                <input type="checkbox" id="agreement" name="agreement" required>
                <label for="agreement">Даю своё согласие на обработку персональных данных</label>
            </div>
            <button type="submit" class="submit-button">Отправить</button>
        </form>
    </section>

    <Footer />
</template>

<style src="./vacancies.css" scoped>
</style>