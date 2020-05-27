<template>
  <div class="page">
    <Component
      :message="myMessage"
    >
    </Component>
    <p>{{ test }}</p>
  </div>
</template>

<script>
import Component from '~/components/Component'
export default {
  data() {
    return {
      myMessage: 'v-bind props test',
      test: 'test message'
    }
  },
  components: {
    Component: Component,
  }
}
</script>