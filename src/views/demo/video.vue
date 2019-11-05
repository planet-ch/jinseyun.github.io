<template>
<div class="video">
  <video :src="src" autoPlay></video>
  <router-link to="login">去login</router-link>
</div>
</template>

<script>
  export default {
    name: "video",
    data () {
      return {
        src: 'https://www.apple.com/105/media/us/apple-tv-plus/2019/c5a05301_ed18_47f6_a7f8_bba47bf3e0f4/anim/supercut/large.mp4'
      }
    }
  }
</script>

<style lang="scss" scoped>
.video{
  video{
    display: block;
    width: 80vw;
    border-radius: 40px;
    margin: 20px auto;
  }
}
</style>
