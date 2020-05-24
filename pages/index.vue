<template>
  <div class="page">
    <Component
      :message="myMessage"
    >
    </Component>
  </div>
</template>

<script>
import Component from '~/components/Component'
export default {
  data() {
    return {
      myMessage: 'v-bindを使ったprops'
    }
  },
  components: {
    Component: Component,
  }
}
</script>