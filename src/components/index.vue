<template>
  <div class="app" @wheel="handleWheel">
    <div class="videobox">
      <video
        ref="videoPlayer"
        id="myVideo"
        width="320"
        height="240"
        autoplay="autoplay"
        muted
        loop
        @ended="onVideoEnded"
        class="videos"
      >
        <source src="../assets/tang.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="blockfar">
      <div class="scrollbox" >
        <div class="fontbox">
          全球首个 <br />
          Web3+AI驱动的<br />
          <div class="container">
            <div class="scrollfont" :style="{ width: setdu + '%' }">
              intelligence
            </div>
            <div class="son">NFT</div>
          </div>
        </div>
      </div>
      <div
        class="scrollbox block"
        :style="{ width: setdu + '%', height: setdu + '%' }"
      >
        <div class="fontboxs">
          全球首个 <br />
          Web3+AI驱动的<br />
          <div class="container">
            <div class="scrollfont" :style="{ width: setdu + '%' }">
              intelligence
            </div>
            <div class="son">NFT</div>
          </div>
        </div>
      </div>
    </div>
    <div class="scrollfontbox">
      <div :style="{left: setleft + 'px'}">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts"  :style="{left: setleft + 'px'}">
        <div>
          创新的个性定制 PFP * 创新的个性定制 PFP * 创新的个性定制 PFP * 创新的个性定制 PFP * 创新的个性定制 PFP * 创新的个性定制 PFP *
        </div>
      </div>
    </div>
    <div class="cardfont">
        <div class="posifont">每个iNFT都承载着用户的个性、星座、生肖、爱好等属性，用户可根据<br> 喜好自由组合不同部件，使每个NFT独一无二，为用户提供全新表达<br>身份和个性的方式。</div>
        <div class="posicard">
            <div>
                
            </div>
        </div>
    </div>
    <div class="scrollfontbox">
      <div :style="{left: setleft + 'px'}">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts"  :style="{left: setleft + 'px'}">
        <div>
          AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 * AI 社交 *
        </div>
      </div>
    </div>
     <div class="imglist">
         <div class="cardfont">
            <div class="posifont">用户与inft角色进行文字语音互动，建立情感联系，并不断学习和优化<br>，我们提供丰富的社交玩法，期待您的加入。</div>
        </div>
        <div class="guanbox">
            <div class="tit">关云电</div>
            <div class="xian">·</div>
            <img src="@/assets/other/Guan.png" alt="" srcset="">
        </div>
        <div class="guanbox sun">
            <div class="tit">孙心猿</div>
            <div class="xian">·</div>
            <img src="@/assets/other/Sun.png" alt="" srcset="">
        </div>
        <div class="guanbox yi">
            <div class="tit">后裔</div>
            <div class="xian">·</div>
            <img src="@/assets/other/Yi.png" alt="" srcset="">
        </div>
        <div class="guanbox zhao">
            <div class="tit">赵灵</div>
            <div class="xian">·</div>
            <img src="@/assets/other/Zhao.png" alt="" srcset="">
        </div>
     </div>
     <div class="scrollfontbox">
      <div :style="{left: setleft + 'px'}">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts"  :style="{left: setleft + 'px'}">
        <div>
          中国首个 AI 西部小镇——赛博长安 * 中国首个 AI 西部小镇——赛博长安 * 中国首个 AI 西部小镇——赛博长安 * 中国首个 AI 西部小镇——赛博长安 *
        </div>
      </div>
    </div>
     <div class="cardfont">
        <div class="posifont">赛博长安是The Sandbox中的社交中心，每个iNFT都是你在元宇宙中的分身，可以在其中与其他用户互动。体验AI东方玄幻元宇宙。</div>
        <div class="posibgs">
        </div>
    </div>
     <div class="scrollfontbox">
      <div :style="{left: setleft + 'px'}">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts"  :style="{left: setleft-100 + 'px'}">
        <div>
          唐人街元宇宙规划 * 唐人街元宇宙规划 * 唐人街元宇宙规划 * 唐人街元宇宙规划 * 唐人街元宇宙规划 * 唐人街元宇宙规划 *
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "aiLive",
  data() {
    return {
      lastScrollPosition: 0,
      fontfalg: false,
      setdu: 0,
      setleft: -300,
    };
  },
  created() {
   
  },
  methods: {
    updateViewportSize() {
      var video = document.getElementById("myVideo");
      video.width = window.innerWidth || document.documentElement.clientWidth;
      video.height =
        window.innerHeight || document.documentElement.clientHeight;
    },
    playVideo() {
      const video = this.$el.querySelector("video");
      if (video) {
        video.play().catch((error) => {
          console.error("Auto play failed", error);
        });
      }
    },
    onVideoEnded() {
      const video = this.$el.querySelector("video");
      video.load();
      video.play();
    },
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > this.lastScrollPosition) {
        // 向下滚动
        if (window.scrollY >= window.innerHeight && this.setdu < 100 ) {
          this.lockScroll();
        }
        this.setleft += 5;
      } else {
        // 向上滚动
        if (window.scrollY <= window.innerHeight && this.setdu > 1 ) {
          this.lockScroll();
        }
        this.setleft -= 5;
      }
      console.log(this.lastScrollPosition,123);
      this.lastScrollPosition = currentScrollPosition;
    },
    handleWheel(event) {
      // 处理滚轮事件
      
      if (event.deltaY > 0 && window.scrollY >= window.innerHeight ) {
        this.setdu += 2;
        if(window.scrollY >= window.innerHeight*2+100){
            this.setdu = 100;
        }
        if (this.setdu >= 100) {
          this.setdu = 100;
          this.unlockScroll();
        }else{
            window.scrollTo({
                top: window.innerHeight,behavior: "smooth"
            });
        }
      }
      if (event.deltaY < 0 && window.scrollY <= window.innerHeight) {
        this.setdu -= 2;
        if (this.setdu <= 0) {
          this.setdu = 0;
          this.unlockScroll();
        }else{
            window.scrollTo({
                top: window.innerHeight,behavior: "smooth"
            });
        }
      }

      // event.deltaY 可以获取滚轮的方向和距离
    },
    lockScroll() {
      document.body.classList.add("no-scroll");
    },
    unlockScroll() {
      document.body.classList.remove("no-scroll");
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateViewportSize);
    window.removeEventListener("scroll", this.handleScroll);
    this.unlockScroll();
  },
  mounted() {
      this.unlockScroll();
      window.addEventListener("scroll", this.handleScroll);
      this.updateViewportSize();
      window.addEventListener("resize", this.updateViewportSize);
      setTimeout(() => {
          this.playVideo();
          this.unlockScroll();
    }, 10);
  },
};
</script>
<style lang="less" scoped>
.videobox{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .videos{
        position: absolute;
        top: 0;
        left: calc(50% - 50vw);
    }
}
.scrollbox {
  height: 100vh;
  width: 100%;
  background: #ece8e1;
  position: relative;
  .container {
    display: flex;
  }
  .scrollfont {
    width: 0;
    overflow: hidden;
  }
  .son {
  }
  .fontbox {
    font-family: PingFang HK, PingFang HK;
    font-weight: 300;
    font-size: 150px;
    color: #111111;
    line-height: 200px;
    letter-spacing: 2px;
    text-align: left;
    width: 1165px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.blockfar {
  position: relative;
}
.block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../assets/indexbg.png) no-repeat 0% 0%;
  background-position: center;
  background-size: 100% 100%;
  width: 0;
  height: 0;
  overflow: hidden;
  .fontboxs {
    font-family: PingFang HK, PingFang HK;
    font-weight: 300;
    font-size: 150px;
    color: #fff;
    line-height: 200px;
    letter-spacing: 2px;
    text-align: left;
    width: 1165px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.scrollfontbox {
  margin-top: 100px;
  position: relative;
  background: #111111;
  width: 100vw;
  height: 300px;
  > div {
    position: absolute;
    display: flex;
  }
  .fonts{
    top: 150px;
    white-space:nowrap;
    font-family: PingFang HK, PingFang HK;
    font-weight: 300;
    font-size: 120px;
    color: #FFFFFF;
    line-height: 141px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
.cardfont{
    margin-bottom: 160px;
    .posifont{
        font-family: PingFang HK, PingFang HK;
        font-weight: 400;
        font-size: 18px;
        color: rgba(255,255,255,0.5);
        line-height: 21px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin: 160px 40px 30px;

    }
    .posicard{
        background: url(../assets/index_show.png) no-repeat 0% 0%;
        background-position: center;
        height: 400px;
        >div{
            width: 80px;
            height: 80px;
        }
    }
    .posibgs{
        background: url(../assets/jiebg.png) no-repeat 0% 0%;
        background-position: center;
        height: 1000px;
    }
}
.imglist{
    width: 100%;
    height: 100vh;
    min-height: 1200px;
    padding-top: 200px;
    position: relative;
    background: url(../assets/Glow.png) no-repeat 0% 0%;
    background-position: 0 100%;
    .posifont{
        font-family: PingFang HK, PingFang HK;
        font-weight: 400;
        font-size: 18px;
        color: rgba(255,255,255,0.5);
        line-height: 21px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin: 0 40px 30px;

    }
    .guanbox{
        position: absolute;
        width: 600px;
        height: 600px;
        left: 0px;
        bottom: 0px;
        opacity: 0px;
        z-index: 1;

        >img{
            width: 100%;
            height: 100%;
            filter: blur(8px);
        }
    &:hover{
        >img{
            filter: blur(0);
        }
    }
    }
    .sun{
        width: 900px;
        height: 900px;
        left: 18%;
        z-index: 3;
    }
    .yi{
        width: 722px;
        height: 722px;
        left: 48%;
        z-index: 2;
    }
    .zhao{
        width: 600px;
        height: 600px;
        left: 75%;
        z-index: 1;
    }
    .xian{
        position: absolute;
        width: 1px;
        height: 100px;
        top: -100px;
        left: calc(50% - 0.5px);
        color: #fff;
        background: #fff;
        line-height: 0px;
        text-align: left;
        font-size: 34px;
        text-indent: -3px;
    }
    .tit{
        position: absolute;
        top: -110px;
        left: calc(50% + 20px);
        color: #fff;
    }
}
</style>