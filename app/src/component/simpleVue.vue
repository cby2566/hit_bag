<template>
  <el-container>
    <el-aside width="200px">
      <menu2></menu2>
    </el-aside>
    <el-main>
      <mian4></mian4>
    </el-main>
  </el-container>
</template>

<script>
import menu2 from "./menu2.vue"
import mian4 from "./mian4.vue"
export default {
  components: { menu2, mian4 },
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