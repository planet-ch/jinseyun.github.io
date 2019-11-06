<template>
  <el-container>
    <el-carousel height="100vh" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item in 3" :key="item">
        <div class="bg"></div>
      </el-carousel-item>
    </el-carousel>
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
  background-color: #2c3e50;
  position: relative;
  .bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #ff6600;
  }
}
</style>
