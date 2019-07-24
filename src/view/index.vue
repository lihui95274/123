<template>
  <div>
    <h1>Index</h1>
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      message: ''
    }
  },
  created() {
    this.$http({
      url: '/getUrl',
      method: 'post',
      data: {code: '1111'}
    })
    .then(res => {
      this.message = res.message
    })
  }
}
</script>

