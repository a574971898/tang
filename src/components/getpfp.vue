<template>
  <div class="getpfp">
    <div class="getcard">
        <img src="@/assets/other/code.png" alt="">
    </div>
    <div class="boxcenter">
        <input class="inputbox" type="text" placeholder="请输入兑换码">
    </div>
    <div class="boxcenter">
        <div class="getbtn">
            立即兑换
        </div>
    </div>
    <div class="boxcenter">
        <div class="getcode">
            没有兑换码？点击立刻获取
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "getpfp",
  data() {
    return {
    
    };
  },
  created() {
   
  },
  methods: {
   
  },
 
};
</script>
<style lang="less" scoped>
    .getpfp{
        min-height: 100vh;
        background: url(../assets/other/slice.png) repeat-x 100%;
        background-position-y: 100%;
        .getcard{
            text-align: center;
            padding-top: 20vh;
        }
    }
    .inputbox{
        width: 400px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        background: rgba(255,255,255,0.1);
        border-radius: 16px 16px 16px 16px;
        font-family: Futura, Futura;
        font-weight: 500;
        font-size: 24px;
        color: rgba(255,255,255,1);
        text-align: center;
        font-style: normal;
        text-transform: none;
        border: 0;
    }
    .inputbox::-webkit-input-placeholder{
         color: rgba(255,255,255,0.5);
    }
    .getbtn{
        width: 160px;
        height: 64px;
        background: #FFFFFF;
        border-radius: 16px 16px 16px 16px;
        display: inline-block;
        font-family: PingFang HK, PingFang HK;
        font-weight: 500;
        font-size: 14px;
        color: #111111;
        line-height: 64px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        margin-top: 72px;
        cursor: pointer;
    }
    .getbtn:hover{
        background: #FFC40C;
    }
    .boxcenter{
        text-align:center;
    }
    .getcode{
        color: #FFFFFF;
        margin-top: 24px;
        cursor: pointer;
    }
</style>