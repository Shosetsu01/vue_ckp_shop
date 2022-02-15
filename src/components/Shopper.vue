<!--suppress ALL -->
<template>
  <v-container>
    <div class="product">
      <h3>Список выбранных услуг:</h3>
      <vsa-list>
        <Basket__item
            v-for="(item, index) in basket_data"
            :key="item.id"
            :basket_item="item"
            @deleteFromBasket="deleteFromBasket(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
      </vsa-list>
    </div>

    <div class="full__price">
      <span>Сумма заказа (без НДС): {{ basketTotal }} руб.</span>
    </div>


  </v-container>
</template>

<script>
import {
  VsaList
} from "vue-simple-accordion";
import Basket__item from "@/components/Basket__item";
import {mapActions} from 'vuex';

export default {
  name: "Shopper",
  components: {
    Basket__item,
    VsaList,
  },
  computed: {
    basketTotal() {
      let result = [];

      if (this.basket_data.length) {
        for (let item of this.basket_data) {
        result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return  0;
      }
    }
  },
  props: {
    basket_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_BASKET',
      'DECREMENT_BASKET_ITEM',
      'INCREMENT_BASKET_ITEM'
    ]),
    increment(index) {
      this.INCREMENT_BASKET_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_BASKET_ITEM(index);
    },
    deleteFromBasket(index) {
      this.DELETE_FROM_BASKET(index);
    }
  }
}
</script>

<style scoped>
.product {
  width: 100%;
}

vsa-item {
  width: 80%;
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
  width: 20%;
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
}

.buy__btn:last-child {
  margin-right: 0;
}

.full__price {
  font-weight: bold;
  color: #1d3687;
}
</style>