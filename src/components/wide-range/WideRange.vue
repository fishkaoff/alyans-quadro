<template>
  <div class="wide-range-cards">
    <section-title>
      <template #sub-title>Наш магазин</template>
      <template #title>От питбайков до грузовых квадроциклов</template>
    </section-title>

    <div class="cards">
      <category-card
        class="card"
        :img="categories[0]?.img"
        :title="categories[0]?.title"
        :text="categories[0]?.text"
      />
      <category-card
        class="card"
        :img="categories[1]?.img"
        :title="categories[1]?.title"
        :text="categories[1]?.text"
      />
      <category-card
        class="card"
        :img="categories[2]?.img"
        :title="categories[2]?.title"
        :text="categories[2]?.text"
      />
      <category-card
        class="card"
        :img="categories[3]?.img"
        :title="categories[3]?.title"
        :text="categories[3]?.text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pitbike from "@/assets/images/range-pitbike-01.png";
import ChildAtv from "@/assets/images/range-atv-01.png";
import AdultAtv from "@/assets/images/range-atv-02.png";
import HeavyAtv from "@/assets/images/range-atv-03.png";
import CategoryCard from "./CategoryCard.vue";
import SectionTitle from "../shared/SectionTitle.vue";

const categories = [
  {
    img: Pitbike,
    title: "Питбайки и эндуро",
    text: "Лёгкие и манёвренные мотоциклы для бездорожья и активной езды. Отлично подойдут для обучения, покатушек и уверенного движения по сложным трассам.",
  },
  {
    img: ChildAtv,
    title: "Детские квадроциклы",
    text: "Безопасные и простые в управлении модели для детей и подростков. Надёжная техника для первых навыков и весёлых поездок под контролем взрослых.",
  },
  {
    img: AdultAtv,
    title: "Взрослые квадроциклы",
    text: "Мощные и проходимые модели для отдыха, путешествий, охоты и работы. Уверенно справляются с любым бездорожьем и нагрузками.",
  },
  {
    img: HeavyAtv,
    title: "Грузовая техника",
    text: "Практичные решения для хозяйства и бизнеса. Перевозка грузов, работа на участке, ферме или стройке — надёжно и без лишних затрат.",
  },
];
</script>

<style scoped lang="scss">
.wide-range-cards {
  @include mixins.container;

  .cards {
    margin-top: 40px;

    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 40px;

    .card {
      flex: 1;
      min-width: 500px;

      @media screen and (max-width: 500px) {
        min-width: 100%;
      }
    }
  }
}
</style>
