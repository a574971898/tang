<template>
  <div id="app">
    <navtitle> </navtitle>
    <router-view />
    <!-- <footers></footers> -->
  </div>
</template>

<script>
// import Vue from 'vue'
import navtitle from "@/components/common/navTitle";
// import footers from "@/components/common/footer";
export default {
  name: 'App',
  data(){
    return{
      
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
    navtitle,
    // footers,
  },
}
</script>

<style lang="less" scoped>

#app{
  min-width: 1440px;
  min-height: 100vh;
  background: #111111;
  position: relative;
  height: auto;
  font-family: HanSongSiYuan-Medium;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
#app::-webkit-scrollbar {
  width: 0;
  height: 0;
}
 
</style>

