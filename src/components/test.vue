<template>
  <div class="test">
    <div class="getcard">
      <img src="@/assets/other/gexing.png" alt="" />
    </div>
    <div class="testbox">
      <div class="inputbox">
        <el-select v-model="sex" placeholder="您的性别" popper-append-to-body>
          <el-option
            v-for="item in 2"
            :key="item == 1 ? '男' : '女'"
            :label="item == 1 ? '男' : '女'"
            :value="item == 1 ? '男' : '女'"
          >
          </el-option>
        </el-select>
      </div>
      <div class="inputbox">
        <el-select v-model="year" placeholder="出生年份">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
      <div class="inputbox">
        <el-select v-model="mouth" placeholder="出生月份">
          <el-option v-for="item in 12" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </div>
      <div class="inputbox">
        <el-select v-model="day" placeholder="出生日期">
          <el-option v-for="item in 30" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </div>
      <div class="inputbox inputboxb">提交 →</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      sex: "",
      year: "",
      mouth: "",
      day: "",
      options: [],
    };
  },
  created() {
    this.setoption();
  },
  methods: {
    setoption() {
      var year = 1925;
      for (let index = 0; index < 100; index++) {
        this.options[index] = index + year;
      }
      console.log(this.options);
    },
  },
};
</script>
<style lang="less" scoped>
.test {
  min-height: 100vh;
  background: url(../assets/other/slice.png) repeat-x 100%;
  background-position-y: 100%;
  .getcard {
    text-align: center;
    padding-top: 20vh;
  }
  .testbox {
    width: 1440px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 50px;
  }
  .inputbox {
    padding-right: 30px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid #fff;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inputboxb {
    background: #fff;
    cursor: pointer;
  }
  .inputboxb:hover{
    background: #FFC40C;
  }
  & /deep/ .el-input--suffix .el-input__inner {
    width: 100px;
    text-align: center;
    background: rgba(255, 255, 255, 0);
    color: #fff;
    border: 0;
  }
  .el-input__suffix {
    right: 100px !important;
  }
}
.testbox {
  display: flex;
}
</style>