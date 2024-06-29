<template>
  <div id="app">
    <!-- <navtitle :background-image="backgroundIms" :color="222" :titles="navTitleText"> </navtitle> -->
    <router-view />
    <!-- <footers></footers> -->
  </div>
</template>

<script>
// import Vue from 'vue'
// import navtitle from "@/components/common/navTitle";
// import footers from "@/components/common/footer";
export default {
  name: 'App',
  data(){
    return{
      navTitleText: '文化数字化AI解决方案',
    }
  },
  created(){
    let userAgentInfo = navigator.userAgent;
    let agents = [
      'Android',
      'iPhone',
      'SymbianOs',
      'Windows Phone',
      'ipad',
      'ipod'
    ];
    let flagPc = true;
    for (let i=0; i<agents.length;i++){
      if(userAgentInfo.indexOf(agents[i]) > 0){
        flagPc = false;
        break;
      }
    }
    // if (!flagPc){
    //   location.href = "https://app.touhaoclub.com/"
    // }
  },
  mounted(){
  },
  components: {
    // navtitle,
    // footers,
  },
}
</script>

<style lang="less" scoped>

#app{
  /* min-width: 1200px; */
  overflow-x: auto;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #F6F6F6 100%);
  position: relative;
  height: auto;
  font-family: HanSongSiYuan-Medium;
}
 
</style>

