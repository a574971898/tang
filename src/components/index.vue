<template>
  <div class="app">
    <Navtitle :background-image="backgroundIms" :color="backgroundColor" :titles="navTitleText"> </Navtitle>
    <!-- <footerCom> </footerCom> -->
  </div>
</template>

<script>
  import Navtitle from "@/components/common/navTitle";
  import footerCom from "@/components/common/footer";
  export default {
    name: "aiLive",
    data() {
      return {
      
      };
    },
    created() { },
    methods: {
      
    },
    mounted() { },
    components: {
      Navtitle,
      footerCom,
    }
  };
</script>
<style lang="less" scoped>
 
</style>