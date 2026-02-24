<template>
  <div class="title-wrapper">
    <h2 class="sub-title"><slot name="sub-title"></slot></h2>
    <h1 class="title"><slot name="title"></slot></h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title-wrapper {
  @include mixins.text-base;

  .sub-title {
    font-size: 18px;
    font-weight: 600;

    text-transform: uppercase;
    color: variables.$color-accent;
  }

  .title {
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase;
    padding-top: 10px;
  }
}
</style>
