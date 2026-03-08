<template>
  <div class="product-page">
    <short-specs :product="product" class="container" />

    <div class="specs">
      <div class="content">
        <h1 class="title">Характеристики</h1>

        <div class="cols">
          <div class="col">
            <div class="row">
              <p class="spec-name">Тип зажигания</p>
              <p class="spec-value">{{ product?.ignitionType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип охлаждения</p>
              <p class="spec-value">{{ product?.coolingType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Вес</p>
              <p class="spec-value">{{ product?.dryWeight }} кг</p>
            </div>
            <div class="row">
              <p class="spec-name">Топливная система</p>
              <p class="spec-value">{{ product?.fuelSystem }}</p>
            </div>
          </div>

          <div class="col">
            <div class="row">
              <p class="spec-name">Фара</p>
              <p class="spec-value">{{ product?.headlight }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип трансмиссии</p>
              <p class="spec-value">{{ product?.transmissionType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Тип стартера</p>
              <p class="spec-value">{{ product?.starterType }}</p>
            </div>
            <div class="row">
              <p class="spec-name">Объем бака</p>
              <p class="spec-value">{{ product?.fuelTankVolume }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/shared/stores/products";
import ShortSpecs from "./ShortSpecs.vue";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
const productsStore = useProductsStore();
const allProducts = [...productsStore.atvs, ...productsStore.pitbikes];

const product = allProducts.find((product) => product.id == id);
</script>

<style scoped lang="scss">
.product-page {
  margin-top: 130px;
  padding-bottom: 30px;

  .container {
    @include mixins.container;
  }

  .specs {
    margin-top: 60px;
    background-color: variables.$color-card-bg;

    .content {
      @include mixins.container;
      @include mixins.text-base(18px);

      padding-top: 40px;
      padding-bottom: 40px;

      .title {
        color: variables.$color-fg;
        text-transform: uppercase;
        font-weight: 600;
      }

      .cols {
        margin-top: 20px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 40px;

        .col {
          flex: 1;
          min-width: 250px;

          .row {
            padding: 20px;
            border-bottom: 1px solid rgb(207, 207, 207);

            display: flex;
            justify-content: space-between;

            .spec-name {
              color: variables.$color-fg;
              font-size: 16px;
            }

            .spec-value {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
