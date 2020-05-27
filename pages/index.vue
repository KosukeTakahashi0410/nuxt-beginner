<template>
  <div class="page">
    <Component
      :message="myMessage"
    >
    </Component>
    <p>{{ test2 }}</p>
  </div>
</template>

<script>
import Component from '~/components/Component'
export default {
  data() {
    return {
      myMessage: 'v-bindを使ったprops',
      test2: 'test2です　コンフリクト作るよー'
    }
  },
  components: {
    Component: Component,
  }
}
</script>