<template>
  <div class="stats">
    <div class="content">
      <div class="item">
        <h1 class="num">5+</h1>
        <p class="text">Лет на рынке</p>
      </div>
      <div class="item">
        <h1 class="num">2500+</h1>
        <p class="text">Квадроциклов продано</p>
      </div>
      <div class="item">
        <h1 class="num">98%</h1>
        <p class="text">Довольных клиентов</p>
      </div>
      <div class="item">
        <h1 class="num">50+</h1>
        <p class="text">Моделей в каталоге</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.stats {
  background-color: variables.$color-accent-dark;

  .content {
    @include mixins.container;
    padding-top: 50px;
    padding-bottom: 50px;

    display: flex;
    justify-content: space-between;
    gap: 60px;
    flex-wrap: wrap;

    .item {
      flex: 1;
      min-width: 250px;

      @include mixins.text-base(40px);
      text-align: center;

      .num {
        color: variables.$color-accent;
        font-weight: 800;
      }

      .text {
        padding-top: 10px;
        font-size: 14px;
        color: variables.$color-fg;
      }
    }
  }
}
</style>
