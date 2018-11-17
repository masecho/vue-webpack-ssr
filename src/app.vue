<template>
    <div id="app">
       <div id="cover">
           <Header></Header>
            <Todo></Todo>     
            <Counter></Counter>     
           <Footer></Footer>
       </div>
    </div>    
</template>
<script>
import Header from "./layout/header.vue";
import Footer from "./layout/footer.jsx";
import Todo from "./views/todo/todo.vue";
import Counter from "./views/counter/counter.vue";
export default {
  components: {
    Header,
    Footer,
    Todo,
    Counter
  },
  data() {
    return {
      text: "abcddd"
    };
  }
};
</script>

<style>
</style>
