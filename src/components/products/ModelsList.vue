<template>
  <div class="popular-models-list">
    <div class="cards">
      <h1 class="no-products" v-if="products.length <= 0">
        К сожалению по заданным фильтрам товар не найден
      </h1>
      <model-card
        v-else
        v-for="product in products"
        :model="product"
        :key="product.id"
        class="card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ModelCard from "./ModelCard.vue";
import { useProductsStore } from "@/shared/stores/products";
import { computed } from "vue";

const props = defineProps<{
  category?: string;
}>();

const productsStore = useProductsStore();

const allProducts = computed(() => [
  ...productsStore.atvs,
  ...productsStore.pitbikes,
]);

const products = computed(() => {
  if (!props.category) return allProducts.value;

  return allProducts.value.filter(
    (product) => product.categoryId === props.category,
  );
});
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

    .no-products {
      @include mixins.text-base(30px);
      text-align: center;
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
