<template>
  <div class="wrapper">
    <div class="left_box">
      <div class="tit_wrapper">
        <img src="@/assets/logo.png" alt="" srcset="" />
      </div>
      <div class="tit_nav">
        <div :class="{ active: active == 1 }" @click="gotoindex(1)">
          [ 01 ] {{globalParam=='Zh'?'首页':'Home'}}
        </div>
        <div :class="{ active: active == 2 }" @click="gotoindex(2)">
          [ 02 ] PFP 
        </div>
        <div :class="{ active: active == 3 }" @click="gotoindex(3)">
          [ 03 ] {{globalParam=='Zh'?'创世百汇':'CyberDAO'}}
        </div>
      </div>
    </div>
       
    <div class="login_btns">
      <div class="langbtn" @click="setlang()">{{ globalParam=='Zh'?'Zh':'En' }}</div>
      <img src="@/assets/icon_Vol.png" alt="" srcset=""  @click="togglePlay" />
      <audio ref="audio"  @ended="handleEnded"  muted autoplay>
            <source src="@/assets/tang.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
      <div class="loginbtn" >
        <span v-if="resaddr == undefined||resaddr == ''" @click="getinit()">
            {{globalParam=='Zh'?'链接钱包':'Connect Wallet'}} <img src="@/assets/arrow.png" alt="" srcset="" />
        </span>
        <span v-else>
            钱包：{{ resaddr }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  name: "navMenu",
  props: {},
  components: {},
  data() {
    return {
      active: 1,
      resaddr:sessionStorage.res,
      isplaying:true,
    };
  },
  computed: {
    globalParam() {
      return this.$store.getters.globalParam;
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    if (this.$route.fullPath == "/") {
      this.active = 1;
    } else if (this.$route.fullPath == "/member") {
      this.active = 3;
    } else {
      this.active = 2;
    }
  },
  methods: {
    setlang(){
        if(this.globalParam == 'Zh'){
            this.$store.commit('SET_GLOBAL_PARAM', 'En')
        }else{
            this.$store.commit('SET_GLOBAL_PARAM', 'Zh')
        }
    },
    togglePlay() {
      const audio = this.$refs.audio;
      if (!!this.isplaying) {
        // 如果正在播放，则暂停
        console.log(1)
        audio.pause();
      } else {
        // 如果未播放，则播放
        console.log(2,this.isplaying)
        audio.play();
      }
      // 更新播放状态
      this.isplaying = !this.isplaying;
    },
    // 音频播放结束时的处理（可选）
    handleEnded() {
      // 例如，可以重置播放状态
    //   this.isPlaying = false;
      // 或者执行其他逻辑
    },
    gotoindex(index) {
      if (index == 1) {
        this.active = 1;
        this.$router.push("/");
      } else if (index == 2) {
        this.active = 2;
        this.$router.push("/pfp");
      } else if (index == 3) {
        this.active = 3;
        this.$router.push("/member");
      }
    },
    getinit() {
      var web3Provider;
      if(window.ethereum){
        web3Provider = window.ethereum;
        try{
            window.ethereum.enable().then((res)=>{
                console.log(res[0]);
                sessionStorage.res = res[0]
                this.resaddr = res[0]
            })
        } catch(error){
            console.error(error,"error")
        }
      } else if(window.web3){
        web3Provider = window.web3.currentProvider;
      } else {
        web3Provider = new Web3.providers.HttpProvider("http://localhost:8082")
      }
      this.$web3 = new Web3(web3Provider);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: fixed;
  background: #ffffff00;
  height: 72px;
  padding: 0 40px 0 40px;
  min-width: calc(100vw - 80px);
  top: 0px;
  left: 0px;
  z-index: 10000;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  .left_box {
    display: flex;
  }
}
.tit_wrapper {
  padding: 15px 0;
}
.tit_nav {
  line-height: 72px;
  height: 72px;
  font-size: 14px;
  color: #fff;
  display: flex;
  margin-left: 150px;
  > div {
    margin-left: 40px;
    cursor: pointer;
    position: relative;
  }
  .active::before {
    content: "";
    position: absolute;
    left: 10%;
    bottom: -2px;
    display: block;
    width: 80%;
    height: 4px;
    background-color: #fff;
  }
}
.login_btns {
  margin-right: 40px;
  padding: 15px 0;
  display: flex;
  align-content: center;
  .langbtn{
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 100px 100px 100px 100px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    margin-right: 30px;
    &:hover{
        background: #FFC40C;
        color: #000;
        span{
            color: #000;
        }
    }
  }
  .loginbtn {
    width: 140px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #ffffff;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
    overflow: hidden;
    padding: 0 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    span{
        color: #fff;
    }
    &:hover{
        background: #FFC40C;
        color: #000;
        span{
            color: #000;
        }
    }
  }
  > img {
    cursor: pointer;
  }
  
}
</style>