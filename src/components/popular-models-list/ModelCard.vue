<template>
  <div class="model-card">
    <div class="image-container">
      <img :src="model.images[0]" alt="Фото" class="image" />
    </div>
    <div class="content">
      <p class="slogan">{{ model.sku }}</p>
      <h1 class="name">{{ model.brand }}</h1>
      <p class="spec">
        {{ model.enginePower }} л.с • {{ model.engineVolume }} cc •
        {{ model.year }} г.
      </p>

      <div class="bottom">
        <div class="row">
          <h3 class="price">{{ model.price }} ₽</h3>
          <router-link :to="{ name: 'Home' }" class="full-btn"
            >Подробнее</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/shared/types/products/products";

defineProps<{
  model: Product;
}>();
</script>

<style scoped lang="scss">
.model-card {
  background-color: variables.$color-card-bg;
  border-radius: 10px;

  .image-container {
    width: 100%;

    .image {
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: auto;
    }
  }

  .content {
    padding: 20px;
    @include mixins.text-base;

    .slogan {
      font-size: 14px;
      color: variables.$color-accent;
      text-transform: uppercase;
      font-weight: 600;
    }

    .name {
      font-size: 22px;
      font-weight: 800;
      padding-top: 20px;
    }

    .spec {
      font-size: 14px;
      color: variables.$color-fg;
      padding-top: 10px;
    }

    .bottom {
      margin-top: 20px;

      .row {
        padding-top: 20px;
        border-top: 1px solid rgb(207, 207, 207);

        display: flex;
        justify-content: space-between;
        align-items: center;

        .price {
          font-size: 18px;
          font-weight: 600;
        }

        .full-btn {
          font-size: 16px;
          color: #000;

          transition: all 0.5s;
        }

        .full-btn:hover {
          color: variables.$color-accent;
        }
      }
    }
  }
}
</style>
