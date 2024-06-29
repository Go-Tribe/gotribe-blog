<template>
  <a :href="`/p/${item.postID}`" target="_blank" class="common-card flex">
    <svg t="1686901927739" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4888" width="200" height="200">
      <path d="M643.209216 450.842624V38.469632H1024v325.564416c0 176.232448-21.026816 303.833088-63.1296 382.752768-55.242752 105.216-142.70464 184.79104-262.418432 238.741504l-86.806528-138.10688c72.341504-30.273536 125.622272-75.321344 159.803392-135.161856 34.234368-59.856896 53.27872-146.991104 57.223168-261.421056h-185.462784zM31.563776 450.842624V38.469632h380.807168v325.564416c0 176.232448-21.026816 303.833088-63.145984 382.752768-55.242752 105.216-142.70464 184.79104-262.402048 238.741504L0 847.423488c72.359936-30.273536 125.622272-75.321344 159.819776-135.161856 34.215936-59.856896 53.262336-146.991104 57.223168-261.421056H31.563776z" p-id="4889" fill="#ffffff"></path>
    </svg>
    <div class="right-content flex-1 flex flex-col justify-between">
      <div class="text-base line-2">{{ item.description }}</div>
      <div class="flex text-xs mt-3">
        <div>{{ item.title }}</div>
        <i class="text-primary mx-2">·</i>
        <span>{{ item.createdAt }}</span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: Object
})
</script>

<style lang="less" scoped>
.common-card {
  padding: 16px;
  box-shadow: 0px 5px 50px 0 rgb(8 11 25/1%);
  background: linear-gradient(to right,#fd6f6f 0%,#f1404b 100%);
  margin-bottom: 20px;
  border-radius: 8px;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
  .right-content {
    padding-right: 16px;
    color: white;
    i {
      color: white;
    }
  }
}
</style>