<template>
  <div>
    <Header></Header>
    <Intro></Intro>
    <Shop></Shop>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";
import '../../public/css/main.css'


export default {
  name: 'Home',
  components: {
    Header,
    Intro,
    Shop,
    Footer
  },
}
</script>

<style>

</style>