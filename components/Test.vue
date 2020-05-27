<template>
  <div>
    <ul v-for="" :key="key">
      <li v-for="member of 3">{{member.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    members: {type: Array}
  }
}
</script>