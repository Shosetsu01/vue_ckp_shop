<template>
  <!-- Shop -->
  <section class="shop">
    <div class="container">
      <div class="shop__inner">
        <div class="shop__title">
          <h1>Предоставляемые услуги</h1>
          <span class="shop__title--line"></span>
        </div>

        <div class="services">
          <Category
            :selected="selected"
            :options="categories"
            @select="sortByCategories"
          />

          <div class="product">
            <vsa-list>
              <Product__card
                v-for="product in filteredProducts"
                :key="product.id"
                :product_data="product"
                @addToBasket="addToBasket"
              />
            </vsa-list>
          </div><!--  /.product -->
        </div><!--  /.services -->

        <router-link :to="{name: 'Basket', params: {basket_data: BASKET}}">
          <div>
            <div class="btn__basket">
              Перейти в корзину
            </div>
          </div>
        </router-link>

      </div><!--  /.shop__inner -->
    </div><!--  /.container -->
  </section><!--  /.shop -->
</template>

<script>
import {VsaList} from 'vue-simple-accordion';
import Product__card from "@/components/Product__card";
import Category from "@/components/Category";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Shop",
  components: {
    VsaList,
    Product__card,
    Category
  },
  mounted() {
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('https://ckp.muctr.ru/api/shop/product/', requestOptions)
        .then(resp => {
            console.log(resp);
            if (!resp.ok) {
              throw Error(resp.statusText);
            }
            return resp.json()
        })
        .then(data => {
            this.GET_PRODUCTS_FROM_API(data)
            console.log(data);
        }).catch(error => {
            console.log(error)
        });

    console.log("shop")
  },
  data: function () {
    return {
      categories: [
        {name: 'Все услуги', value: 'ALL'},
        {name: 'Денсиметрия', value: '1'},
        {name: 'Рефрактометрия', value: '2'},
        {name: 'Оптическая спектрометрия', value: '3'},
        {name: 'Элементный анализ', value: '4'},
        {name: 'Исследование поверхности и пористости материалов', value: '5'},
        {name: 'Поверхностные явления для жидкостей', value: '6'},
        {name: 'Электронная сканирующая микроскопия', value: '7'},
        {name: 'Распределение частиц по размерам', value: '8'},
        {name: 'ЯМР спектроскопия', value: '9'},
        {name: 'Реология вязких сред', value: '10'},
        {name: 'Комплексные исследования', value: '11'},
        {name: 'Консультационная помощь', value: '12'},
      ],
      selected: 'Все услуги',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'BASKET'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    },
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_BASKET',
    ]),
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item) {
        if (item.category == category.value) {
          vm.sortedProducts.push(item);
        }
      })
      this.selected = category.name;
    },
    addToBasket(data) {
      this.ADD_TO_BASKET(data)
    },
  },
}

</script>

<style scoped>
/* Shop */
.shop__inner {
  background-color: white;
  padding: 4rem 2rem;
}

.shop__title {
  margin-bottom: 4rem;
  font-size: 2rem;
  text-align: center;
  color: #223F99;
}

.shop__title--line {
  margin-top: 1.5rem;
  display: block;
  content: "";
  border: 1px solid #223F99;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.services {
  display: block;
}

.product {
  width: 100%;
}

.btn__basket {
  margin-top: 4rem;
  position: relative;
  max-width: 30rem;
  left: 37%;
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #1d3687;
  text-align: center;
  border: 1px solid #1d3687;
  border-radius: 10px;

  transition: background-color .1s linear, color .1s linear;
}

.btn__basket:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #1d3687;
  color: #81b5da;
}

@media (max-width: 999px) {
  .btn__basket {
    left: 0%;
  }
}
@media (max-width: 661px) {
  .shop__inner {
    padding: 0.5rem 2rem 2rem 2rem;
  }
  .shop__title {
    font-size: 1.5rem;
  }
}

</style>