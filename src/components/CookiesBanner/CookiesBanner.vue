<template>
  <div v-if="visible" class="cookies">
    <div class="cookies__container">
      <div class="cookies__content">
        <p>
          Мы используем cookies, чтобы улучшить работу сайта и анализировать
          трафик. Продолжая пользоваться сайтом, вы соглашаетесь с их
          использованием.
        </p>

        <div class="cookies__actions">
          <button class="btn btn--accept" @click="acceptCookies">
            Принять
          </button>
          <a href="/cookies" class="cookies__link"> Подробнее </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(false);

onMounted(() => {
  const accepted = localStorage.getItem("cookies_accepted");
  if (!accepted) {
    visible.value = true;
  }
});

const acceptCookies = () => {
  localStorage.setItem("cookies_accepted", "true");
  visible.value = false;
};
</script>

<style scoped lang="scss">
.cookies {
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100%;
  z-index: 1000;

  .cookies__container {
    @include mixins.container;
  }

  .cookies__content {
    @include mixins.text-base(14px);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    background: variables.$color-card-bg;
    border-radius: 16px;
    padding: 20px 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      color: variables.$color-fg;
      max-width: 700px;
    }
  }

  .cookies__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .cookies__link {
    color: variables.$color-accent-dark;
    text-decoration: underline;
    font-size: 14px;

    &:hover {
      color: variables.$color-accent-dark-hover;
    }
  }
}

.btn {
  @include mixins.text-base(14px);

  border: none;
  border-radius: 10px;
  padding: 10px 18px;
  cursor: pointer;
  transition: 0.2s ease;

  &--accept {
    background: variables.$color-accent;
    color: #fff;

    &:hover {
      background: variables.$color-accent-hover;
    }
  }
}
</style>
