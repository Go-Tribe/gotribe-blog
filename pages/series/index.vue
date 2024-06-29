<template>
  <div class="column-content">
    <div class="column-title text-[24px] font-[500]">精选栏目</div>
    <div class="column-list flex flex-row flex-wrap mt-4 justify-between gap-y-[32px]">
      <div
        class="column-item" 
        v-for="item in data.seriesInfo?.columns"
      >
        <div class="column-header flex flex-row">
          <img src="../../asset/images/column-header.svg" />
          <div class="column-info grid">
            <a :href="`/series/${item.ColumnID}`" target="_blank" class="column-title line">{{ item.title }}</a>
            <div class="num">{{ item.posts.length }}篇文章</div>
          </div>
        </div>
        <div class="column-body">
          <div class="post-item" v-for="post in item.posts.slice(0,3)">
            <div class="post-cover" :style="{backgroundImage: `url(${post.icon})`}"></div>
            <a :href="`/p/${post.postID}`" target="_blank" class="post-title">{{ post.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getColumnList } from '~/service/column'
import { useProjectStore } from '~/store/project'

const { projectInfo } = useProjectStore()

useHead({
  title: `精选栏目 - ${projectInfo.title}`
})

const { data } = useAsyncData( async () => {
  const seriesInfo = await getColumnList({
    offset: 0,
    limit: 10
  })
  return {
    seriesInfo
  }
})

</script>

<style lang="less" scoped>
.column-item {
  background: white;
  border-radius: 8px;
  width: 454px;
  box-shadow: 0px 5px 50px 0 rgb(8 11 25/5%);
  padding: 20px;
  .column-header {
    img {
      height: 35px;
      width: 12px;
      margin-top: -6px;
      margin-right: 8px;
    }
    .column-info {
      .column-title {
        color: #4b4d50;
        font-size: 18px;
        font-weight: 500;
        &:hover {
          color: black;
        }
      }
      .num {
        font-size: 12px;
        color: #8c98a3;
      }
    }
  }
  .column-body {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 12px;
    .post-item {
      display: flex;
      align-items: center;
      .post-cover {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        background: rgb(183, 181, 181);
        margin-right: 12px;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .post-title {
        white-space: nowrap;      
        overflow: hidden;          
        text-overflow: ellipsis;
        color: #636874;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  @media (max-width: 980px) {
    width: 100%;
  }
}
</style>
<style lang="less">
a {
  display: block;
}
div {
  box-sizing: border-box;
}
</style>
