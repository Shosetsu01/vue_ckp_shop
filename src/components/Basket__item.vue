<template>
  <div class="product__card">
    <vsa-item>
      <vsa-heading>
        {{ basket_item.name }}
        <br>
      </vsa-heading>
      <vsa-content>
        <span class="card__about--line"></span>
        Оборудование и его
        основные характеристики:
        <br>
        {{ basket_item.equipment }}
        <br>
        {{ basket_item.equipmentNote }}
        <br><br>
        Примечание:
        <br>
        {{ basket_item.note }}
      </vsa-content>
    </vsa-item>

    <div class="card__right">
      <div class="center">
        <div class="card__price">
          {{ basket_item.price }} руб.
        </div>
        <div class="buy">
          <button
              class="buy__btn"
              type="button"
              @click="decrementItem"
          >-</button>
          <div class="card__count">
            <span>{{ basket_item.quantity }}</span>
          </div>
          <button
              class="buy__btn"
              type="button"
              @click="incrementItem"
          >+</button>
          <button
              class="delete__btn"
              type="button"
              @click="deleteFromBasket"
          >
            Удалить
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  VsaContent,
  VsaHeading,
  VsaItem,
} from "vue-simple-accordion";

export default {
  name: "Basket__item",
  components: {
    VsaItem,
    VsaHeading,
    VsaContent,
  },
  props: {
    basket_item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
  },
  methods: {
    deleteFromBasket() {
      this.$emit('deleteFromBasket');
    },
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    }
  },
}
</script>

<style scoped>

vsa-item {
  width: 75%;
  margin-right: 3rem;
}

.product__card{
  margin-bottom: 1rem;
  display: flex;
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
  width: 25%;
  position: relative;
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
  font-size: 3.5rem;
  color: #1d3687;
  margin-right: 1.5rem;
  position: relative;
  top: -3.5px;
}

.buy__btn:last-child {
  margin-right: 0;
}

.buy__btn:hover {
  color: #1976D2;
}

.delete__btn {
  font-weight: normal;
  font-size: 2rem;
  color: #1d3687;
}

.delete__btn:hover {
  color: #1976D2;
  border-bottom: 1px solid #1976D2;
}

@media (max-width: 641px) {
  .buy {
    flex-wrap: wrap;
  }
}
</style>