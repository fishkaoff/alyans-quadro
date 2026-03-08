<template>
  <div class="cols">
    <div class="image-container">
      <img :src="product?.images[0]" alt="Фото" class="image" />
    </div>

    <div class="text-container">
      <h1 class="title">{{ product?.brand }}</h1>
      <p class="description">
        Спортивный квадроцикл с агрессивным характером. Идеален для тех, кто
        ищет максимум адреналина на любой трассе. Лёгкая рама и мощный двигатель
        обеспечивают молниеносный отклик.
      </p>

      <div class="short-specs">
        <div class="spec">
          <h3 class="num">{{ product?.enginePower }} л.с</h3>
          <h3 class="text">Мощность</h3>
        </div>
        <div class="spec">
          <h3 class="num">{{ product?.engineVolume }} куб.</h3>
          <h3 class="text">Объем</h3>
        </div>
        <div class="spec">
          <h3 class="num">{{ product?.fuelType }}</h3>
          <h3 class="text">Топливо</h3>
        </div>
      </div>

      <div class="bottom">
        <h2 class="price">{{ product?.price }} ₽</h2>
        <app-button class="btn">Оставить заявку</app-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/shared/types/products/products";
import AppButton from "@/shared/ui/AppButton.vue";

defineProps<{
  product: Product | undefined;
}>();
</script>

<style scoped lang="scss">
.cols {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;

  .image-container {
    flex: 1;
    min-width: 400px;
    max-width: 700px;

    .image {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 400px) {
      min-width: 100%;
    }
  }

  .text-container {
    flex: 1;
    min-width: 300px;

    @include mixins.text-base(18px);

    .title {
      font-size: 60px;
      font-weight: 600;
    }

    .description {
      color: variables.$color-fg;
      line-height: 1.5em;
      margin-top: 40px;
    }

    .short-specs {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 40px;

      padding-top: 20px;
      padding-bottom: 20px;

      border-bottom: 1px solid rgb(207, 207, 207);
      border-top: 1px solid rgb(207, 207, 207);

      .spec {
        flex: 1;
        max-width: 100px;

        @include mixins.text-base(18px);

        .num {
          font-weight: 600;
        }

        .text {
          color: variables.$color-fg;
          padding-top: 5px;
        }
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-top: 40px;

      .price {
        flex: 1;
        min-width: 200px;

        font-size: 26px;
        font-weight: 600;
      }
    }

    @media screen and (max-width: 300px) {
      min-width: 100%;
    }
  }
}
</style>
