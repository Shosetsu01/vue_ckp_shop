<template>
  <div>
    <v-footer padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>РХТУ им. Д.И. Менделеева</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.text-center {
  display: block;
  background-color: #1976D2;
  text-align: center;
  color: white;
}
</style>