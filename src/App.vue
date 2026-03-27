<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/shared/ui/AppHeader.vue";
import AppFooter from "@/shared/ui/AppFooter.vue";
import { onBeforeMount } from "vue";
import { useProductsStore } from "./shared/stores/products";
import { useCategoriesStore } from "./shared/stores/categories";
import CookiesBanner from "./components/CookiesBanner/CookiesBanner.vue";

const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();

onBeforeMount(async () => {
  await productsStore.loadProducts();
  await categoriesStore.loadCategories();
});
</script>

<template>
  <app-header></app-header>
  <RouterView />
  <app-footer></app-footer>
  <cookies-banner></cookies-banner>
</template>

<style scoped></style>
