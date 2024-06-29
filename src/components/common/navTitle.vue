<template>
    <div class="wrapper">
        <div class="tit_wrapper">
            <div class="leftBox"><img class="logo_img" src="../../assets/logo.svg" alt=""> <el-divider
                    direction="vertical"></el-divider><span class="logo_title" :style="{ color: color }">{{ text }}</span>
            </div>
            <div class="rightBox">
                <el-menu :default-active="activeIndex" class="el-menu-right" mode="horizontal" @select="handleSelect"
                    :active-text-color="color">
                    <el-menu-item index="home">首页</el-menu-item>
                    <el-menu-item index="numProcess">数字化加工</el-menu-item>
                    <el-menu-item index="aiLive">智能直播</el-menu-item>

                    <el-menu-item index="ancientOrc">古籍OCR</el-menu-item>
                    <!-- <el-submenu index="ORC">
                        <template slot="title">OCR</template>
                        <el-menu-item index="ancientOrc">古籍OCR</el-menu-item>
                        <el-menu-item index="clanOrc">族谱OCR</el-menu-item>
                    </el-submenu> -->
                   <!-- <el-menu-item index="aboutUs">关于我们</el-menu-item> -->
                </el-menu>
                
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "navMenu",
    props: {
        titles: {
            default: '文化数字化AI解决方案',
        },
        color: {
            default: 'rgba(44, 96, 245, 1)',
            type: String,
        },

    },
    components: {
    },
    data() {
        return {
            activeIndex: 'home',
            dialogVisible: false,
            text: this.titles,
            EmailsdialogVisible: false,
            userdata: JSON.parse(localStorage.getItem("userdata")) || {},
            falg: false
        }
    },
    watch: {
        userdata: {
            deep:true,
            handler(newVal){
              if( JSON.stringify(newVal) == '{}' ){
                this.falg = false
              }else{
                this.falg = true
              }
            }
        }
    },
    created() {
        if(this.$route && this.$route.name) {
            this.activeIndex = this.$route.name;
        }
        if (localStorage.token) {
            this.falg = true;
        }
    },
    mounted() {
        if (localStorage.userdata) {
            var test = JSON.parse(localStorage.userdata)
            if (test) {
                this.userdata = test
                if (test.isCompany == 0 && !test.email) {
                    this.EmailsdialogVisible = true
                }
            }
        }

    },
    methods: {
        setfalgs(){
            console.log(123)
            this.falg = true
        },
        handleSelect(key, keyPath) {
            this.activeIndex = key;
            console.log(key);
            if(key != this.$route.name){
                this.$router.push({ path: `/${key}`, replace: true })
            }
        },
        setdialogVisible() {
            this.dialogVisible = !this.dialogVisible;
        },
        handleCommand(type) {
            if (type == 'edit') {
                localStorage.removeItem('token');
                localStorage.removeItem('userdata');
                this.falg = false
                if ( this.$route.name != 'home') {
                    this.$router.push({ path: '/home', replace: true })
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    position: fixed;
    background: #ffffff30;
    top: 0px;
    left: 0px;
    z-index: 100;
    width: 100%;
    backdrop-filter: blur(30px);
}

.tit_wrapper {
    height: 60px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .leftBox {
        min-width: 400px;
        padding-left: 30px;
        display: flex;
        align-items: center;
    }

    .rightBox {
        width: calc(100% - 400px);
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .el-menu--horizontal>.el-menu-item {
            margin: 0 25px !important;
        }

        .el-menu.el-menu--horizontal {
            border-bottom: solid 1px transparent;
        }

        .el-menu {
            border-right: solid 1px transparent;
            background-color: transparent;
        }

        .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
            background-color: transparent !important;
        }

        & /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
            background-color: transparent !important;
        }
    }

    .logo_img {

        width: 90px;
        height: 30px
    }

    .logo_title {
        img {
            width: 46px;
        }
    }


    .active {
        color: #1989fa;
        border-bottom: 4px solid #1989fa;
        height: 65px !important;
        line-height: 76px !important;
    }

}

.el-menu--horizontal>.el-menu-item {
    margin: 0 12px;
}


.loginCard {

    .loginBox {
        color: #fff;
        width: 100px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background-color: #1989fa;
        cursor: pointer;
        transition: all 0.3s;
        
        & /deep/ .el-dialog__header {
            display: none !important;
        }
        
        & /deep/ .el-dialog__body {
            padding: 0 !important;
        }
    }
    /* .loginBox:hover {
        cursor: pointer;
        background-color: #02c0ff !important;
    } */
}

.lgtypebox {
    text-align: center;
    margin: 0 0 10px 0;
}
</style>