<template>
  <div class="start-card">
    <div class="text">
      <h1 class="title">{{ category.title }}</h1>
      <p class="description">{{ category.description }}</p>

      <div class="btns">
        <app-button class="btn" @click="scrollToBlock('categories')"
          >Подробнее</app-button
        >
        <app-button class="btn" @click="$router.push({ name: 'Catalog' })"
          >Каталог</app-button
        >
      </div>

      <h2 class="price">
        От <span>{{ category.startPrice }} ₽</span>
      </h2>
    </div>
    <div class="image">
      <img :src="category.img" alt="Мототехника" class="atv" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/shared/ui/AppButton.vue";
import { scrollToBlock } from "@/shared/lib/scroll";
import type { Category } from "@/shared/types/types";
defineProps<{
  category: Category;
}>();
</script>

<style scoped lang="scss">
.start-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;

  .text {
    @include mixins.text-base;
    flex: 1;
    margin-top: 100px;
    min-width: 500px;

    @media screen and (max-width: 968px) {
      margin-top: 50px;
    }
    @media screen and (max-width: 500px) {
      min-width: 200px;
    }

    .title {
      font-size: 36px;
      font-weight: 800;
    }

    .description {
      color: variables.$color-fg;
      font-size: 22px;
      font-weight: 500;
      line-height: 1.4em;

      padding-top: 40px;
    }

    .btns {
      padding-top: 40px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;

      .btn {
        flex: 1;
      }
    }

    .price {
      font-size: 22px;
      padding-top: 20px;
      color: variables.$color-fg;

      span {
        color: #000;
        font-weight: 800;
      }
    }
  }

  .image {
    flex: 1;
    min-width: 500px;
    max-width: 700px;

    @media screen and (max-width: 500px) {
      min-width: 200px;
    }

    .atv {
      width: 100%;
      height: auto;
    }
  }
}
</style>
