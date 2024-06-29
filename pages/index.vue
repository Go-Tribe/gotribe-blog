<template>
  <TopBanner :bannerList="data.topInfo.posts"></TopBanner>
  <ArticleModule :baseInfo="data.contentInfo" :pageNum="pageNum" :pageSize="pageSize"></ArticleModule>
</template>
<script setup>
import TopBanner from './components/TopBanner.vue'
import ArticleModule from './components/ArticleModule.vue'
import { getContentList } from '~/service/content'
import { onMounted } from 'vue'
import { useProjectStore } from '~/store/project'

const { projectInfo } = useProjectStore()

const route = useRoute()

useHead({
  title: `${projectInfo.title} - 首页`
})

const pageSize = 8,pageNum = Number(route.query.pageNum || 1)

const { data } = await useAsyncData( async () => {
  const [contentInfo, topInfo] = await Promise.all([
    getContentList({
      offset: pageNum,
      limit: pageSize,
      type: '1,3'
    }),
    getContentList({
      offset: 0,
      limit: 8,
      isTop: 1
    })
  ])
  return {
    contentInfo,
    topInfo
  }
})

</script>

<style lang="less">
a {
  display: block;
}
</style>
