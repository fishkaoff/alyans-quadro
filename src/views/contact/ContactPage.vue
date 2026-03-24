<template>
  <div class="contact">
    <h2 class="sub-title">О компании</h2>
    <h1 class="title">Мы создаём технику <br />для свободы</h1>
    <p class="description">
      С 2015 года Альянс Квадро помогает людям покорять бездорожье. Наша миссия
      — делать приключения доступными и безопасными.
    </p>
  </div>
  <trust-in-us class="section" />
  <StatsBlock />
  <div class="test-drive section">
    <h2 class="question">Готовы к приключениям?</h2>
    <h1 class="title">
      Запишитесь <br />
      на тест-драйв
    </h1>
    <p class="desc">
      Почувствуйте мощь и управляемость квадроциклов на нашей тестовой трассе.
      Бесплатно и без обязательств.
    </p>

    <div class="btns">
      <app-button class="btn">Записаться</app-button>
      <button class="btn bordered">+7 (927) 936-66-26</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.contact {
  @include mixins.container;
}
</style>
