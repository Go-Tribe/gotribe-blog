<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { useProjectStore } from '~/store/project'
await useAsyncData( async () => {
  const projectStore = useProjectStore()
  await projectStore.getProjectInfo()
})

const { projectInfo } = useProjectStore()

useHead({
  title: projectInfo.title,
  meta: [
    {
      name: 'description',
      content: projectInfo.description
    },
    {
      name: 'keywords',
      content: projectInfo.keywords
    },
  ],
  link: [
    {
      rel: 'icon',
      href: projectInfo.favicon
    }
  ],
  script: [
    {
      type: 'text/javascript',
      innerHTML: projectInfo.baiduAnalytics
    }
  ]
})
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
