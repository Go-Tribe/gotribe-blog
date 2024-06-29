<template>
  <div class="comment">
    <div class="title">
      <i class="iconfont icon-pinglun"></i>
      评论
    </div>
    <div class="comment-form">
      <input type="text" placeholder="昵称" class="input w-full" />
      <input type="text" placeholder="邮箱" class="input" style="width:49%;margin-right:2%;" />
      <input type="text" placeholder="网址" class="input" style="width:49%;"/>
      <textarea placeholder="说点什么" class="textarea w-full" />
      <div class="btn-content">
        <div class="btn">发表评论</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.comment {
  margin-top: 40px;
  .title {
    font-size: 16px;
    font-weight: 500;
    i {
      color: #fb6f6f;
      font-size: 20px;
      margin-right: 8px;
    }
  }
  .comment-form {
    background: #f9f8f8;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    .input {
      --tw-border-opacity: 1;
      border-color: #f2f2f2;
      --tw-bg-opacity: 1;
      color: #8c98a3;
      background-color: #dee0e3;
      height: 44px;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 16px;
      &:focus {
        outline-style: none;
        outline-width: none;
        outline-offset: none;
      }
    }
    .textarea {
      --tw-border-opacity: 1;
      border-color: #f2f2f2;
      --tw-bg-opacity: 1;
      color: #8c98a3;
      background-color: #dee0e3;
      height: 80px;
      font-size: 14px;
      font-weight: 400;
      &:focus {
        outline-style: none;
        outline-width: none;
        outline-offset: none;
      }
    }
    .btn-content {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 10px;
      .btn {
        background: #fd6e6e;
        color: white;
      }
    }
  }
}
</style>