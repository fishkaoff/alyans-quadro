<template>
  <div class="footer">
    <div class="content">
      <div class="company">
        <div class="logo" @click="$router.push({ name: 'Home' })">
          <div class="icon">АК</div>
          <h1 class="title">Альянс Квадро</h1>
        </div>

        <p class="text">
          Премиальные квадроциклы для настоящих приключений. С 2015 года мы
          помогаем покорять бездорожье.
        </p>
      </div>

      <div class="cols">
        <div class="col">
          <h2 class="col-title">Навигация</h2>
          <h3 class="col-item">
            <router-link :to="{ name: 'Home' }">Главная</router-link>
          </h3>
          <h3 class="col-item">
            <router-link :to="{ name: 'Catalog' }">Каталог</router-link>
          </h3>
          <h3 class="col-item">
            <router-link :to="{}">О компании</router-link>
          </h3>
          <h3 class="col-item"><router-link :to="{}">Контакты</router-link></h3>
        </div>
        <div class="col">
          <h2 class="col-title">Контакты</h2>
          <h3 class="col-item">+7 (927) 936-66-26</h3>
          <h3 class="col-item">alyans219@mail.ru</h3>
          <h3 class="col-item">Уфа, ул. Менделеева, 219</h3>
        </div>
        <div class="col">
          <h2 class="col-title">Режим работы</h2>
          <h3 class="col-item">Пн-Пт: 09:00-16:00</h3>
          <h3 class="col-item">Сб-Вс: выходной</h3>
        </div>
      </div>
    </div>
    <div class="service">
      <hr class="line" />

      <div class="wrapper">
        <p class="item">© 2026 Альянс Квадро. Все права защищены.</p>
        <div>
          <router-link class="item" :to="{}"
            >Политика конфиденциальности</router-link
          >
        </div>
        <div>
          <router-link class="item" :to="{}"
            >Пользовательское соглашение</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  background-color: variables.$color-accent-dark;

  .content {
    @include mixins.container;
    padding-top: 60px;
    padding-bottom: 60px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;

    .company {
      flex: 1;
      min-width: 400px;
      max-width: 500px;

      @media screen and (max-width: 400px) {
        min-width: 100%;
      }

      .logo {
        @include mixins.text-base(22px);
        display: flex;
        align-items: center;
        cursor: pointer;

        .title {
          font-weight: 800;
          padding-left: 10px;
          color: #fff;
        }

        .icon {
          padding: 10px;
          color: #fff;
          background-color: variables.$color-accent;
          border-radius: 10px;
        }
      }

      .text {
        @include mixins.text-base(18px);
        color: variables.$color-fg;
        padding-top: 20px;
        line-height: 1.5em;
      }
    }

    .cols {
      flex: 1;
      min-width: 860px;

      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 40px;

      @media screen and (max-width: 1370px) {
        justify-content: space-between;
      }

      @media screen and (max-width: 840px) {
        min-width: 100%;
      }

      .col {
        flex: 0 1;
        min-width: 200px;

        @include mixins.text-base(20px);

        .col-title {
          color: variables.$color-fg;
        }

        .col-item,
        .col-item > a {
          font-size: 16px;
          color: #b3b3b3;
          padding-top: 15px;
        }
      }
    }
  }

  .service {
    @include mixins.container;
    padding-bottom: 20px;

    .line {
      color: #404040;
    }

    .wrapper {
      @include mixins.text-base(16px);
      padding-top: 10px;

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;

      .item {
        color: variables.$color-fg;
      }
    }
  }
}
</style>
