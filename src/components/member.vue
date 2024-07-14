<template>
  <div class="member">
    <div class="getcard">
        <img src="@/assets/other/chuang.png" alt="">
    </div>
    <div class="texts">加入创世百人会，一起重新定义NFT的价值和意义，开辟全新的AI社交方式。</div>
    <div class="btnbox">
        <div class="btns">加入我们</div>
    </div>
    <div class="memberlist">
        <div class="listbox" v-for="(item,index) in memberlist" :key="index">
            <div class="border top"></div>
            <div class="border right"></div>
            <div class="border bottom"></div>
            <div class="border left"></div>
            <div class="listimg">
                <img src="../assets/pfp/PFP.png" alt="">
            </div>
            <div class="listtext">
                <div class="names">{{ item.name }}</div>
                <div>{{ item.info }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
        memberlist:[
            {
                img:'',
                name:'Chen caigen',
                info:"Well know blockchain auther"
            },
            {
                img:'',
                name:'Chen caigen',
                info:"Well know blockchain auther"
            },
            {
                img:'',
                name:'Chen caigen',
                info:"Well know blockchain auther"
            },
            {
                img:'',
                name:'Chen caigen',
                info:"Well know blockchain auther"
            },
            {
                img:'',
                name:'Chen caigen',
                info:"Well know blockchain auther"
            }
        ]
    };
  },
  created() {
   
  },
  methods: {
   
  },
 
};
</script>
<style lang="less" scoped>
    .member{
        min-height: 100vh;
        background: url(../assets/other/slice.png) repeat-x 100%;
        background-position-y: 100%;
        .getcard{
            text-align: center;
            padding-top: 20vh;
        }
    }
    .texts{
        width: 100%;
        text-align: center;
        font-family: PingFang HK, PingFang HK;
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        line-height: 28px;
        font-style: normal;
        text-transform: none;
    }
    .btnbox{
        text-align: center;
        padding-top: 100px;
        position: relative;
        .btns{
            position: absolute;
            bottom: 0;
            left: calc(50% - 29px);
            width: 140px;
            height: 58px;
            background: rgba(255, 196, 12, 1);
            text-align: center;
            line-height: 58px;
             transition: transform 0.5s ease-in-out; /* 添加过渡效果 */
        }
        .btns:hover {
            /* 当鼠标悬停时，应用倾斜效果 */
            transform: skewX(20deg); /* 你可以根据需要调整倾斜的角度 */
            height: 68px;
            width: 160px;
            left: calc(50% - 34px);
            bottom: 0;
        }
    }

    .memberlist{
        width: 1200px;
        display: flex;
        margin: auto;
        margin-top: 100px;
        padding-bottom: 100px;
        flex-wrap: wrap;
        .listbox{
            width: 398px;
            height: 167px;
            background: rgba(255,255,255,0.1);
            border-radius: 16px 16px 16px 16px;
            backdrop-filter: blur(2px);
            border: 0.5px solid rgba(255, 255, 255, 0.2);
            display: flex;
            position: relative;
            .border{
                position: absolute; 
                background: #fff;
            }
            .top{
                top: -1px;
                left: 10%;
                height: 1px;
                width: 0%;
                transition: width 1s ease-in-out;
            }
            .right{
                top: 15%;
                right: -1px;
                height: 0%;
                width: 1px;
                transition: height 1s ease-in-out;
            }
            .bottom{
                bottom: -1px;
                left: 10%;
                height: 1px;
                width: 0%;
                transition: width 1s ease-in-out;
            }
            .left{
                 top: 15%;
                left: -1px;
                height: 0%;
                width: 1px;
                transition: height 1s ease-in-out;
            }

            &:hover{
                .top{
                    width: 80%;
                }
                .right{
                    height: 70%;
                }
                .bottom{
                    width: 80%;
                }
                .left{
                    height: 70%;
                }
            }
            .listimg{
                width: 168px;
                height: 167px;
                display: flex;
                justify-content: center;
                align-items: center;

                >img{
                    width: 120px;
                    height: 120px;
                    border-radius: 16px;
                }
            }
            .listtext{
                >div{
                    width: 208px;
                    height: 78px;
                    font-family: Inter, Inter;
                    font-weight: 400;
                    font-size: 12px;
                    color: rgba(255,255,255,0.5);
                    line-height: 14px;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                }
               
                .names{
                    height: 40px;
                    margin-top: 24px;
                    font-family: Inter, Inter;
                    font-weight: 900;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 14px;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                }
            }
        }
    }
</style>