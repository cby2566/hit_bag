<template>
  <div class="example">
    <el-button type="primary">{{ msg }}</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'single vue!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>