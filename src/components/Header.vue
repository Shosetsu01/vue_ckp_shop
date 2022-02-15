<template>
  <header class="header">
    <div class="container">

      <div class="header__inner">

        <router-link :to="{name: 'Home'}">
          <div class="header__logo">
            <img class="header__img" src="../assets/logo.png" alt="Muctr logo">
            РХТУ им. Д.И. Менделеева
          </div>
        </router-link>

        <div class="header__right">
          <div class="basket__counter">
            <span>{{ BASKET.length }}</span>
          </div>

          <router-link :to="{name: 'Basket', params: {basket_data: BASKET}}">
            <img class="basket__img" src="../assets/shop_basket.png" alt="Shopping basket">
          </router-link>
        </div>

      </div>
    </div><!--  /.container -->
  </header><!--  /.header -->
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Header",
    computed: {
      ...mapGetters([
          'BASKET'
      ])
    }
}

</script>

<style scoped>
/* Header */
.header {
  width: 100%;
  background-color: #1976D2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 20px !important;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.header__logo {
  display: flex;
  font-size: 1.8rem;
  font-weight: 400;
  color: white;
  text-decoration: none;
  align-items: center;
}

.header__img {
  height: 4rem;
  margin-right: .5rem;
}

.header__right {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
}

.basket__img {
  height: 40px;
  width: 40px;
}
</style>