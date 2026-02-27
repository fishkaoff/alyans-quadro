<template>
  <div class="catalog">
    <section-title>
      <template #sub-title>Каталог</template>
      <template #title>Наш модельный ряд</template>
    </section-title>

    <div class="content">
      <catalog-filters
        class="filters"
        @update:category="(updCategory: string) => (category = updCategory)"
      />

      <models-list class="models-list" :category="category" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/shared/ui/SectionTitle.vue";
import CatalogFilters from "@/components/products/CatalogFilters.vue";
import ModelsList from "@/components/products/ModelsList.vue";
import { ref } from "vue";

const category = ref("");
</script>

<style scoped lang="scss">
.catalog {
  @include mixins.container;
  margin-top: 120px;
  padding-bottom: 120px;

  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 40px;
    padding-top: 40px;

    .filters {
      flex: 1;
      height: 100%;

      max-width: 400px;
      min-width: 200px;

      @media screen and (max-width: 450px) {
        min-width: 100%;
      }
    }

    .models-list {
      flex: 1;
      min-width: 300px;

      @media screen and (max-width: 450px) {
        min-width: 100%;
      }
    }
  }
}
</style>
