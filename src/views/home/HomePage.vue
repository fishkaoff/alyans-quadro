<template>
  <div class="home">
    <div class="start">
      <div class="carousel-controls">
        <div class="home-prev-el">
          <img :src="ArrowLeft" alt="Предыдущий" class="icon" />
        </div>
        <div class="home-next-el">
          <img :src="ArrowRight" alt="Следующий" class="icon" />
        </div>
      </div>

      <app-carousel>
        <swiper-slide v-for="category in categories" :key="category.id">
          <start-card :category="category" />
        </swiper-slide>
      </app-carousel>
    </div>

    <wide-range id="categories" />
    <trust-in-us class="section" />

    <div class="model-line section">
      <section-title>
        <template #sub-title>Модельный ряд</template>
        <template #title>Найди то, что подходит тебе</template>
      </section-title>

      <popular-models-list class="models-list" />
    </div>

    <stats-block />

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
  </div>
</template>

<script setup lang="ts">
import AppCarousel from "@/components/shared/AppCarousel.vue";
import WideRange from "../../components/wide-range/WideRange.vue";
import StartCard from "./StartCard.vue";
import TrustInUs from "@/components/trust-in-us/TrustInUs.vue";
import SectionTitle from "@/components/shared/SectionTitle.vue";
import PopularModelsList from "@/components/popular-models-list/PopularModelsList.vue";
import StatsBlock from "./StatsBlock.vue";
import AppButton from "@/components/shared/AppButton.vue";
import { SwiperSlide } from "swiper/vue";
import Atv01 from "@/assets/images/atv-01.png";
import Atv02 from "@/assets/images/atv-02.png";
import Atv03 from "@/assets/images/atv-03.png";
import Atv04 from "@/assets/images/atv-04.png";

import ArrowRight from "@/assets/images/arrow-right.svg";
import ArrowLeft from "@/assets/images/arrow-left.svg";
import type { Category } from "@/shared/types/types";

const categories: Category[] = [
  {
    id: "1",
    title: "Квадроциклы",
    description:
      "Универсальная техника для бездорожья, отдыха и активной езды. Подходят как для начинающих, так и для опытных райдеров — для поездок по лесу, пересечённой местности и сложным трассам.",
    img: Atv01,
    startPrice: "200 000",
  },
  {
    id: "2",
    title: "Эндуро и питбайки",
    description:
      "Компактные и юркие эндуро и питбайки для самых узких троп и технически сложных маршрутов. Минимальный вес и максимальная маневренность — ваш билет в дикую природу.",
    img: Atv02,
    startPrice: "130 000",
  },
  {
    id: "3",
    title: "Грузовая техника",
    description:
      "Практичная техника для хозяйства и бизнеса. Помогают перевозить грузы, работать на ферме, стройке или в сервисе — надёжно, экономично и без лишних затрат.",
    img: Atv04,
    startPrice: "250 000",
  },
  {
    id: "4",
    title: "Детские квадроциклы",
    description:
      "Надёжные и безопасные модели для детей и подростков. Простое управление, ограничители скорости и устойчивая конструкция — идеальный вариант для первых поездок и обучения.",
    img: Atv03,
    startPrice: "60 000",
  },
];
</script>

<style scoped lang="scss">
.home {
  margin-top: 75px;

  .start {
    @include mixins.container;
    .carousel-controls {
      padding-top: 30px;
      display: flex;
      gap: 10px;

      .home-prev-el,
      .home-next-el {
        display: flex;
        align-items: center;
        padding: 10px;

        border-radius: 50%;
        border: 1px solid variables.$color-fg;

        .icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .model-line {
    @include mixins.container;

    .models-list {
      margin-top: 30px;
    }
  }

  .test-drive {
    @include mixins.container;
    @include mixins.text-base(18px);
    text-align: center;
    padding-bottom: 75px;

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

  .section {
    margin-top: 75px;
  }
}
</style>
