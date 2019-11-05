<template>
  <el-container>
    <el-aside>Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style lang="scss" scoped>
.el-container{
  height: 100vh;
  .el-aside {
    width: 32.8%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>
