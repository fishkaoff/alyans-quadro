<template>
  <div class="about">
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
      <app-button class="btn" @click="$router.push({ name: 'ContactsPage' })"
        >Записаться</app-button
      >
      <button class="btn bordered">+7 (927) 936-66-26</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TrustInUs from "@/components/trust-in-us/TrustInUs.vue";
import StatsBlock from "../home/StatsBlock.vue";
import AppButton from "@/shared/ui/AppButton.vue";
</script>

<style scoped lang="scss">
.about {
  @include mixins.container;
  @include mixins.text-base;
  margin-top: 150px;

  .sub-title {
    font-size: 18px;
    font-weight: 600;

    text-transform: uppercase;
    color: variables.$color-accent;
    text-align: center;
  }

  .title {
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    padding-top: 30px;
    text-align: center;
  }

  .description {
    font-size: 18px;
    text-align: center;
    color: variables.$color-fg;
    width: 600px;
    margin: 0 auto;
    padding-top: 30px;
    line-height: 1.5em;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
}

.section {
  margin-top: 30px;
}

.test-drive {
  @include mixins.container;
  @include mixins.text-base(18px);
  text-align: center;
  padding-bottom: 75px;
  margin-top: 75px;

  .question {
    color: variables.$color-accent;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    padding-top: 20px;
  }

  .desc {
    width: 470px;
    margin: 0 auto;
    color: variables.$color-fg;
    padding-top: 20px;
    line-height: 1.5em;

    @media screen and (max-width: 470px) {
      width: 100%;
    }
  }

  .btns {
    width: 600px;
    margin: 0 auto;

    display: flex;
    gap: 20px;
    padding-top: 20px;
    flex-wrap: wrap;

    @media screen and (max-width: 600px) {
      width: 100%;
    }

    .btn {
      flex: 1;
      min-width: 275px;

      &.bordered {
        outline: none;
        border: none;

        padding: 20px 40px;
        border: 1px solid variables.$color-fg;
        border-radius: 10px;
        background-color: transparent;

        color: #000;
        text-align: center;

        @include mixins.text-base(18px);
        cursor: pointer;
        transition: all 0.5s;
      }

      &.bordered:hover {
        background-color: variables.$color-accent-dark-hover;
      }
    }
  }
}
</style>
