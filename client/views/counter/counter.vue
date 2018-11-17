<template>
  <div class="counter">
    <div>-----------vuex----------------------</div>
    <button @click="decrement">-</button><div>{{ count }}</div><button @click="increment">+</button>
    <div>countMul_6:{{countMul_6}}</div> 
    <div>doneTodosCount:{{doneTodosCount}}</div>
    <div>-----------vuex----------------------</div>
    <!-- Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}. -->
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    countMul_6() {
      return this.$store.getters.countMul_6;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodos[0];
    }
  },
  methods: {
    decrement() {
      this.$store.commit("decrement");
    },
    increment() {
      this.$store.commit("increment");
    }
  }
};
</script>

<style scoped>
.counter {
  margin: 0 auto;
  text-align: center;
}
</style>

