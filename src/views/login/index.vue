<template>
  <el-container>
    <el-aside>Aside</el-aside>
    <el-main></el-main>
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
    color: #333;
    text-align: center;
    line-height: 160px;
    background: url("./../../assets/img/bd1.jpg") no-repeat center/100%;
  }
}
</style>
