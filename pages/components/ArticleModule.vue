<template>
  <div class="mt-4 flex justify-center flex-col" v-if="baseInfo.posts">
    <div v-for="item in baseInfo.posts">
      <CommonCard v-if="item.type === 1" :item="item"></CommonCard>
      <TextCard v-if="item.type === 3" :item="item"></TextCard>
    </div>
    <div class="join mx-auto">
      <button 
        :class="['join-item','btn',index + 1 == pageNum ? 'btn-active' : '']"
        v-for="(item,index) in pageCount"
        @click="jumpUrl(index)"
      >{{ item }}</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import CommonCard from '~/components/ArticleCard/CommonCard.vue'
import TextCard from '~/components/ArticleCard/TextCard.vue'

const route = useRoute()

const props = defineProps({
  baseInfo: {
    type: Object,
    default: {}
  },
  pageSize: Number,
  pageNum: Number
})

// 页数
const pageCount = computed(() => {
  return Math.ceil(props.baseInfo.totalCount/props.pageSize)
})

const jumpUrl = index => {
  const query = { ...route.query, pageNum: index+1 }
  let urlQueryStr = '?'
  for(let key in query) {
    urlQueryStr += `${urlQueryStr == '?' ? '' : '&'}${key}=${query[key]}`
  }
  window.location.href = `${window.location.origin}${window.location.pathname}${urlQueryStr}`
}

</script>
<style lang="less" scoped>
.join {
  .join-item {
    background-color: rgb(242, 242, 242);
    border-color: rgb(242, 242, 242);
    color: rgb(31, 41, 55);
  }
  .btn-active {
    background-color: rgb(229, 230, 230);
    border-color: rgb(229, 230, 230);
  }
}
</style>
