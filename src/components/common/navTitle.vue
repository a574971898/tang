<template>
    <div class="wrapper">
        <div class="left_box">
            <div class="tit_wrapper">
                <img src="@/assets/logo.png" alt="" srcset="">
            </div>
            <div class="tit_nav">
                <div :class="{'active':active == 1}" @click="gotoindex(1)">[ 01 ] 首页</div>
                <div :class="{'active':active == 2}" @click="gotoindex(2)">[ 02 ] PFP</div>
                <div :class="{'active':active == 3}" @click="gotoindex(3)">[ 03 ] 成员</div>
            </div>
        </div>
        <div class="login_btns">
            <img src="@/assets/icon_Vol.png" alt="" srcset="">
            <div class="loginbtn">
                链接钱包 <img src="@/assets/arrow.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "navMenu",
    props: {

    },
    components: {
    },
    data() {
        return {
           active:1,
        }
    },
    watch: {
       
    },
    created() {
       
    },
    mounted() {
        console.log(this.$route);
        if(this.$route.fullPath == '/'){
            this.active = 1
        } else if(this.$route.fullPath == '/member'){
            this.active = 3
        } else{
            this.active = 2
        }
    },
    methods: {
        gotoindex(index){
            if(index == 1){
                this.active = 1
                this.$router.push("/")
            }else if(index == 2){
                this.active = 2
                this.$router.push("/pfp")
            }else if(index == 3){
                this.active = 3
                this.$router.push("/member")
            }
        }   
    }
}
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
    z-index: 100;
    backdrop-filter: blur(30px);
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    .left_box{
        display: flex;
    }
}
.tit_wrapper{
  padding: 15px 0;
}
.tit_nav{
    line-height: 72px;
    height: 72px;
    font-size: 14px;
    color: #fff;
    display: flex;
    margin-left: 150px;
    >div{
        margin-left: 40px;
        cursor: pointer;
        position: relative;
    }
    .active::before  {
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
.login_btns{
    margin-right: 40px;
    padding: 15px 0;
    display: flex;
    align-content: center;
    .loginbtn{
        width: 160px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #FFFFFF;
        line-height: 40px;
        text-align: center;
        vertical-align: middle;
        color: #fff;
        margin-left: 20px;
        cursor: pointer;
    }
    >img{
        cursor: pointer;
    }
}

</style>