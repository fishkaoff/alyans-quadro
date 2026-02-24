<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/shared/AppHeader.vue";
import { onBeforeMount } from "vue";
import { useProductsStore } from "./shared/stores/products";

const productsStore = useProductsStore();

onBeforeMount(async () => {
  await productsStore.loadProducts();
});
</script>

<template>
  <app-header></app-header>
  <RouterView />
</template>

<style scoped></style>
