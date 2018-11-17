<template>
  <section class="real-app">
    <input 
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么"
      @keyup.enter="addTodo"
    >
    <Item 
      v-for='todo in filteredTodos'
      :key='todo.id' 
      :todo='todo'
      @del="deleteTodo"
    />     
      
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggleFilter="toggleFilter" 
      @clearAllCompleted = "clearAllCompleted"
    ></Tabs>
  </section>
</template>
<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id = 0;
export default {
  components: { Item, Tabs },
  data() {
    return {
      filter: "all",
      todos: []
    };
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id));
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted(){
      this.todos = this.todos.filter(todo=>!todo.completed)
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => todo.completed === completed);
    }
  }
};
</script>

<style scoped>
.real-app {
  width: 500px;
  margin: 0 auto 20px;
  font-size: 16px;
}
.add-input {
  font-size: 16px;
  height: 30px;
  padding: 4px;
  border: none;
}
</style>

