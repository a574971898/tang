<template>
  <div class="setnft">
    <div class="lbox">
        <div class="posiimgbox">
            <img class="zindex1" :src="userimg[6].url" alt="">
            <img class="zindex2" :src="userimg[5].url" alt="">
            <img class="zindex3" :src="userimg[4].url" alt="">
            <img class="zindex4" :src="userimg[3].url" alt="">
            <img class="zindex5" :src="userimg[2].url" alt="">
            <img class="zindex6" :src="userimg[1].url" alt="">
            <img class="zindex7" :src="userimg[0].url" alt="">
        </div>
        <div class="btns" @click="postupimg()">
             
            {{globalParam=='Zh'?'确认形象':"Confirm"}}
        </div>
    </div>
    <div class="rbox">
        <div class="tit">{{globalParam=='Zh'?'已为您生成专属pfp':"Your exclusive PFP has been generated"}}</div>
        <div class="info">{{globalParam=='Zh'?'根据您的信息，为您匹配了专属PFP形象，您还可通过下方组件进行自由调整。（您的兑换码对应等级为':"Based on your personal information, the AI has generated a unique PFP image for you. You can then use the"}}<br v-if="globalParam!='Zh'"/>{{ globalParam!='Zh'?'  components below to custom your PFP. (Your  redemption code corresponds to level':'' }} &nbsp;<img src="@/assets/other/btnlv1.png" alt="" v-if="lv == 1">
                        <img src="@/assets/other/btnlv2.png" alt="" v-if="lv == 2">    
                        <img src="@/assets/other/btnlv3.png" alt="" v-if="lv == 3">
                        <img src="@/assets/other/btnlv4.png" alt="" v-if="lv == 4"> &nbsp;&nbsp;)</div>
        <div class="btnbox">
            <div :class="{index:index == 1}" @click="setindex(1)"> {{globalParam=='Zh'?'元素':"Elements"}}</div>
            <div :class="{index:index == 2}" @click="setindex(2)">{{globalParam=='Zh'?'面部':"Facial "}}</div>
            <div :class="{index:index == 3}" @click="setindex(3)">{{globalParam=='Zh'?'发型':"Hairstyle"}}</div>
            <div :class="{index:index == 4}" @click="setindex(4)">{{globalParam=='Zh'?'服装':"Attire "}}</div>
            <div :class="{index:index == 5}" @click="setindex(5)">{{globalParam=='Zh'?'耳饰':"Earrings"}}</div>
            <div :class="{index:index == 6}" @click="setindex(6)">{{globalParam=='Zh'?'手部':"Hands"}}</div>
            <div :class="{index:index == 7}" @click="setindex(7)">{{globalParam=='Zh'?'背景':"Background"}}</div>
        </div>
        <div class="bjfar">
            <div v-for="(item,indexs) in bjlist[index-1]" :key="indexs">
                <div class="bjbox" :class="{'setindex':userimg[index-1].name == item.name,'noclick':lv<item.level}">
                    <img :src="item.url" alt="" srcset="" @click="setimg(item)">
                    <div class="btnlvbox">
                        <img src="@/assets/other/btnlv1.png" alt="" v-if="item.level == 1">
                        <img src="@/assets/other/btnlv2.png" alt="" v-if="item.level == 2">
                        <img src="@/assets/other/btnlv3.png" alt="" v-if="item.level == 3">
                        <img src="@/assets/other/btnlv4.png" alt="" v-if="item.level == 4">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "setnft",
  data() {
    return {
        lv:'1',
        code:"",
        index: 1,
        bjlist:[[],[],[],[],[],[],[]],
        bjinfo: ['element', 'face', 'hair', 'cloth', 'earrings','hand', 'bg'],
        userimg:[{url:'1'},{url:'1'},{url:'1'},{url:'1'},{url:'1'},{url:'1'},{url:'1'}]
    };
  },
  computed: {
    globalParam() {
      return this.$store.getters.globalParam;
    }
  },
  created() {
//    
    this.getlist()
  },
  computed: {
    globalParam() {
      return this.$store.getters.globalParam;
    }
  },
  methods: {
       getlist(){
         this.$post("/compose_list", {
          code: sessionStorage.code,
          addr: sessionStorage.res
        }).then((res) => {
          if (res) {
            this.lv = res.level
            var str = res.random.compose.split("#")
            var imgurl = []
            for(var i in res.level_part){
                for(var a in this.bjinfo){
                    if(res.level_part[i].part == this.bjinfo[a]){
                        this.bjlist[a].push(res.level_part[i])
                    }   
                }
                for(var s in str){
                    if(res.level_part[i].name == str[s]){
                        for(var k in this.bjinfo){
                            if(res.level_part[i].part == this.bjinfo[k]){
                                Vue.set(this.userimg, k, res.level_part[i]);
                            }
                        }
                    }
                }
                
            }
          } else {
            
          }
        })
       },
       setindex(index){
        this.index = index;
       },
       setimg(item){
        if(this.lv<item.level){
            return
        }else{
            Vue.set(this.userimg,this.index-1,item)
        }
       },
       postupimg(){
            var str = ''
            var part_layer = ['bg', 'hand', 'face', 'hair', 'cloth', 'earrings', 'element']
            for(var i in part_layer){
                for(var s in this.userimg){
                    if(part_layer[i] == this.userimg[s].part){
                        if(i==part_layer.length){
                            str +=this.userimg[s].name
                        }else{
                            str += this.userimg[s].name+'#'
                        }
                    }
                }
            }
            console.log(str);
            // this.$post("/sync_compose", {
            //     code: sessionStorage.code,
            //     addr: sessionStorage.res,
            //     compose:''
            // }).then((res) => {

            // })
        // 
       }
  },
 
};
</script>
<style lang="less" scoped>
    .setnft{
        min-height: 100vh;
        background: url(../assets/other/slice.png) repeat-x 100%;
        background-position-y: 100%;
        display: flex;
        justify-content: center;
    }
    .lbox{
        margin-top: 20vh;
        .posiimgbox{
            width: 400px;
            height: 400px;
            background: #000;
            border-radius: 16px;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            >img{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        .btns{
            width: 400px;
            height: 80px;
            background: rgba(255,255,255,0.1);
            border-radius: 16px 16px 16px 16px;
            margin-top: 64px;
            font-family: PingFang HK, PingFang HK;
            font-weight: 500;
            font-size: 18px;
            color: #FFFFFF;
            line-height: 80px;
            text-align: center;
            font-style: normal;
            text-transform: none;
            cursor: pointer;
            &:hover{
                background: #FFC40C;
                color: #000;
            }
        }
    }
    .rbox{
        margin-top: 15vh;
        margin-left: 160px;
        .tit{
            font-family: PingFang HK, PingFang HK;
            font-weight: 300;
            font-size: 40px;
            color: #FFFFFF;
            line-height: 47px;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }
        .info{
            font-family: PingFang HK, PingFang HK;
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            line-height: 28px;
            text-align: left;
            font-style: normal;
            text-transform: none;
            margin-top: 16px;
            >img{
                vertical-align: middle;
            }
        }
        .btnbox{
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.5);
            text-align: center;
            display: flex;
            justify-content: flex-start;
            margin-top: 80px;
            overflow: hidden;
            >div{
                width: 125px;
                height: 48px;
                background: rgba(255,255,255,0.1);
                border-radius: 0px 0px 0px 0px;
                line-height: 48px;
                font-family: PingFang HK, PingFang HK;
                font-weight: 400;
                font-size: 14px;
                color: #FFFFFF;
                text-align: center;
                font-style: normal;
                text-transform: none;
                cursor: pointer;
            }
            .index{
                background: #FFFFFF;
                color: #000;
            }
        }
    }
    .bjfar{
        width: 880px;
        height: 50vh;
        overflow-y: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 40px;
        padding-top: -40px;
        .btnlvbox{
            width: 100%;
            height: 40px;
            text-align: left;
            padding-right: 5px;
            >img{
                width: 49px;
                height: 20px;
                margin-left: 6px !important;
                margin-top: 15px !important;
            }
        }
    }
    /* 适用于基于WebKit的浏览器 */
    /* 隐藏整个滚动条 */
    .bjfar::-webkit-scrollbar {
        display: none; /* 这在Chrome中可能不起作用，因为它不支持隐藏滚动条而不影响滚动 */
        /* 或者，你可以尝试将其设置为透明 */
        width: 0; /* 对于垂直滚动条 */
        height: 0; /* 对于水平滚动条 */
    }

    .bjbox{
        width: 182px;
        height: 208px;
        background: #111111;
        border-radius: 8px 8px 8px 8px;
        margin-top: 40px;
        text-align: center;
        padding-top: 10px;
        cursor: pointer;
        img{
            width: 170px;
            height: 158px;
            display: block;
            margin: auto;
        }
        >div{
            color: #fff;
            text-align: left;
            height: 50px;
            line-height: 50px;
        }
    }
    .setindex{
        border: 3px solid #FFFFFF;
    }
    .noclick{
        background: rgba(68,61,63,0.5);
        filter: blur(0.2px);
        cursor: not-allowed;
    }
</style>