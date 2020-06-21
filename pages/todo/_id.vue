<template>
  <div>
    <p>テストだよ</p>
    <p>これは{{ $route.params.id }}のエントリー</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>