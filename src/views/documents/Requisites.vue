<template>
  <section class="doc">
    <div class="doc__container">
      <h1>Реквизиты компании</h1>

      <p>
        Ниже приведены юридические и банковские реквизиты компании
        <strong>ООО "Альянс-Квадро"</strong>.
      </p>

      <h2>Общая информация</h2>
      <ul>
        <li><strong>Наименование:</strong> ООО "Альянс-Квадро"</li>
        <li><strong>ОГРН:</strong> 1260200004943</li>
        <li><strong>ИНН:</strong> 0272935106</li>
        <li>
          <strong>Юридический адрес:</strong>
          Респ. Башкортостан, рп. Чишмы, ул. Кирова, д. 17, пом. 28, 452170
        </li>
        <li>
          <strong>E-mail:</strong>
          <a href="mailto:alyans219@mail.ru">alyans219@mail.ru</a>
        </li>
      </ul>

      <h2>Банковские реквизиты</h2>
      <ul>
        <li><strong>Расчетный счет:</strong> ____________________</li>
        <li><strong>Банк:</strong> ____________________</li>
        <li><strong>БИК:</strong> ____________________</li>
        <li><strong>Корреспондентский счет:</strong> ____________________</li>
      </ul>

      <p>
        Актуальность реквизитов уточняйте у менеджера при заключении договора.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.doc {
  @include mixins.text-base(22px);
  line-height: 1.3em;
  margin-top: 150px;
  padding-bottom: 100px;

  .doc__container {
    @include mixins.container;

    h1 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    h2 {
      margin-top: 28px;
      font-size: 20px;
    }

    p,
    li {
      font-size: 16px;
      color: #333;
    }

    ul {
      padding-left: 20px;
    }

    a {
      color: variables.$color-accent;
      text-decoration: underline;

      &:hover {
        color: variables.$color-accent-hover;
      }
    }
  }
}
</style>
