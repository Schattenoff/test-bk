<script>
export default {
    name: 'Sidebar',
};
</script>

<template>
    <aside class="sidebar">
        <nav class="categoryNav" aria-label="Категории меню">
            <ul class="categoryList">
                <li class="categoryItem">
                    <a href="#popular" class="categoryLink categoryLinkActive">
                        <span class="categoryIcon">
                            <img class="categoryImage" src="/img/nav/1.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName categoryNameActive">Популярное</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#new" class="categoryLink">
                        <span class="categoryIcon">
                            <span class="categoryIconWrapper">
                                <img class="categoryImageNew" src="/img/nav/2.png" alt="" aria-hidden="true" />
                            </span>
                        </span>
                        <span class="categoryName">Новинки</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#combo" class="categoryLink">
                        <span class="categoryIcon">
                            <span class="categoryIconWrapper">
                                <img class="categoryImageCombo" src="/img/nav/3.png" alt="" aria-hidden="true" />
                            </span>
                        </span>
                        <span class="categoryName">Кинг Комбо</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#burgers" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageBurgers" src="/img/nav/4.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Бургеры</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#takeaway" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageTakeaway" src="/img/nav/5.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Удобно с собой</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#shrimp" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageShrimp" src="/img/nav/6.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Креветки</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#rolls" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageRolls" src="/img/nav/7.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Роллы</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#sauces" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageSauces" src="/img/nav/8.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Соусы</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#fries" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageFries" src="/img/nav/9.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Картофель</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#snacks" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageSnacks" src="/img/nav/10.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Закуски</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#drinks" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageDrinks" src="/img/nav/11.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Напитки</span>
                    </a>
                </li>
                <li class="categoryItem categoryItemWide">
                    <a href="#shakes" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageShakes" src="/img/nav/12.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Молочные коктейли</span>
                    </a>
                </li>
                <li class="categoryItem categoryItemWide">
                    <a href="#desserts" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageDesserts" src="/img/nav/13.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Десерты</span>
                    </a>
                </li>
                <li class="categoryItem categoryItemWide">
                    <a href="#kids" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageKids" src="/img/nav/14.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Дети любят</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#salads" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageSalads" src="/img/nav/15.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Салаты</span>
                    </a>
                </li>
                <li class="categoryItem">
                    <a href="#extras" class="categoryLink">
                        <span class="categoryIcon">
                            <img class="categoryImageExtras" src="/img/nav/16.png" alt="" aria-hidden="true" />
                        </span>
                        <span class="categoryName">Дополнительно</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style src="./sidebar.css" scoped>
</style>