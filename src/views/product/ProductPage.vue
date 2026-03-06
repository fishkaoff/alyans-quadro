<template>
  <div class="product-page">
    <div class="cols">
      <div class="image-container">
        <img :src="product?.images[0]" alt="Фото" class="image" />
      </div>

      <div class="text-container">
        <h1 class="title">{{ product?.brand }}</h1>
        <p class="description">
          Спортивный квадроцикл с агрессивным характером. Идеален для тех, кто
          ищет максимум адреналина на любой трассе. Лёгкая рама и мощный
          двигатель обеспечивают молниеносный отклик.
        </p>

        <div class="specs">
            
        </div>

        <div class="bottom">
          <h2 class="price">{{ product?.price }} ₽</h2>
          <app-button class="btn">Связаться</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/shared/stores/products";
import { useRoute } from "vue-router";
import AppButton from "@/shared/ui/AppButton.vue";

const id = useRoute().params.id;
const productsStore = useProductsStore();
const allProducts = [...productsStore.atvs, ...productsStore.pitbikes];

const product = allProducts.find((product) => product.id == id);
</script>

<style scoped lang="scss">
.product-page {
  @include mixins.container;
  margin-top: 130px;
  padding-bottom: 30px;

  .cols {
    display: flex;
    justify-content: space-between;
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
}
</style>
