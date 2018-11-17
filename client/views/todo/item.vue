<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input 
      type="checkbox"
      class="toggle"
      v-model="todo.completed"  
      @click="toggle"
    >
    <label >{{todo.content}}</label>
    <button type="button" class="destroy" @click="deleteTodo">X</button>
  </div>
</template>
 
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit("del", this.todo.id);
    },
    toggle() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  height: 30px;
  line-height: 30px;
  padding: 5px;
}

.destroy {
  height: 30px;
  text-align: center;
  width: 30px;
  line-height: 30px;
  float: right;
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
}

.completed {
  text-decoration: line-through;
  color: #ccc;
}
</style>


