<template>
  <div class="app" @wheel="handleWheel">
    <div class="videobox">
        <div>全球首个Web3+AI驱动的<br>iNFT</div>
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
    <!-- <div class="blockfar">
      <div class="scrollbox">
        <div class="fontbox">
          {{ globalParam == "Zh" ? "全球首个" : "The World's First" }}<br />
          {{ globalParam == "Zh" ? "Web3+AI驱动的" : "Web3+AI-Driven" }}<br />
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
          {{ globalParam == "Zh" ? "全球首个" : "The World's First" }}<br />
          {{ globalParam == "Zh" ? "Web3+AI驱动的" : "Web3+AI-Driven" }}<br />
          <div class="container">
            <div class="scrollfont" :style="{ width: setdu + '%' }">
              intelligence
            </div>
            <div class="son">NFT</div>
          </div>
        </div>
      </div>
    </div> -->
    
    <div class="scrollfontbox">
      <div :style="{ left: setleft + 'px' }">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts" :style="{ left: setleft + 'px' }">
        <div>
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
          {{ globalParam == "Zh" ? "AI 社交 * " : "AI Social * " }}
        </div>
      </div>
    </div>
    <div class="imglist">
      <div class="cardfont">
        <div class="posifont">
          {{
            globalParam == "Zh"
              ? "用户与inft角色进行文字语音互动，建立情感联系，并不断学习和优化"
              : "Users interact with iNFT characters through text and voice, creating emotional connections while continuously learning and optimizing."
          }}
          <br />
          {{
            globalParam == "Zh"
              ? "，我们提供丰富的社交玩法，期待您的加入。"
              : "We are happy to have you join us on this revolutionary journey for the future of social networking. "
          }}
        </div>
      </div>
      <div></div>
      <div class="guanbox">
        <div class="tit"  @click="togglePlay(1)">
          {{ globalParam == "Zh" ? "关云电" : "Guan Yun Dian" }}
        </div>
        <audio ref="audio1" >
            <source src="@/assets/mp3/guan.wav" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
        <div class="xian">·</div>
        <img src="@/assets/other/Guan.png" alt="" srcset="" />
      </div>
      <div class="guanbox sun">
        <div class="tit"  @click="togglePlay(2)">
          {{ globalParam == "Zh" ? "孙心猿" : "Sun Xin Yuan" }}
        </div>
        <audio ref="audio2" >
            <source src="@/assets/mp3/sun.wav" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
        <div class="xian">·</div>
        <img src="@/assets/other/Sun.png" alt="" srcset="" />
      </div>
      <div class="guanbox yi">
        <div class="tit"  @click="togglePlay(3)">{{ globalParam == "Zh" ? "后裔" : "Hou Yi" }}</div>
        <audio ref="audio3" >
            <source src="@/assets/mp3/hou.wav" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
        <div class="xian">·</div>
        <img src="@/assets/other/Yi.png" alt="" srcset="" />
      </div>
      <div class="guanbox zhao">
        <div class="tit"  @click="togglePlay(4)">{{ globalParam == "Zh" ? "赵灵" : "Zhao Ling" }}</div>
        <audio ref="audio4" >
            <source src="@/assets/mp3/zhao.wav" type="audio/wav">
            Your browser does not support the audio element.
        </audio>
        <div class="xian">·</div>
        <img src="@/assets/other/Zhao.png" alt="" srcset="" />
      </div>
    </div>
    <div class="scrollfontbox">
      <div :style="{ left: setleft + 'px' }">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts" :style="{ left: setleft + 'px' }">
        <div>
          {{
            globalParam == "Zh"
              ? "创新的个性定制 PFP * 创新的个性定制 PFP *"
              : "Personalized Custom PFP * To showcase your Innovative Personality *"
          }}
          {{
            globalParam == "Zh"
              ? "创新的个性定制 PFP * 创新的个性定制 PFP *"
              : "Personalized Custom PFP * To showcase your Innovative Personality *"
          }}
          {{
            globalParam == "Zh"
              ? "创新的个性定制 PFP * 创新的个性定制 PFP *"
              : "Personalized Custom PFP * To showcase your Innovative Personality *"
          }}
        </div>
      </div>
    </div>
    <div class="cardfont">
      <div class="posifont">
        {{
          globalParam == "Zh"
            ? "每个iNFT都承载着用户的个性、星座、生肖、爱好等属性，用户可根据"
            : "Each iNFT carries attributes such as the user's personality, "
        }}
        <br />
        {{
          globalParam == "Zh"
            ? "喜好自由组合不同部件，使每个NFT独一无二，为用户提供全新表达"
            : "zodiac signs, hobbies, and more. iNFT owners are able to customize their own traits according to their preferences, making each NFT unique 1 of 1, "
        }}
        <br />
        {{
          globalParam == "Zh"
            ? "身份和个性的方式。"
            : "providing a new way for users to express their identity and personality through this NFT. "
        }}
      </div>
      <div class="posicard">
        <div class="posison son1" @mouseenter="handleMouseEnter('0', $event)" @mouseleave="handleMouseLeave('0', $event)"></div>
        <div class="posison son2" @mouseenter="handleMouseEnter('1', $event)" @mouseleave="handleMouseLeave('1', $event)"></div>
        <div class="posison son3" @mouseenter="handleMouseEnter('2', $event)" @mouseleave="handleMouseLeave('2', $event)"></div>
        <div class="posison son4" @mouseenter="handleMouseEnter('3', $event)" @mouseleave="handleMouseLeave('3', $event)"></div>
        <div class="posison son5" @mouseenter="handleMouseEnter('4', $event)" @mouseleave="handleMouseLeave('4', $event)"></div>
        <div class="posison son6" @mouseenter="handleMouseEnter('5', $event)" @mouseleave="handleMouseLeave('5', $event)"></div>
        <div class="posison son7" @mouseenter="handleMouseEnter('6', $event)" @mouseleave="handleMouseLeave('6', $event)"></div>
        <div class="posiboximg">
            <img :src="activeimglist[6]" alt="" srcset="">
            <img :src="activeimglist[5]" alt="" srcset="">
            <img :src="activeimglist[4]" alt="" srcset="">
            <img :src="activeimglist[3]" alt="" srcset="">
            <img :src="activeimglist[1]" alt="" srcset="">
            <img :src="activeimglist[2]" alt="" srcset="">
            <img :src="activeimglist[0]" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="scrollfontbox">
      <div :style="{ left: setleft + 'px' }">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts" :style="{ left: setleft + 'px' }">
        <div>
          {{
            globalParam == "Zh"
              ? "中国首个 AI 西部小镇——赛博长安 * "
              : "China's First AI Smallville—Cyber Chang'an * "
          }}
          {{
            globalParam == "Zh"
              ? "中国首个 AI 西部小镇——赛博长安 * "
              : "China's First AI Smallville—Cyber Chang'an * "
          }}
          {{
            globalParam == "Zh"
              ? "中国首个 AI 西部小镇——赛博长安 * "
              : "China's First AI Smallville—Cyber Chang'an * "
          }}
          {{
            globalParam == "Zh"
              ? "中国首个 AI 西部小镇——赛博长安 * "
              : "China's First AI Smallville—Cyber Chang'an * "
          }}
          {{
            globalParam == "Zh"
              ? "中国首个 AI 西部小镇——赛博长安 * "
              : "China's First AI Smallville—Cyber Chang'an * "
          }}
          {{
            globalParam == "Zh"
              ? "中国首个 AI 西部小镇——赛博长安 * "
              : "China's First AI Smallville—Cyber Chang'an * "
          }}
        </div>
      </div>
    </div>
    <div class="cardfont">
      <div class="posifont">
        {{
          globalParam == "Zh"
            ? "赛博长安是The Sandbox中的社交中心，每个iNFT都是你在元宇宙中的分身，可以在其中与其他用户互动。体验AI东方玄幻元宇宙。"
            : "Cyber Chang'an (China Smallville) located as the main social hub in The Sandbox Chinatown neighbourhood. Every iNFT is an individual in the metaverse, where you can interact and explore more about the beauty of Eastern Oriental Culture."
        }}
      </div>
      <div class="posifar">
        <div class="posibgs" ref="bgbox">
          <div
            class="index1"
            :style="{ transform: `scale(${1 + setbg / 50})` }"
          >
            <img src="../assets/index/1.png" alt="" srcset="" />
          </div>
          <div class="index2" :style="{ top: 500 - setbg * 4 + 'px' }">
            <img src="../assets/index/2.png" alt="" srcset="" />
          </div>
          <div class="index3" :style="{ top: 100 - setbg + 'px' }">
            <img src="../assets/index/3.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
    <div class="scrollfontbox">
      <div :style="{ left: setleft + 'px' }">
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
        <img src="@/assets/dai.png" alt="" />
      </div>
      <div class="fonts" :style="{ left: setleft - 100 + 'px' }">
        <div>
          {{
            globalParam == "Zh"
              ? "唐人街元宇宙规划 * "
              : "Chinatown Metaverse Plan * "
          }}
          {{
            globalParam == "Zh"
              ? "唐人街元宇宙规划 * "
              : "Chinatown Metaverse Plan * "
          }}
          {{
            globalParam == "Zh"
              ? "唐人街元宇宙规划 * "
              : "Chinatown Metaverse Plan * "
          }}
          {{
            globalParam == "Zh"
              ? "唐人街元宇宙规划 * "
              : "Chinatown Metaverse Plan * "
          }}
          {{
            globalParam == "Zh"
              ? "唐人街元宇宙规划 * "
              : "Chinatown Metaverse Plan * "
          }}
          {{
            globalParam == "Zh"
              ? "唐人街元宇宙规划 * "
              : "Chinatown Metaverse Plan * "
          }}
          {{
            globalParam == "Zh"
              ? "唐人街元宇宙规划 * "
              : "Chinatown Metaverse Plan * "
          }}
        </div>
      </div>
    </div>
    <div></div>
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
      fontfalg: false,
      setdu: 0,
      setbg: 0,
      setleft: -500,
      bjinfo: ["Element","Hair", "Face",  "Cloth", "Earrings", "Hand", "bg"],
      imglist:[[
        require("../assets/bg/Elements/Cascading_Water.png"),
        require("../assets/bg/Elements/Frozen_Cubes.png"),
        require("../assets/bg/Elements/Paint_Burst.png"),
        require("../assets/bg/Elements/Sacred_Lotus_Blossom.png"),
        require("../assets/bg/Elements/Scarlet_Smoke.png"),
        require("../assets/bg/Elements/Scattered_Gold.png"),
      ], [
        require("../assets/bg/Facial/Candy_Pink_Goggles.png"),
        require("../assets/bg/Facial/Mask_of_GuanYu.png"),
        require("../assets/bg/Facial/Pointy_Brows.png"),
        require("../assets/bg/Facial/Radiant_Smile.png"),
        require("../assets/bg/Facial/Scarred_Mouth.png"),
        require("../assets/bg/Facial/Tiny_Shades.png"),
      ], [
        require("../assets/bg/Hairstyle/Golden_Headband.png"),
        require("../assets/bg/Hairstyle/Lion_Dance_Headdress.png"),
        require("../assets/bg/Hairstyle/Lunar_Rabbit_Twintails.png"),
        require("../assets/bg/Hairstyle/Silver_Helmet_of_General_Zhao.png"),
        require("../assets/bg/Hairstyle/The_Green_Flash.png"),
        require("../assets/bg/Hairstyle/White_Side_Fringe.png"),
      ], [
        require("../assets/bg/Attire/Arm_of_Cyborg_Suit.png"),
        require("../assets/bg/Attire/Armour_of_the_Silver_Knight.png"),
        require("../assets/bg/Attire/Full_Cyborg_Suit.png"),
        require("../assets/bg/Attire/Gown_of_Chinese_Couture.png"),
        require("../assets/bg/Attire/Robe_of_General_Zhao.png"),
        require("../assets/bg/Attire/Wu_Kong_Huafu_Suit.png"),
      ], [
        require("../assets/bg/Earrings/Golden_Dangle.png"),
        require("../assets/bg/Earrings/Golden_Jade_Tassel.png"),
        require("../assets/bg/Earrings/Imperial_Golden_Tassel.png"),
        require("../assets/bg/Earrings/Jade_Cluster.png"),
        require("../assets/bg/Earrings/Black_Dangle.png"),
        require("../assets/bg/Earrings/Red_Jade_Tassel.png"),
      ],[
        require("../assets/bg/Hands/Apollos_Bow.png"),
        require("../assets/bg/Hands/Chrysanthemum.png"),
        require("../assets/bg/Hands/Golden_Bow.png"),
        require("../assets/bg/Hands/Radiant_Silver_Spear.png"),
        require("../assets/bg/Hands/The_Pipe_.png"),
        require("../assets/bg/Hands/Water_Fan.png"),
      ],[
        require("../assets/bg/Background/Mother_of_Lotus.png"),
        require("../assets/bg/Background/Necromancer_King.png"),
        require("../assets/bg/Background/Nine-Tailed_Fox.png"),
        require("../assets/bg/Background/Raging_Bull_King.png"),
        require("../assets/bg/Background/Scarlet_Bicycle.png"),
        require("../assets/bg/Background/Skull_King.png"),
      ]
      ],
     activeimglist:["","","","","","",""],
     timerId:null
    };
  },
  created() {
    this.setactive()
  },
  methods: {
    togglePlay(index){
        var audio
        if(index == 1)audio = this.$refs.audio1
        if(index == 2)audio = this.$refs.audio2
        if(index == 3)audio = this.$refs.audio3
        if(index == 4)audio = this.$refs.audio4
        console.log(audio);
        audio.play()
    },
    setactive(index){
        var num
        if(index){
            num = index;
            
        }else{
            num = 0;
            for(let a in this.bjinfo){
                this.activeimglist[a] = this.imglist[a][0]
            }

        }
    },
    handleMouseEnter(index, event){
        var num = 0
        this.timerId = setInterval(() => {
            if(num<this.imglist[index].length-1){
                num++
            }else{
                num = 0
            }
            Vue.set(this.activeimglist,index,this.imglist[index][num])
        }, 400);
    },
    handleMouseLeave(){
        clearInterval(this.timerId);
    },
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
        if (window.scrollY >= window.innerHeight && this.setdu < 100) {
        //   this.lockScroll();
        }
        if (window.scrollY >= this.$refs.bgbox.offsetTop && this.setbg < 100) {
          this.bglockScroll();
        }
        this.setleft += 1;
      } else {
        // 向上滚动
        if (window.scrollY <= window.innerHeight && this.setdu > 1) {
        //   this.lockScroll();
        }
        if (window.scrollY <= this.$refs.bgbox.offsetTop && this.setbg > 1) {
          this.bglockScroll();
        }
        this.setleft -= 1;
      }
      this.lastScrollPosition = currentScrollPosition;
    },
    handleWheel(event) {
      // 处理滚轮事件

      if (event.deltaY > 0 && window.scrollY >= window.innerHeight) {
        this.setdu += 2;
        if (window.scrollY >= window.innerHeight * 2 + 100) {
          this.setdu = 100;
        }
        if (this.setdu >= 100) {
          this.setdu = 100;
          this.unlockScroll();
        } else {
        //   window.scrollTo({
        //     top: window.innerHeight,
        //     behavior: "smooth",
        //   });
        }
      }

      if (event.deltaY > 0 && window.scrollY >= this.$refs.bgbox.offsetTop) {
        this.setbg += 2;
        if (window.scrollY >= this.$refs.bgbox.offsetTop > 200) {
          this.setbg = 100;
        }
        if (this.setbg >= 100) {
          this.setbg = 100;
          this.unbglockScroll();
        } else {
          window.scrollTo({
            top: this.$refs.bgbox.offsetTop,
            behavior: "smooth",
          });
        }
      }

      if (event.deltaY < 0 && window.scrollY <= window.innerHeight) {
        this.setdu -= 2;
        if (this.setdu <= 0) {
          this.setdu = 0;
          this.unlockScroll();
        } else {
        //   window.scrollTo({
        //     top: window.innerHeight,
        //     behavior: "smooth",
        //   });
        }
      }

      if (event.deltaY < 0 && window.scrollY <= this.$refs.bgbox.offsetTop) {
        this.setbg -= 2;
        if (this.setbg <= 0) {
          this.setbg = 0;
          this.unbglockScroll();
        } else {
          window.scrollTo({
            top: this.$refs.bgbox.offsetTop,
            behavior: "smooth",
          });
        }
      }

      // event.deltaY 可以获取滚轮的方向和距离
    },
    lockScroll() {
      document.body.classList.add("no-scroll");
    },
    bglockScroll() {
      document.body.classList.add("noscroll");
    },
    unlockScroll() {
      document.body.classList.remove("no-scroll");
    },
    unbglockScroll() {
      document.body.classList.remove("noscroll");
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
.videobox {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  >div{
    position: absolute;
    font-size: 80px;
    top: 244px;
    left: calc(50% - 465px);
    mix-blend-mode: color-dodge;
    z-index: 10;
    color: #fff;
    text-align: center;
    width: 930px;
  }
  .videos {
    position: absolute;
    top: 0;
    left: calc(50% - 50vw);
    object-fit: cover;
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
  .fonts {
    top: 150px;
    white-space: nowrap;
    font-family: PingFang HK, PingFang HK;
    font-weight: 300;
    font-size: 80px;
    color: #ffffff;
    line-height: 141px;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}
.cardfont {
  margin-bottom: 160px;
  .posifont {
    font-family: PingFang HK, PingFang HK;
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin: 160px 40px 30px;
    object-fit: cover;
  }
  .posicard {
    background: url(../assets/index_show.png) no-repeat 0% 0%;
    background-position: left;
    min-height: 400px;
    min-width: 1440px;
    width: 100vw;
    position: relative;
    object-fit: cover;
    > div {
      width: 80px;
      height: 80px;
    }
    .posison {
      position: absolute;
      top: 180px;
    }
    .son1 {
      left: 205px;
      &:hover {
        background: url(../assets/icon/Hover.png) no-repeat;
        background-size: 68% 68%;
        background-position: center;
        z-index: 10;
      }
    }
    .son2 {
      left: 325px;
      &:hover {
        background: url(../assets/icon/Hover1.png) no-repeat;
        background-size: 68% 68%;
        background-position: center;
        z-index: 10;
      }
    }
    .son3 {
      left: 445px;
      &:hover {
        background: url(../assets/icon/Hover2.png) no-repeat;
        background-size: 68% 68%;
        background-position: center;
        z-index: 10;
      }
    }
    .son4 {
      left: 565px;
      &:hover {
        background: url(../assets/icon/Hover3.png) no-repeat;
        background-size: 68% 68%;
        background-position: center;
        z-index: 10;
      }
    }
    .son5 {
      left: 685px;
      &:hover {
        background: url(../assets/icon/Hover4.png) no-repeat;
        background-size: 68% 68%;
        background-position: center;
        z-index: 10;
      }
    }
    .son6 {
      left: 805px;
      &:hover {
        background: url(../assets/icon/Hover5.png) no-repeat;
        background-size: 65% 75%;
        background-position: center;
        z-index: 10;
      }
    }
    .son7 {
      left: 925px;
      &:hover {
        background: url(../assets/icon/Hover6.png) no-repeat;
        background-size: 68% 68%;
        background-position: center;
        z-index: 10;
      }
    }
    .posiboximg{
        width: 400px;
        height: 400px;
        position: relative;
        top: 0px;
        left: 1250px;
        background: #000;
        >img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
  }
  .posifar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    overflow: hidden;
  }
  .posibgs {
    width: 100vw;
    height: 1000px;
    position: relative;
    overflow: hidden;
    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .index1 {
      z-index: 10;
      transition: "transform 0.3s ease";
      transform-origin: center center;
    }
    .index2 {
      z-index: 5;
      top: 500px;
    }
    .index3 {
      z-index: 1;
      top: 100px;
    }
  }
}
.imglist {
  width: 100%;
  height: 100vh;
  min-height: 1200px;
  padding-top: 200px;
  position: relative;
  background: url(../assets/Glow.png) no-repeat 0% 0%;
  background-position: 0 100%;
  .posifont {
    font-family: PingFang HK, PingFang HK;
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 21px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin: 0 40px 30px;
  }
  .guanbox {
    position: absolute;
    width: 600px;
    height: 600px;
    left: 0px;
    bottom: 0px;
    z-index: 1;

    > img {
      width: 100%;
      height: 100%;
      filter: blur(8px);
      transition: transform 0.5s ease-in-out;
      transform-origin: center bottom;
    }
    &:hover {
        z-index: 100;
      > img {
        filter: blur(0);
        transform: scale(1.1);
      }
    }
    >.tit{
        padding: 5px 20px;
        background: rgba(255,255,255,0.2);
        border-radius: 20px;
        cursor: pointer;
    }
    &:hover .tit{
        background: #FFC40C;
        color: #000;
    }
  }
  .sun {
    width: 900px;
    height: 900px;
    left: 18%;
    z-index: 3;
  }
  .yi {
    width: 722px;
    height: 722px;
    left: 48%;
    z-index: 2;
  }
  .zhao {
    width: 600px;
    height: 600px;
    left: 75%;
    z-index: 1;
  }
  .xian {
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
  .tit {
    position: absolute;
    top: -110px;
    left: calc(50% + 20px);
    color: #fff;
  }
}
</style>