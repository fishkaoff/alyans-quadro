<template>
  <section class="doc">
    <div class="doc__container">
      <h1>Согласие на обработку персональных данных</h1>

      <p>
        Я, оставляя заявку на сайте <strong>alquad.ru</strong>, действуя
        свободно, своей волей и в своем интересе, даю согласие
        <strong>ООО "Альянс-Квадро"</strong>
        на обработку моих персональных данных.
      </p>

      <h2>Перечень персональных данных</h2>
      <ul>
        <li>Имя</li>
        <li>Номер телефона</li>
        <li>Электронная почта</li>
      </ul>

      <h2>Цели обработки</h2>
      <ul>
        <li>Обработка заявки</li>
        <li>Связь со мной по телефону</li>
        <li>Консультация по услугам</li>
        <li>Подготовка договора</li>
      </ul>

      <h2>Действия с данными</h2>
      <p>
        Сбор, запись, систематизация, хранение, использование, передача
        сотрудникам компании, в том числе через мессенджер Telegram,
        блокирование и удаление.
      </p>

      <h2>Срок действия согласия</h2>
      <p>
        Согласие действует до момента его отзыва путем направления уведомления
        на e-mail: alyans219@mail.ru.
      </p>

      <h2>Отзыв согласия</h2>
      <p>Я уведомлен(а), что могу отозвать согласие в любой момент.</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.doc {
  @include mixins.text-base(22px);
  line-height: 1.3em;
  margin-top: 150px;
  padding-bottom: 100px;

  .doc__container {
    @include mixins.container;

    h1 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    h2 {
      margin-top: 28px;
      font-size: 20px;
    }

    p,
    li {
      font-size: 16px;
      color: #333;
    }

    ul {
      padding-left: 20px;
    }
  }
}
</style>
