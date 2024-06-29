<template>
  <div 
    class="top-banner text-2xl font-bold text-gray-500"
  >
    搜索：{{ route.query.query || '全部' }}
  </div>
  <div v-if="data.contentInfo.posts.length">
    <ArticleModule :baseInfo="data.contentInfo" :pageNum="pageNum" :pageSize="pageSize"></ArticleModule>
  </div>
  <div v-else class="text-2xl font-bold text-center">未搜到内容哦</div>
</template>
<script setup>
import { getContentList } from '~/service/content'
import ArticleModule from '../components/ArticleModule.vue'
import { useProjectStore } from '~/store/project'

const { projectInfo } = useProjectStore()

const route = useRoute()

const pageSize = 8,pageNum = Number(route.query.pageNum || 1)

const { data } = useAsyncData( async () => {
  const contentInfo = await getContentList({
    offset: pageNum,
    limit: pageSize,
    query: route.query.query,
    type: '1,3'
  })
  return {
    contentInfo
  }
})

useHead({
  title: `${route.query.query} - ${projectInfo.title}`
})

</script>

<style lang="less" scoped>
.top-banner {
  height: 135px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  line-height: 135px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 28px;
}
</style>
<style lang="less">
a {
  display: block;
}
</style>
