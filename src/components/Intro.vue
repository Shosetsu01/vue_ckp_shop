<template>
  <section class="intro">
    <div class="container">

      <div class="intro__inner">
        <h1 class="intro__text">
          УСЛУГИ ЦЕНТРА КОЛЛЕКТИВНОГО <br>
          ПОЛЬЗОВАНИЯ ИМЕНИ Д.И. МЕНДЕЛЕЕВА
        </h1>
      </div>

    </div><!--  /.container -->
  </section><!--  /.intro -->
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style scoped>
.intro {
  display: block;
  margin: 0 auto;
  height: 45rem;
  max-width: 116rem;
  background: #ffffff url("../assets/intro_bg_with_logo.png") center no-repeat;
  background-size: cover;
}

.intro__inner {
  display: flex;
}

.intro__text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  background-color: #1976D2;
  height: 10rem;
  width: 65rem;
  text-transform: uppercase;
  font-size: 2.6rem;
  font-weight: bold;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 641px) {
  .intro {
    background: none;
    height: 15rem;
  }
  .intro__text {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
}
</style>