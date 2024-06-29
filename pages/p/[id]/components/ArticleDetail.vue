<template>
  <div class="article-detail">
    <div class="crumb">
      <a href="/" class="crumb-item">首页<em>/</em></a>
      <a 
        v-if="articleInfo.category" 
        :href="`/category/${articleInfo.category.categoryID}`" 
        class="crumb-item"
      >{{ articleInfo.category.title }}<em>/</em></a>
      <div class="crumb-item crumb-cur">{{ articleInfo.title }}</div>
    </div>
    <div class="title">{{ articleInfo.title }}</div>
    <div class="article-info flex flex-row items-center">
      <template v-if="articleInfo.category">
        <a :href="`/category/${articleInfo.category.categoryID}`" target="_blank" class="create-time">{{ articleInfo.category.title }}</a>
        <i class="text-primary mx-2 mb-[4px]">·</i>
      </template>
      <div class="create-time">{{ articleInfo.createdAt }}</div>
    </div>
    <div class="content markdown-body" v-html="articleInfo.htmlContent"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { defineProps } from 'vue'
import 'cherry-markdown/dist/cherry-markdown.css'

const props = defineProps({
  articleInfo: Object
})

onMounted(() => {
  hljs.highlightAll()
})

</script>

<style lang="less" scoped>
.article-detail {
  .crumb {
    display: flex;
    .crumb-item {
      color: #8c98a3;
      font-size: 13px;
      em {
        font-style: unset;
        margin: 0 8px;
      }
    }
    .crumb-cur {
      color: #1f1e1e;
    }
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 20px;
  }
  .article-info {
    margin-top: 20px;
    .create-time {
      color: #8c98a3;
      font-size: 13px;
    }
    i {
      line-height: 20px;
    }
  }
  .content {
    margin-top: 20px;
    background: transparent !important;
    // font-family: AlimamaAgileVF;
    letter-spacing: 1px;
    /deep/ pre code.hljs {
      display: block;
      overflow-x: auto;
      padding: 1em;
      border-radius: 4px;
      margin: 10px 0;
    }
    /deep/ a {
      font-weight: 600;
      border-bottom: 1px solid #f76e6f;
      display: inline-block;
      margin: 0 4px;
    }
  }
}
</style>
<style lang="less">
ol {
  list-style-type: decimal;
  padding-left: 20px;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin-bottom: 24px;
  line-height: 1.5;
}
blockquote {
  padding: 16px;
  border-left: 4px solid #fb6f6f;
}
h1,h2,h3,h4,h5,h6 {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  &::before {
    content: '#';
    color: #fb6f6f;
    margin-right: 4px;
  }
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.42em;
}
h3 {
  font-size: 1.16em;
}
h4 {
  font-size: 1em;
}
h5 {
  font-size: 0.9em;
}
h6 {
  font-size: 0.8em;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
p code {
  color: white;
  background: #f18c8c;
  border-radius: 4px;
  padding: 2px 8px;
  white-space: nowrap;
  margin: 4px;
  overflow: auto;
  max-width: 100%;
  display: inline-flex;
}
</style>