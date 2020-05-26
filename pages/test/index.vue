<template>
  <div>
    <ul v-for="person in filterPerson">
      <li>{{ person.name }}</li>
    </ul>
    <button @click="changeShowCount"></button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      persons: [
        { name: 'test1' },
        { name: 'test2' },
        { name: 'test3' },
        { name: 'test4' },
        { name: 'test5' },
        { name: 'test6' }
      ],
      filterCountJudge: true
    }
  },
  computed: {
    filterPerson: function() {
      if (this.filterCountJudge == true){
        return this.persons.slice(0,2)
      } else {
        return this.persons.slice(0,4)
      }
    }
  },
  methods: {
    changeShowCount: function(){
      this.filterCountJudge = !this.filterCountJudge
      console.log(this.filterCountJudge)
    }
  }
}
</script>