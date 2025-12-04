<script>
export default {
    name: 'Form'
}
</script>

<template>
    <div id="form" class="vForm">
        <div class="vForm__wrapper">
            <h2 class="vForm__title">Заполни анкету</h2>
            <form class="vForm__body">
                <div class="vForm__group">
                    <label for="position" class="vForm__label">Желаемая должность</label>
                    <select id="position" name="position" required class="vForm__select">
                        <option value="intern_restaurant_worker">Работник ресторана-стажёр</option>
                        <option value="restaurant_worker">Работник ресторана</option>
                        <option value="coach_instructor">Тренер-инструктор</option>
                        <option value="restaurant_manager">Менеджер ресторана</option>
                    </select>
                </div>
                <div class="vForm__group">
                    <label for="name" class="vForm__label">Имя</label>
                    <input placeholder="Имя" type="text" id="name" name="name" required class="vForm__input">
                </div>
                <div class="vForm__group">
                    <label for="age" class="vForm__label">Возраст</label>
                    <input placeholder="Возраст" type="number" id="age" name="age" required class="vForm__input">
                </div>
                <div class="vForm__group">
                    <label for="phone" class="vForm__label">Телефон</label>
                    <input placeholder="Телефон" type="tel" id="phone" name="phone" required class="vForm__input">
                </div>
                <div class="vForm__group vForm__group--checkbox">
                    <input type="checkbox" id="agreement" name="agreement" required class="vForm__checkbox">
                    <label for="agreement" class="vForm__label--agreement">Даю своё согласие на обработку персональных данных</label>
                </div>
                <button type="button" class="vForm__submit-button">Отправить</button>
            </form>
        </div>

    </div>
</template>

<style src="./form.css" scoped>

</style>