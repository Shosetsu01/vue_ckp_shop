<template>
  <div class='v-select'>
    <p
        class="title"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
        class="options"
        v-if="areOptionsVisible || isExpanded"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style>
.v-select {
  position: relative;
  width: 100%;
  cursor: pointer;
  text-align: center;
  margin-bottom: 2rem;
}
.title {
  border: solid 1px #1d3687;
  border-radius: 10px;
  padding: 8px;
  color: #1d3687;
  font-size: 2.5rem;
}
.v-select p {
  margin: 0;
}
.options {
  border: solid 1px #1d3687;
  border-radius: 10px;
  background: #ffffff;
  position: absolute;
  z-index: 100;
  top: 50px;
  left: 0;
  width: 100%;
  padding: 8px;
  color: #1d3687;
}
.options p:hover {
  background: #81b5da;
}
</style>