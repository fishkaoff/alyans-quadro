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

      <button class="burger-btn" @click="opened = !opened">
        <img :src="BurgerBtn" alt="Открыть меню" class="image" />
      </button>
    </div>

    <div class="burger-menu" v-if="opened">
      <div class="close-btn-container">
        <button class="btn" @click="opened = !opened">
          <img :src="CloseBtn" alt="Закрыть меню" class="image" />
        </button>
      </div>

      <ul class="burger-nav">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import AppButton from "./AppButton.vue";
import BurgerBtn from "@/assets/images/burger.svg";
import CloseBtn from "@/assets/images/close.svg";
import { ref } from "vue";

const opened = ref(false);
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

        @media screen and (max-width: 320px) {
          font-size: 18px;
        }
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

      @media screen and (max-width: 400px) {
        display: none;
      }
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

  .burger-menu {
    width: 100vw;
    height: 100vh;

    position: absolute;
    z-index: 1001;
    top: 0;

    background-color: variables.$color-bg;

    .close-btn-container {
      width: 90%;
      margin: 40px auto;
      display: flex;
      justify-content: flex-end;

      .btn {
        outline: none;
        border: none;
        cursor: pointer;
      }
    }

    .burger-nav {
      .nav-item {
        @include mixins.text-base(28px);
        text-align: center;
        padding-top: 40px;

        .nav-link {
          color: #000;
          transition: all 0.7s;
        }

        .nav-link:hover {
          color: variables.$color-accent-hover;
        }
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
