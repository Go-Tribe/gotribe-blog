<template>
  <div class="block-empty"><div class="font-theme text-primary text-404">404</div><div class="text-muted">抱歉，没有你要找的内容...</div></div>
</template>



<style lang="less" scoped>
.block-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 50vh;
  .text-404 {
    font-size: 8rem;
    text-shadow: 5px 5px 1px rgb(255 87 69/20%);
  }
  .text-primary {
    color: #fd6e6e;
  }
  .text-muted {
    color: #8c98a3;
  }
}
</style>