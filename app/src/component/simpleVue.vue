<template>
  <div class="example">
    <el-button type="primary">{{ msg }}</el-button>
    <div>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </div>

    <router-view></router-view>
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