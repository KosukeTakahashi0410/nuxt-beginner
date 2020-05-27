<template>
  <Test :members="members"></Test>
</template>

<script>
import Test from '@/components/Test.vue'

export default {
  components: {
    Test
  },
  data(){
    return {
      members: [
        {name: 'テスト1'},
        {name: 'テスト2'},
        {name: 'テスト3'},
        {name: 'テスト4'},
        {name: 'テスト5'},
        {name: 'テスト6'},
        {name: 'テスト7'}
      ]
    }
  }
}
</script>