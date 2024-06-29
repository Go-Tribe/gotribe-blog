<template>
  <div 
    class="top-banner text-2xl font-bold" 
    :style="{backgroundImage: `url(${data.baseInfo.icon})`}"
  >
    #{{ data.baseInfo.title }}
  </div>
  <ArticleModule :baseInfo="data.contentInfo" :pageNum="pageNum" :pageSize="pageSize"></ArticleModule>
</template>
<script setup>
import ArticleModule from '../../components/ArticleModule.vue'
import { getContentList } from '~/service/content'
import { getCategoryDetail } from '~/service/category'
import { useProjectStore } from '~/store/project'

const { projectInfo } = useProjectStore()

const route = useRoute()

const pageSize = 8,pageNum = Number(route.query.pageNum || 1)

const { data } = await useAsyncData( async () => {
  const [contentInfo, baseInfo] = await Promise.all([
    getContentList({
      offset: pageNum,
      limit: pageSize,
      categoryID: route.params.id,
      type: '1,3'
    }),
    getCategoryDetail(route.params.id)
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: center;
  line-height: 135px;
  border-radius: 8px;
  font-size: 28px;
  background: gray;
}
</style>
<style lang="less">
a {
  display: block;
}
</style>
