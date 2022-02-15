<template>
  <div class="product__card">
    <vsa-item>
      <vsa-heading>
        {{ product_data.name }}
        <br>
        <span class="info">Подробнее:</span>
      </vsa-heading>
      <vsa-content>
        <span class="card__about--line"></span>
        Оборудование и его
        основные характеристики:
        <br>
        {{ product_data.equipment }}
        <br>
        {{ product_data.equipmentNote }}
        <br><br>
        Примечание:
        <br>
        {{ product_data.note }}
      </vsa-content>
    </vsa-item>

    <div class="card__right">
      <div class="center">
        <div class="card__price">
          {{ product_data.price }} руб.
        </div>
        <div class="buy">
          <div class="card__count">
            <span>{{ product_data.quantity }}</span>
          </div>
          <button
              class="buy__btn"
              type="button"
              @click="addToBasket"
          >Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {VsaItem, VsaHeading, VsaContent} from 'vue-simple-accordion';

export default {
  name: "Product__card",
  components: {
    VsaItem,
    VsaHeading,
    VsaContent,
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    addToBasket() {
      this.$emit( 'addToBasket' ,this.product_data)
    }
  }
}
</script>

<style scoped>
.product__card{
  margin-bottom: 1rem;
  display: flex;
  min-height: 140px;
  height: auto;
  background: rgba(25, 118, 210, 0.4);
  padding: 2rem 3rem;
}

.card__about--line {
  margin-bottom: 1rem;
  display: block;
  content: "";
  border: 1px solid #223F99;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.card__right {
  width: 15%;
  position: relative;
}

.center {
  position: absolute;
  top: 1rem;
}

.card__price {
  margin-bottom: 1rem;
  font-weight: normal;
  font-size: 1.8rem;
  text-align: center;
  color: #1d3687;
}

.buy {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.buy__btn {
  font-size: 18px;
  color: #1d3687;
  padding: .5rem;
  border: 1px solid #1d3687;
  border-radius: 10px;
}

.buy__btn:hover {
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
}

.info {
  text-decoration: underline;
  font-size: 16px;
}

@media (max-width: 999px){
  .card__right {
    width: 25%;
  }
  .vsa-item {
    width: 75%;
  }
}

@media (max-width: 748px){
  .card__right {
    width: 50%;
  }
  .vsa-item {
    width: 50%;
  }
}

@media (max-width: 480px){
   .product__card {
     flex-wrap: wrap;
     min-height: 350px;
     padding: 1.5rem 1.5rem;
   }
  .card__right {
    display: block;
    width: 100%;
  }
  .center {
    position: relative;
  }
  .vsa-item {
    width: 100%;
    margin-right: 0;
  }
}

</style>