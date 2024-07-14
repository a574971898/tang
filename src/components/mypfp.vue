<template>
  <div class="mypfp">
    <div class="bg"></div>
    <div class="pfptit" style="position: relative">我的PFP</div>
    <div class="kong" style="position: relative" v-if="pfpdata.length == 0">
      <img src="@/assets/other/kong.png" alt="" srcset="" />
      <div class="boxcenter">
        <div class="getbtn">获取PFP</div>
      </div>
    </div>
    <div class="pfplist" v-else>
      <div class="listbox" v-for="(item, index) in pfpdata" :key="index">
        <div class="listboxs">
          <img
            v-if="item.lv == 1"
            src="../assets/other/Lv1.png"
            alt=""
            srcset=""
          />
          <img
            v-if="item.lv == 2"
            src="../assets/other/Lv2.png"
            alt=""
            srcset=""
          />
          <img
            v-if="item.lv == 3"
            src="../assets/other/Lv3.png"
            alt=""
            srcset=""
          />
          <img
            v-if="item.lv == 4"
            src="../assets/other/Lv4.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="lv lv1" v-if="item.lv == 1">lv 1 普通</div>
        <div class="lv lv2" v-if="item.lv == 2">lv 2 稀有</div>
        <div class="lv lv3" v-if="item.lv == 3">lv 3 史诗</div>
        <div class="lv lv4" v-if="item.lv == 4">lv 4 传说</div>
        <div
          @click="gotoindex()"
          v-if="(item.status == 1 || item.status == 2) && item.lv == 1"
          class="pfplistbtn btn1"
        >
          {{ item.status == 1 ? "铸造" : "打开" }}
        </div>
        <div
          @click="gotoindex()"
          v-if="(item.status == 1 || item.status == 2) && item.lv == 2"
          class="pfplistbtn btn2"
        >
          {{ item.status == 1 ? "铸造" : "打开" }}
        </div>
        <div
          @click="gotoindex()"
          v-if="(item.status == 1 || item.status == 2) && item.lv == 3"
          class="pfplistbtn btn3"
        >
          {{ item.status == 1 ? "铸造" : "打开" }}
        </div>
        <div
          @click="gotoindex()"
          v-if="(item.status == 1 || item.status == 2) && item.lv == 4"
          class="pfplistbtn btn4"
        >
          {{ item.status == 1 ? "铸造" : "打开" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mypfp",
  data() {
    return {
      pfpdata: [
        {
          lv: 1,
          status: 1,
        },
        {
          lv: 2,
          status: 2,
        },
        {
          lv: 3,
          status: 3,
        },
        {
          lv: 4,
          status: 1,
        },
        {
          lv: 1,
          status: 2,
        },
      ],
    };
  },
  created() {},
  methods: {
    gotoindex(){
       this.$router.push("/test") 
    }
  },
};
</script>
<style lang="less" scoped>
.mypfp {
  min-height: 100vh;
  position: relative;

  .bg {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/other/slice.png) repeat-x 100%;
    background-position-y: 100%;
    z-index: 0;
  }
  .pfptit {
    padding-top: 20vh;
    color: #fff;
    text-align: center;
    font-family: PingFang HK, PingFang HK;
    font-weight: 300;
    font-size: 40px;
    margin-bottom: 97px;
  }
  .kong {
    margin-top: 96px;
    text-align: center;
  }
}
.getbtn {
  width: 160px;
  height: 64px;
  background: #ffffff;
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
.getbtn:hover {
  background: #ffc40c;
}
.boxcenter {
  text-align: center;
}
.pfplist {
  width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .listbox {
    width: 280px;
    height: 400px;
    position: relative;
    margin-bottom: 187px;
    margin-right: 62px;
    .listboxs {
      width: 280px;
      height: 400px;
      position: relative;
      margin-bottom: 187px;
      margin-right: 62px;
      padding: 2px;
      overflow: hidden;
      border-radius: 17px;
      cursor: pointer;
      &:hover::before {
        content: "";
        width: 500px;
        height: 500px;
        position: absolute;
        top: calc(50% - 250px);
        left: calc(50% - 250px);
        background-image: conic-gradient(
          transparent,
          #26b94d,
          #a8b926,
          #f62e2e,
          transparent 50%
        );
        animation: rotate 3.5s linear infinite;
        z-index: 0;
      }
      @keyframes rotate {
        100% {
          rotate: 360deg;
        }
      }
      > img {
        position: absolute;
        width: 280px;
        height: 400px;
        top: 0px;
        left: 0px;
        padding: 2px;
        z-index: 1;
      }
    }

    .lv {
      position: absolute;
      top: 70px;
      right: 20px;
      width: 69px;
      height: 25px;
      border-radius: 100px 100px 100px 100px;
      border: 1px solid #ffffff;
      font-family: PingFang HK, PingFang HK;
      font-weight: 400;
      font-size: 12px;
      color: #ffffff;
      line-height: 25px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      text-align: center;
      z-index: 5;
    }
    .pfplistbtn {
      width: 160px;
      height: 64px;
      background: #ffffff;
      border-radius: 16px 16px 16px 16px;
      position: absolute;
      bottom: -110px;
      left: calc(50% - 80px);
      font-family: PingFang HK, PingFang HK;
      font-weight: 400;
      font-size: 14px;
      color: #111111;
      line-height: 64px;
      text-align: center;
      font-style: normal;
      text-transform: none;
      cursor: pointer;
    }

    .lv2 {
      border: 1px solid #6df6ff;
      color: #6df6ff;
    }
    .btn2 {
      background: #6df6ff;
    }
    .lv3 {
      border: 1px solid #a46dff;
      color: #a46dff;
    }
    .btn3 {
      background: #a46dff;
    }
    .lv4 {
      border: 1px solid #ffc40c;
      color: #ffc40c;
    }
    .btn4 {
      background: #ffc40c;
    }
  }
}
</style>