<template>
  <div class="header">
    <div class="wrapper">
      <div class="logo" @click="router.push({ name: 'Home' })">
        <div class="icon">АК</div>
        <h1 class="title">Альянс Квадро</h1>
      </div>

      <ul class="nav">
        <li class="nav-item">
          <router-link to="" class="nav-link">Главная</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">Каталог</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">О компании</router-link>
        </li>
      </ul>

      <app-button class="btn">Связаться</app-button>

      <button class="burger-btn">
        <img :src="BurgerBtn" alt="Открыть меню" class="image" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import AppButton from "./AppButton.vue";
import BurgerBtn from "@/assets/images/burger.svg";
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;

  background-color: variables.$color-bg;

  .wrapper {
    @include mixins.container;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      @include mixins.text-base(22px);
      display: flex;
      align-items: center;
      cursor: pointer;

      .title {
        font-weight: 800;
        padding-left: 10px;
      }

      .icon {
        padding: 10px;
        color: #fff;
        background-color: variables.$color-accent;
        border-radius: 10px;
      }
    }

    .nav {
      display: flex;
      flex-wrap: nowrap;
      gap: 80px;

      align-items: center;

      .nav-item > .nav-link {
        @include mixins.text-base(20px);
        font-weight: 500;
        color: #000;
        transition: all 0.7s;
      }

      .nav-item > .nav-link:hover {
        color: variables.$color-accent;
      }
    }

    .btn {
      width: 20%;
      min-width: 150px;
    }

    .burger-btn {
      display: none;
      border: none;
      outline: none;
      background-color: transparent;

      .image {
        width: 30px;
        height: 30px;
      }
    }
  }
}

@media screen and (max-width: 968px) {
  .header {
    .wrapper {
      .nav {
        display: none;
      }

      .burger-btn {
        display: block;
      }
    }
  }
}
</style>
