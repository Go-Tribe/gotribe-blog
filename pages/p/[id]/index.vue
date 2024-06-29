<template>
  <ArticleDetail :articleInfo="data.articleInfo"></ArticleDetail>
  <!-- <Comment></Comment> -->
  <Recommend></Recommend>
</template>

<script setup>
import ArticleDetail from './components/ArticleDetail.vue'
import Comment from './components/Comment.vue'
import Recommend from './components/Recommend.vue'
import { getContentDetail } from '~/service/content'
import { useProjectStore } from '~/store/project'

const { projectInfo } = useProjectStore()

const route = useRoute()

const { data } = await useAsyncData( async () => {
  const articleInfo = await getContentDetail(route.params.id)
  return {
    articleInfo
  }
})

useHead({
  title: `${data.value.articleInfo.title} - ${projectInfo.title}`,
  meta:[
    {
      name: 'description',
      content: data.value.articleInfo.description
    },
    {
      name: 'keywords',
      content: data.value.articleInfo.tags?.map(item => item.title).join(',')
    },
  ]
})

</script>

<style>
@font-face {
  font-family: AlimamaAgileVF;
  src: url("./font/AlimamaAgileVF-Thin.ttf") format("TrueType");
}
</style>