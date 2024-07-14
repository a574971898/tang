<template>
  <div class="aiLive">
    <div class="pfpbg">
    </div>
    <div class="joinimg" >
        <img src="@/assets/pfp/join.png" alt="">
    </div>
    <div class="pfpbtns">
        <div class="marl" @click="getpfp()">获取PFP</div>
        <div  @click="mypfp()">我的PFP</div>
    </div>
    <div class="pfpfont">
        <div class="pfpfontbox">
            <div class="pfpfontl">[01] 获取兑换码</div>
            <div class="pfpfontr">方案一：前往官方合作平台：头号藏品。购买sandbox龙卡（普通、稀有、诗史、传说）。不同等级龙卡将获得对应兑换码，兑换相应组件选择权利。 <br><br>方案二：前往官方抽奖网站，抽取兑换码，开箱确定PFP等级</div>
        </div>
        <div class="pfpfontbox">
            <div class="pfpfontl">[02] 专属测试</div>
            <div class="pfpfontr">通过中国传统周易测算，给出独特的PFP组合建议，缘分妙不可言。</div>
        </div>
        <div class="pfpfontbox">
            <div class="pfpfontl">[03] 个性定制</div>
            <div class="pfpfontr">上百艺术家精心设计的PFP组件，可以尽情发挥您的创意，组合出您最喜欢的形象。</div>
        </div>
        <div class="pfpfontbox pfpmarb">
            <div class="pfpfontl">[04] 铸造空投</div>
            <div class="pfpfontr">完成心仪PFP组合后，一键将它铸造到您的钱包，即可进入Tang的奇幻AI元宇宙世界！</div>
        </div>
        <div class="xian"></div>
        <div class="guangxian" :style="xianflag?styleObject:styleObjects"></div>
        <div class="dian dian1">
        </div>
        <div class="quan quan1" v-show="num1falg"></div>
        <div class="dian dian2">
        </div>
        <div class="quan quan2" v-show="num2falg"></div>
        <div class="dian dian3">
        </div>
        <div class="quan quan3" v-show="num3falg"></div>
        <div class="dian dian4">
        </div>
        <div class="quan quan4" v-show="num4falg"></div>
    </div>
    <div class="join">
        <div class="joinimg">
            <img src="@/assets/pfp/PFP.png" alt="" srcset="">
        </div>
        <div class="joinbtn">
            <img src="@/assets/pfp/join2.png" alt="" srcset="">
            <div class="pfpbtns">
                <div class="marl" @click="getpfp()">获取PFP</div>
                <div @click="mypfp()">我的PFP</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aiLive",
  data() {
    return {
      lastScrollPosition:0,
      xianflag:true,
      styleObject: {
        position: 'absolute',
        top: '0',
      },
      styleObjects: {
        position: 'fixed',
        top: '50%',
      },
      num1falg: false,
      num2falg: false,
      num3falg: false,
      num4falg: false,
    };
  },
  created() {
   
  },
  methods: {
   handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
        // 向下滚动
        if(window.pageYOffset > 700 && window.pageYOffset < 3100){
            this.xianflag = false;
        }else{
            this.xianflag = true;
        }
        var num1 = 980,num2 = 1580,num3 = 2170,num4 = 2730
        this.num1falg = window.pageYOffset > num1;
        this.num2falg = window.pageYOffset > num2;
        this.num3falg = window.pageYOffset > num3;
        this.num4falg = window.pageYOffset > num4;
    },
    mypfp(){
        this.$router.push("/mypfp")
    },
    getpfp(){
        this.$router.push("/getpfp")
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
      window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
.pfpbg{
    height: 880px;
    background: url(../assets/pfp/pfpgb.png) no-repeat 0% 0%;
    background-position: center;
    display: flex;
    justify-content: center;
   
}
.joinimg{
    margin-top: -280px;
    text-align: center;
}
.pfpbtns{
    text-align: center;
    display: flex;
    justify-content: center;
    >div{
        width: 400px;
        height: 80px;
        background: rgba(222,222,222,0.1);
        border-radius: 16px 16px 16px 16px;
        text-align: center;
        line-height: 80px;
        font-family: PingFang HK, PingFang HK;
        font-weight: 500;
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .marl{
        margin-right: 40px;
    }
    >div:hover{
        background: #FFC40C;
        color: #111;
    }
    
}
.pfpfont{
    margin: 100px 0 300px;
    padding-top: 200px;
    padding-bottom: 300px;

    .pfpfontbox{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 488px;
        .pfpfontl{
            font-family: PingFang HK, PingFang HK;
            font-weight: 300;
            font-size: 80px;
            color: #FFFFFF;
            line-height: 94px;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }
        .pfpfontr{
            width: 480px;
            font-family: PingFang HK, PingFang HK;
            font-weight: 400;
            font-size: 18px;
            color: rgba(255,255,255,0.5);
            line-height: 21px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            vertical-align: middle;
        }
    }
    .pfpmarb{
        margin-bottom: 0;
    }
    position: relative;
    .xian{
        position: absolute;
        width: 1px;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        left: 50%;
        top: 0;
    }
    .guangxian{
        position: absolute;
        width: 3px;
        height: 24px;
        background: rgba(255, 255, 255, 1);
        left: calc(50% - 1.5px);
        top: 0;
        box-shadow: 0px 0 8px 0px #FFFFFF;
        border-radius: 0px 0px 0px 0px;
        z-index: 10;
    }
    .dian{
        position: absolute;
        width: 12px;
        height: 12px;
        background: rgb(250, 241, 241);
        left: calc(50% - 6px);
        top: 0;
        box-shadow: 0px 0 28px 0px #fa2643,0px 0 28px 0px rgba(255, 255, 255, 0.6),0px 0 28px 0px #fa2643,0px 0 28px 0px #fa2643,0px 0 28px 0px #fa2643,0px 0 28px 0px #fa2643,0px 0 28px 0px #fa2643;
        border-radius: 50%;
    }   
    .quan{
        position: absolute;
        width: 60px;
        height: 60px;
        left: calc(50% - 31px);
        top: 0;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
    .dian1{
        top: 260px;
    }
    .quan1{
        top: 235px;
    }
    .dian2{
        top: 860px;
    }
    .quan2{
        top: 835px;
    }
    .dian3{
        top: 1440px;
    }
    .quan3{
        top: 1415px;
    }
    .dian4{
        top: 2024px;
    }
    .quan4{
        top: 1999px;
    }
}
@keyframes zoomIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}
.element {
  animation: zoomIn 2s 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.join{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: 600px;
    .joinimg{
        width: 882px;
        height: 882px;
    }
    .joinbtn{
        margin-right: 100px;
        text-align: center;
        .pfpbtns{
            margin-top: 50px;
            >div{
                width: 386px;
            }
        }
    }
}
</style>