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
        <h2 class="filter-name">Объем двигателя (минимум)</h2>
        <div class="selector">
          <range-slider
            :min="150"
            :max="300"
            v-model="engineVolume"
            class="range-slider"
          />
          <p class="value">{{ engineVolume }}</p>
        </div>
      </div>

      <div class="filter-group">
        <h2 class="filter-name">Мощность (л.c)</h2>
        <div class="selector">
          <range-slider :min="7" :max="50" v-model="hp" class="range-slider" />
          <p class="value">{{ hp }}</p>
        </div>
      </div>

      <div class="filter-group">
        <h2 class="filter-name">Максимальная скорость (км/ч)</h2>
        <div class="selector">
          <range-slider
            :min="30"
            :max="120"
            v-model="maxSpeed"
            class="range-slider"
          />
          <p class="value">{{ maxSpeed }}</p>
        </div>
      </div>

      <div class="filter-group">
        <h2 class="filter-name">Цена (максимум)</h2>
        <div class="selector">
          <range-slider
            :min="60000"
            :max="2000000"
            v-model="price"
            class="range-slider"
          />
          <p class="value">{{ price }} ₽</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useCategoriesStore } from "../../shared/stores/categories";
import RangeSlider from "@/shared/ui/RangeSlider.vue";

const categoriesStore = useCategoriesStore();

const activeCategory = ref("");
const engineVolume = ref(300);
const hp = ref(20);
const maxSpeed = ref(70);
const price = ref(170000);

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

      .selector {
        padding-top: 20px;

        display: flex;
        justify-content: space-between;
        gap: 30px;
        align-items: center;

        .range-slider {
          flex: 1;
          min-width: 200px;
        }

        .value {
          flex: 1;
          min-width: 30px;
          max-width: 100px;
          @include mixins.text-base(16px);
          font-weight: 600;
        }
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
