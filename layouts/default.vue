<template>
  <Header></Header>
  <div class="main-container">
    <slot></slot>
  </div>
  <Footer></Footer>
</template>
<script setup>
import Header from '../components/Header'
import Footer from '../components/Footer'

</script>
<style lang="less" scoped>
.main-container {
  max-width: 1040px;
  min-height: calc(100vh - 264px);
  margin: 0 auto;
  padding: 0 50px 50px 50px;
  @media (max-width: 750px) {
    padding: 0 16px 16px 16px;
  }
}
</style>
<style lang="less">
@import url("~/asset/css/common.less");
@import url("~/asset/css/iconfont/iconfont.css");
body {
  background: white;
  color: black;
}
</style>