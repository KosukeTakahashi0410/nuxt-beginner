<template>
  <div class="page">
    <Component :message="myMessage" />
    <p>{{ test2 }}</p>
    <p>{{ test }}</p>
    <p>テスト2</p>
    <p>追加した</p>
  </div>
</template>

<script>
import Component from '~/components/Component'
export default {
  data() {
    return {
      myMessage: 'てすてす',
      test2: 'test2です　コンフリクト作るよー',
      myMessage: 'v-bind props test',
      test: 'test message'
    }
  },
  components: {
    Component: Component,
  }
}
</script>