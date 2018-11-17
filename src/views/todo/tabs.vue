<template>
  <div class="helper">
    <span class="left">{{unfinishedTodosLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter===state?'actived':'']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
export default {
  props:{
    filter:{
      type:String,
      required:true
    },
    todos:{
      type:Array,
      required:true
    }
  },
  data(){
    return {
      states:['all','active','completed']
    }
  },
  methods:{
    toggleFilter(state){
      this.$emit("toggleFilter",state);
    },
    clearAllCompleted(){
      this.$emit("clearAllCompleted");
    }
  },
  computed:{
    unfinishedTodosLength(){
      return this.todos.filter(todo=>!todo.completed).length;
    }
  }
}
</script>
<style scoped>
  .helper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .all,
  .active,
  .completed{
    padding: 0 4px; 
    cursor: pointer;   
    border: 1px solid transparent;
  }

  .actived{
    border-color: #F00;
    border-radius: 4px;
  }

</style>

