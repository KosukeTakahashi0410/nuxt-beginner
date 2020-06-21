<template>
  <div>
    <input placeholder="タスクを追加" @keyup.enter="addTodo">
    <ul>
      <li v-for="todo in filteredTodo" v-bind:key="todo.id">
        <input type="checkbox" @change="toggle(todo)">
        <span>{{ todo.text }}</span>
      </li>
    </ul>
    <button @click="changeShowCount">表示件数変更</button>
  </div>
</template>

<script>
// Vuex使うのに必要らしい
import { mapMutations } from 'vuex'

export default {
  data() {
    return{
      todos: this.$store.getters['todo/getTodos'],
      filterCountJudge: true
    }
  },
  computed: {
    filteredTodo() {
      if (this.filterCountJudge == true){
        return this.todos.slice(0,1)
      } else {
        return this.todos
      }
    }
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch('todo/add', e)
    },
    changeShowCount() {
      this.filterCountJudge = !this.filterCountJudge
      console.log(this.filterCountJudge)
    },
    // これ正直あんまりわかってない
    ...mapMutations({
      toggle: 'todo/toggle'
    })
  }
}
</script>