<template>
  <div class="footer">
    <div class="footer_card">
      <div class="fontbox">
        <div @click="gotomiit()">增值电信业务经营许可证(含ICP及EDI业务许可 )</div>
        <div @click="gotoicp()">ICP备案：京ICP备2024065272号</div>
        <div @click="gotowan()">网安备案</div>
      </div>
      <!-- <div class="imgbox">
        <div>
          扫码下载APP
        </div>
        <div>
          商务合作
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  props: [],
  data() {
    return {
    }
  },
  created() {

  },
  methods: {
    gotoicp(){
      // window.open("https://tsm.miit.gov.cn/dxxzsp/xkz/xkzgl/resource/qiyesearch.jsp?num=2024065272")
      window.open("https://beian.miit.gov.cn/#/Integrated/index")
    },
    gotowan(){
      window.open("http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=") 
    }, gotomiit() {
      window.open("https://tsm.miit.gov.cn/#/home") 
    }
  }, 
}
</script>

<style lang="less" scoped>
.footer {
  min-width: 1440px;
  background: #051247;
  padding: 80px 0 60px;
  margin:  0 auto;
}

.footer_card {
  width: 1200px;
  margin: auto;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  display: flex;
  justify-content: space-between;

  .imgbox {
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 30px;

    div {
      margin-left: 32px;
    }
  }
}

.fontbox {
  div {
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>