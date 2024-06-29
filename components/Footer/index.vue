<template>
  <footer class="footer" style="opacity: 1">
    <div class="footer-inner">
      <div id="gtranslate" class="google-translate">
        <i class="fa fa-language"></i>
        <div id="google_translate_element"></div>
      </div>
      <div class="copyright">
        Copyright ©
        <span itemprop="copyrightYear">{{ currentYear }}</span>
        <span class="with-love"><i class="fa fa-heart"></i></span>
        <span class="author ml-[4px]" itemprop="copyrightHolder">{{ projectInfo.author }} All Rights Reserved.</span>
      </div>
      <div class="powered-by">
        由
        <a href="https://www.gotribe.cn" target="_blank">GoTribe</a>
        &
        <a href="https://www.mactribe.cn" target="_blank">微椒网络</a>
        强力驱动
      </div>
      <div class="beian">
        <div v-if="projectInfo.icp" v-html="projectInfo.icp"></div>
        <img v-if="projectInfo.icp && projectInfo.publicSecurity" src="../../asset/images/gongan.png" style="height:18px;width:20px;" alt="沪公网安备" />
        <div v-if="projectInfo.publicSecurity" v-html="projectInfo.publicSecurity"></div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useProjectStore } from '~/store/project'

const { projectInfo } = useProjectStore()

const currentDate = new Date()
const currentYear = currentDate.getFullYear()

</script>
<style lang="less" scoped>
.footer {
  background: #e5e7ea;
  .footer-inner {
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1100px;
    .google-translate {
      display: flex;
      justify-content: center;
    }
    .powered-by {
      display: flex;
    }
    .beian {
      display: flex;
    }
    .vendors-list {
      display: flex;
    }
  }
  /deep/ a {
    border-bottom: 1px solid #999;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
    overflow-wrap: break-word;
    margin: 0 4px;
  }
}
</style>
