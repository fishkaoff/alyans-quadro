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
  </div>
</template>

<script setup lang="ts">
import AppCarousel from "@/components/shared/AppCarousel.vue";
import WideRange from "../../components/wide-range/WideRange.vue";
import StartCard from "./StartCard.vue";
import TrustInUs from "@/components/trust-in-us/TrustInUs.vue";
import SectionTitle from "@/components/shared/SectionTitle.vue";
import PopularModelsList from "@/components/popular-models-list/PopularModelsList.vue";
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

  .section {
    margin-top: 75px;
  }
}
</style>
