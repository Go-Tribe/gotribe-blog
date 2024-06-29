<template>
  <div class="top-banner" v-if="bannerList.length">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in bannerList" :key="item.postID">
        <a 
          :href="`/p/${item.postID}`" 
          target="_blank"
          class="carousel-item w-full" 
          :style="{backgroundImage: `url(${item.icon})`}"
        >
          <div class="carousel-text text-center">{{ item.title }}</div>
        </a> 
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  bannerList:{
    type: Array,
    default: []
  }
})

</script>

<style lang="less" scoped>
.top-banner {
  border-radius: 8px;
  overflow: hidden;
  .carousel-item {
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    .carousel-text {
      position: absolute;
      color: white;
      width: 100%;
      padding: 0 16px;
      font-size: 20px;
      font-weight: 600;
      bottom: 24px;
    }
  }
}
</style>