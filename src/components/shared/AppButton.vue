<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-button {
  @include mixins.text-base(18px);
  color: #fff;
  background-color: variables.$color-accent;
  text-align: center;

  width: 100%;
  padding: 15px;
  border-radius: 10px;

  cursor: pointer;
  transition: all 0.7s;

  outline: none;
  border: none;
}

.app-button:hover {
  background-color: variables.$color-accent-hover;
}
</style>
