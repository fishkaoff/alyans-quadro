<template>
  <div class="catalog-filters">
    <div class="content">
      <h1 class="title">Фильтры</h1>

      <div class="filter-group">
        <h2 class="filter-name">Категория</h2>
        <div class="btns">
          <div
            v-for="category in categoriesStore.categories"
            :class="
              activeCategory == category.id
                ? 'category-btn active'
                : 'category-btn'
            "
            :key="category.title"
            @click="updateActiveCategory(category.id)"
          >
            {{ category.title }}
          </div>
        </div>
      </div>

      <div class="filter-group">
        <h2 class="filter-name">Объем двигателя</h2>
      </div>

      <div class="filter-group">
        <h2 class="filter-name">Мощность (л.c)</h2>
      </div>

      <div class="filter-group">
        <h2 class="filter-name">Максимальная скорость (км/ч)</h2>
      </div>

      <div class="filter-group">
        <h2 class="filter-name">Цена</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useCategoriesStore } from "../../shared/stores/categories";

const activeCategory = ref("");
const categoriesStore = useCategoriesStore();

const emit = defineEmits(["update:category"]);
const updateActiveCategory = (id: string) => {
  if (activeCategory.value == id) {
    activeCategory.value = "";
  } else {
    activeCategory.value = id;
  }
};

// emit if category changed
watch(activeCategory, () => {
  emit("update:category", activeCategory.value);
});
</script>

<style scoped lang="scss">
.catalog-filters {
  border-radius: 10px;
  background-color: variables.$color-card-bg;

  .content {
    padding: 20px;
    @include mixins.text-base(20px);

    .title {
      font-weight: 700;
      text-transform: uppercase;
    }

    .filter-group {
      padding-top: 30px;

      .filter-name {
        color: variables.$color-fg;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 600;
      }

      .btns {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 20px;

        .category-btn {
          flex: 1;
          min-width: 100px;
          max-width: 120px;

          font-size: 14px;
          padding: 10px;
          border-radius: 10px;

          background-color: variables.$color-bg;
          transition: all 0.7s;
          cursor: pointer;

          &.active {
            background-color: variables.$color-accent;
            color: #fff;
          }
        }

        .category-btn:hover {
          background-color: variables.$color-accent;
          color: #fff;
        }
      }
    }
  }
}
</style>
