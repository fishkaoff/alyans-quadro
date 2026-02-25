<template>
  <div class="popular-models-list">
    <div class="cards">
      <model-card
        v-for="product in productsStore.atvs.slice(0, 4)"
        :model="product"
        :key="product.id"
        class="card"
      />
    </div>

    <button class="catalog-btn">
      <p class="text">Смотреть каталог</p>
      <img :src="ArrowIcon" alt="дальше" class="icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import ModelCard from "./ModelCard.vue";
import { useProductsStore } from "@/shared/stores/products";
import ArrowIcon from "@/assets/images/arrow-right-long.svg";

const productsStore = useProductsStore();
</script>

<style scoped lang="scss">
.popular-models-list {
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;

    .card {
      flex: 1;
      min-width: 300px;
      @media screen and (max-width: 300px) {
        min-width: 100%;
      }
    }
  }

  .catalog-btn {
    background-color: variables.$color-accent-dark;
    padding: 20px 30px;
    border-radius: 10px;
    outline: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px auto;
    cursor: pointer;
    transition: all 0.5s;

    .text {
      @include mixins.text-base(18px);
      font-weight: 600;
      color: #fff;
    }

    .icon {
      width: 30px;
      height: auto;
    }
  }

  .catalog-btn:hover {
    background-color: variables.$color-accent-dark-hover;
  }
}
</style>
