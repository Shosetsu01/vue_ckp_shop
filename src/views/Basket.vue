<template>
  <div>
    <Header></Header>
    <Shopper
      v-if="BASKET.length"
      :basket_data="BASKET"
    />
    <Forms
      v-if="BASKET.length"
    />
    <v-container v-else>
      <h3> Вы ничего не добавили в корзину. </h3>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Forms from "@/components/Forms";
import Shopper from "@/components/Shopper";
import '../../public/css/main.css'
import {mapGetters} from "vuex";

export default {
  name: "Basket",
  components: {
    Header,
    Shopper,
    Forms,
    Footer
  },
  computed: {
    ...mapGetters([
      'BASKET'
    ])
  },
  mounted() {
    console.log("basket")
  }
}
</script>

<style scoped>
</style>