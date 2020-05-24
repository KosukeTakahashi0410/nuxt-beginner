<template>
  <div class="page">
    <Component message="Hello Vue.js!"></Component>
  </div>
</template>

<script>
import Component from '~/components/Component'
export default {
  components: {
    Component: Component,
  }
}
</script>