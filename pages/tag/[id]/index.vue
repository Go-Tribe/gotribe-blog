<template>
  <div class="top-banner text-2xl font-bold">
    <span class="top-banner-title">#{{ data.baseInfo.title }}</span>
  </div>
  <ArticleModule :baseInfo="data.contentInfo" :pageNum="pageNum" :pageSize="pageSize"></ArticleModule>
</template>
<script setup>
import ArticleModule from '../../components/ArticleModule.vue'
import { getContentList } from '~/service/content'
import { getTagDetail } from '~/service/tag'
import { useProjectStore } from '~/store/project'

const route = useRoute()

const { projectInfo } = useProjectStore()

const pageSize = 8,pageNum = Number(route.query.pageNum || 1)

const { data } = await useAsyncData( async () => {
  const [contentInfo, baseInfo] = await Promise.all([
    getContentList({
      offset: pageNum,
      limit: pageSize,
      tagID: route.params.id,
      type: '1,3'
    }),
    getTagDetail(route.params.id)
  ])
  return {
    contentInfo,
    baseInfo
  }
})

useHead({
  title: `${data.value.baseInfo.title} - ${projectInfo.title}`,
  meta:[
    {
      name: 'description',
      content: data.value.baseInfo.description || projectInfo.description
    }
  ]
})

</script>

<style lang="less" scoped>
.top-banner {
  height: 135px;
  line-height: 135px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  text-align: center;
  border-radius: 8px;
  font-size: 28px;
  &-title {
    display: inline-block;
    position: relative;
    line-height: initial;
    &::before {
      content: '';
      left: 1px;
      right: 1px;
      height: 30%;
      background-color: #fd6e6e;
      position: absolute;
      opacity: .33;
      top: 50%;
      -webkit-transform: translate(0%, 5%);
      transform: translate(0%, 5%);
    }
  }
  
}
</style>
<style lang="less">
a {
  display: block;
}
</style>
