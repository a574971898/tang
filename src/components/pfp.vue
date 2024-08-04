<template>
  <div class="aiLive">
    <div class="pfpbg"></div>
    <div class="joinimg">
      <img src="@/assets/pfp/join.png" alt="" />
    </div>
    <div class="pfpbtns">
      <div class="marl" @click="getpfp()">
        {{ globalParam == "Zh" ? "获取PFP" : "Get PFP" }}
      </div>
      <div @click="mypfp()">
        {{ globalParam == "Zh" ? "我的PFP" : "My PFP" }}
      </div>
    </div>
    <div class="pfpfont">
      <div class="pfpfontbox">
        <div class="pfpfontl">
          [01]
          {{ globalParam == "Zh" ? "获取兑换码" : "Get a redemption code" }}
        </div>
        <div class="pfpfontr">
          {{
            globalParam == "Zh"
              ? "方案一：前往官方合作平台：头号藏品。购买TSCC龙卡（普通、稀有、史诗、传说）。不同等级龙卡将获得对应兑换码，兑换相应组件选择权利。"
              : "1. Option 1: Go to the official partner platform: ToHo Club. Purchase a TSCC Dragon Pass (Common,   Rare, Epic, Legendary). Different levels of Dragon Pass will get corresponding redemption codes, granting rights to choose different traits."
          }}<br /><br />
          {{
            globalParam == "Zh"
              ? "方案二：前往官方抽奖网站，抽取兑换码，开箱确定PFP等级"
              : "Option 2: Go to the official claim site, exchange your redemption codes, and claim to reveal the rarity of your PFP."
          }}<br /><br />
        </div>
      </div>
      <div class="pfpfontbox">
        <div class="pfpfontl">
          [02] {{ globalParam == "Zh" ? "专属测试" : "Exclusive Test" }}
        </div>
        <div class="pfpfontr">
          {{
            globalParam == "Zh"
              ? "通过中国传统周易测算，给出独特的PFP组合建议，缘分妙不可言。"
              : "Using traditional Chinese I Ching calculations combined with the energy from your dragon pass, to suggest unique combinations customed for you. "
          }}
        </div>
      </div>
      <div class="pfpfontbox">
        <div class="pfpfontl">
          [03] {{ globalParam == "Zh" ? "PFP组合" : "PFP Combination" }}
        </div>
        <div class="pfpfontr">
          {{
            globalParam == "Zh"
              ? "上百艺术家精心设计的PFP组件，可以尽情发挥您的创意，组合出您最喜欢的形象。"
              : " Hand drawn by over 100 individual artists, you can let your imagination run free when choosing your one and only unique piece."
          }}
        </div>
      </div>
      <div class="pfpfontbox pfpmarb">
        <div class="pfpfontl">
          [04] {{ globalParam == "Zh" ? "铸造" : "Mint" }}
        </div>
        <div class="pfpfontr">
          {{
            globalParam == "Zh"
              ? "完成心仪PFP组合后，一键将它铸造到您的钱包，即可进入Tang的奇幻AI元宇宙世界！"
              : "After completing your desired  PFP combination, mint it and prepare to enter the magical world of Tang!"
          }}
        </div>
      </div>
      <div class="xian" v-if="fishflag">
        <img :src="imgurl" alt="">
      </div>
      <div class="xiantwo" v-else>
        <img :src="imgurl" alt="">
      </div>
      <div class="dian dian1"></div>
      <div class="quan quan1" v-show="num1falg"></div>
      <div class="dian dian2"></div>
      <div class="quan quan2" v-show="num2falg"></div>
      <div class="dian dian3"></div>
      <div class="quan quan3" v-show="num3falg"></div>
      <div class="dian dian4"></div>
      <div class="quan quan4" v-show="num4falg"></div>
    </div>
    <div class="join">
        <div class="iconbox">
            <div>加入我们</div>
        </div>
      <div>
        <video
          ref="videoPlayer"
          id="myVideo"
          width="881"
          height="881"
          autoplay="autoplay"
          muted
          loop
          @ended="onVideoEnded"
          class="videos"
        >
          <source src="../assets/pfp/PFP.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aiLive",
  computed: {
    globalParam() {
      return this.$store.getters.globalParam;
    },
  },
  data() {
    return {
      lastScrollPosition: 0,
      xianflag: true,
      styleObject: {
        position: "absolute",
        top: "0",
      },
      styleObjects: {
        position: "fixed",
        top: "50%",
      },
      num1falg: false,
      num2falg: false,
      num3falg: false,
      num4falg: false,
      imgurl: require('@/assets/fish/Fish_0.png'),
      fishflag:false,
    };
  },
  created() {},
  methods: {
    handleScroll() {
       const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const totalScroll = document.documentElement.scrollHeight - windowHeight;
    const scrollPercent = (scrollTop / totalScroll) * 400;
    function getnum(){
        if(scrollPercent>100&&scrollPercent<=200){
            return Math.round(200 - scrollPercent)
        }else if(scrollPercent>200&&scrollPercent<=300){
            return Math.round(scrollPercent - 200)
        }else if(scrollPercent>300&&scrollPercent<=400){
            return Math.round(400 - scrollPercent)
        }else{
            return Math.round(scrollPercent)
        }
    }
    var num = getnum()
    if(scrollPercent<=40 || scrollPercent>=380){
        this.fishflag = false
    }else{
        this.fishflag = true
    }
    
    this.imgurl = require(`@/assets/fish/Fish_${num}.png`)
    },
    mypfp() {
      this.$router.push("/mypfp");
    },
    getpfp() {
      this.$router.push("/getpfp");
    },
    onVideoEnded() {
      const video = this.$el.querySelector("video");
      video.load();
      video.play();
    },
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
.pfpbg {
  height: 880px;
  background: url(../assets/pfp/pfpbg.png) no-repeat 0% 0%;
  background-position: center;
  display: flex;
  justify-content: center;
}
.joinimg {
  margin-top: -280px;
  text-align: center;
}
.pfpbtns {
  text-align: center;
  display: flex;
  justify-content: center;
  > div {
    width: 400px;
    height: 80px;
    background: rgba(222, 222, 222, 0.1);
    border-radius: 16px 16px 16px 16px;
    text-align: center;
    line-height: 80px;
    font-family: PingFang HK, PingFang HK;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
  }
  .marl {
    margin-right: 40px;
  }
  > div:hover {
    background: #ffc40c;
    color: #111;
  }
}
.pfpfont {
  margin: 100px 0 0;
  padding-top: 200px;

  .pfpfontbox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 488px;
    .pfpfontl {
      font-family: PingFang HK, PingFang HK;
      font-weight: 300;
      font-size: 80px;
      color: #ffffff;
      line-height: 94px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .pfpfontr {
      width: 480px;
      font-family: PingFang HK, PingFang HK;
      font-weight: 400;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.5);
      line-height: 21px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      vertical-align: middle;
    }
  }
  .pfpmarb {
    margin-bottom: 0;
  }
  position: relative;
  .xian {
    position:fixed;
    left: calc(50% - 250px);
    top: 200px;
    z-index: 100;
  }
  .xiantwo{
    position: absolute;
    left: calc(50% - 250px);
    bottom: -500px;
  }
  .guangxian {
    position: absolute;
    width: 3px;
    height: 24px;
    background: rgba(255, 255, 255, 1);
    left: calc(50% - 1.5px);
    top: 0;
    box-shadow: 0px 0 8px 0px #ffffff;
    border-radius: 0px 0px 0px 0px;
    z-index: 10;
  }
  .dian {
    position: absolute;
    width: 12px;
    height: 12px;
    background: rgb(250, 241, 241);
    left: calc(50% - 6px);
    top: 0;
    box-shadow: 0px 0 28px 0px #fa2643, 0px 0 28px 0px rgba(255, 255, 255, 0.6),
      0px 0 28px 0px #fa2643, 0px 0 28px 0px #fa2643, 0px 0 28px 0px #fa2643,
      0px 0 28px 0px #fa2643, 0px 0 28px 0px #fa2643;
    border-radius: 50%;
  }
  .quan {
    position: absolute;
    width: 60px;
    height: 60px;
    left: calc(50% - 31px);
    top: 0;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  .dian1 {
    top: 260px;
  }
  .quan1 {
    top: 235px;
  }
  .dian2 {
    top: 860px;
  }
  .quan2 {
    top: 835px;
  }
  .dian3 {
    top: 1440px;
  }
  .quan3 {
    top: 1415px;
  }
  .dian4 {
    top: 2024px;
  }
  .quan4 {
    top: 1999px;
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.element {
  animation: zoomIn 2s 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.join {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  height: 600px;
  .iconbox{
    width: 40vw;
    height: 700px;
    font-size: 50px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: end;
  }
}
</style>