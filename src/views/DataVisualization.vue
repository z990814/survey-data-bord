<!--数据可视化看板-->
<template>
  <div class="dataVisualization-div">
    <div class="isMobile-div" v-show="mobileDiv"></div>
    <!--canvas背景-->
    <iframe :src="iframeSrc" />
    <dv-border-box-11
      class="dataVisualization-con"
      :title="dataVisualizationTit"
      :titleWidth="200"
      v-loading="isLoading"
      :color="dataVColor"
    >
      <!--顶栏-->
      <div class="head-div">
        <div class="head-left">
          <p>AI大数据中心</p>
          <dv-decoration-8
            class="dv-left"
            :color="dataVColor"
            :reverse="true"
          />
        </div>
        <div class="head-tit">
          <dv-decoration-5 class="dv-tit-top" :color="dataVColor" />

          <!-- <el-select
            v-model="currentProjectValue"
            class="dv-tit-name"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in projectPtions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select> -->
        </div>
        <div class="head-right">
          <div class="flex">
            <i class="el-icon-date"></i>
            <div>{{ date }}</div>
            <span style="width: 10px"></span>
            <div>{{ time }}</div>
          </div>
          <dv-decoration-8 class="dv-right" :color="dataVColor" />
        </div>
      </div>
      <!--内容-->
      <div class="body-div">
        <!--左边图表-->
        <div class="left-charts">
          <dv-border-box-10 :color="dataVColor" class="left-1">
            <LineChart ref="LineChart" :dataVColor="dataVColor"></LineChart>
          </dv-border-box-10>
          <dv-border-box-10 :color="dataVColor" class="left-2">
            <RingChart ref="LineChart" :dataVColor="dataVColor" />
          </dv-border-box-10>
        </div>
        <!--中部地图-->
        <div class="middle-map">
          <!--数字盒子-->
          <div class="middle-1">
            <div class="num-div">
              <p>问卷种类</p>

              <AddNumber
                class="AddNumber-com"
                :value="30878"
                :time="5"
                :thousandSign="true"
              ></AddNumber>
              <span>份</span>
            </div>
            <div class="num-div">
              <p>收集总数</p>
              <AddNumber
                class="AddNumber-com"
                :value="30"
                :time="5"
                :thousandSign="true"
              ></AddNumber>
              <span>份</span>
            </div>
          </div>
          <!--地图盒子-->
          <dv-border-box-1 :color="dataVColor" class="middle-2">
            <MapChart></MapChart>
          </dv-border-box-1>
        </div>
        <!--右边图表-->
        <div class="right-charts">
          <dv-border-box-10 :color="dataVColor" class="right-1">
            <EducationChart ref="LineChart" :dataVColor="dataVColor" />
          </dv-border-box-10>
          <dv-border-box-10 :color="dataVColor" class="right-2">
            <AgeChart ref="LineChart" :dataVColor="dataVColor" />
          </dv-border-box-10>
        </div>
      </div>
    </dv-border-box-11>
  </div>
</template>

<script>
import EducationChart from "../components/EducationChart.vue";
import AgeChart from "../components/AgeChart.vue";
import MapChart from "../components/MapChart.vue";
import AddNumber from "../components/AddNumber.vue";
import RingChart from "../components/RingChart.vue";
import LineChart from "../components/LineChart.vue";
export default {
  name: "DataVisualization",
  components: {
    EducationChart,
    AgeChart,
    MapChart,
    AddNumber,
    RingChart,
    LineChart,
  },
  data() {
    return {
      mobileDiv: true, //手机遮罩
      isLoading: false, //加载状态
      iframeSrc: "./polygonBackground/demo.html", //背景路径
      dataVisualizationTit: "问卷数据看板", //标题
      dataVColor: ["#00a97a", "#5bffd2"], //dataV主题色
      time: "", //日期
      interval: "", //计时器
      date: "", //时间
      projectPtions: [
        {
          value: "1",
          label: "企业文化价值",
        },
        {
          value: "2",
          label: "恒毅力",
        },
        {
          value: "3",
          label: "同理心",
        },
      ],
      currentProjectValue: "", //选中项目的value
      //选中的项目
      currentProject: {
        value: "",
        label: "",
        histData: [],
      },
      arr: [],
    };
  },
  mounted() {
    this.judgeDevice();
  },
  methods: {
    //判断设备
    judgeDevice() {
      let isMobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (isMobile) {
        alert("当前项目暂未适配移动端，请在pc端打开！");
      } else {
        this.mobileDiv = false; //关闭手机端遮罩
        // this.getProjectMsg(); //获取项目数据
        this.nowDate(); //获取时间
        this.interval = setInterval(() => {
          this.nowDate();
        }, 1000);
      }
    },
    //当前时间
    nowDate() {
      const now = new Date();
      let y = now.getFullYear();
      let m = this.lenFormat(now.getMonth() + 1);
      let d = this.lenFormat(now.getDate());
      let h = this.lenFormat(now.getHours());
      let ms = this.lenFormat(now.getMinutes());
      let s = this.lenFormat(now.getSeconds());
      this.date = y + "-" + m + "-" + d;
      this.time = h + ":" + ms + ":" + s;
      //   console.log(this.data, this.time);
    },
    //时间处理
    lenFormat(val) {
      return val > 9 ? val : "0" + val;
    },
  },
  beforeDestroy() {
    // 清除定时
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
::v-deep .el-loading-mask {
  z-index: 99999999;
}
.dataVisualization-div {
  user-select: none;
  height: 100vh;
  width: 100vw;
  color: #fff;
  background-color: #fff;
}
iframe {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  border: 0px;
  height: 100%;
  width: 100%;
}
.dataVisualization-con {
  height: 100vh;
  width: 100vw;
  font-weight: 900;
}
.head-div {
  width: 100vw;
  height: 13%;
  display: flex;
  justify-content: center;
}
.head-div .head-tit {
  margin-top: 55px;
  text-align: center;
}
.dv-tit-top {
  width: 40vw;
  height: 5vh;
  margin: -10px auto;
}
.dv-tit-name {
  padding: 10px 10px;
}
.head-left,
.head-right {
  margin-top: 7vh;
  width: 25vw;
}
.head-left p {
  font-weight: 900;
  font-size: 20px;
  position: absolute;
  top: 6vh;
  left: 13vw;
}
.flex {
  font-weight: 900;
  font-size: 20px;
  position: absolute;
  right: 11vw;
  display: flex;
  align-items: center;
}
.dv-right,
.dv-left {
  width: 100%;
  height: 30px;
  margin-top: 10px;
}
.body-div {
  overflow: auto;
  width: 98%;
  height: 84%;
  margin: auto;
  display: flex;
}
.left-charts,
.right-charts {
  width: 25vw;
  height: 100%;
  margin: auto;
}
.middle-map {
  margin: auto;
  width: 45vw;
  height: 100%;
}
.left-1,
.left-2,
.right-1,
.right-2 {
  height: 48%;
  width: 100%;
  margin: 3% auto;
}
.middle-2 {
  width: 100%;
  height: 84%;
}
.middle-1 {
  height: 15%;
  display: flex;
  justify-content: space-between;
  color: #279b81;
}
.num-div {
  margin: auto;
  text-align: center;
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
p {
  margin: 0px;
  font-size: 30px;
}
span {
  font-size: 20px;
  font-weight: 900;
}
.AddNumber-com {
  font-size: 40px;
  font-weight: 900;
  color: #fff;
}
</style>
<style scoped>
::v-deep .el-select-dropdown {
  border: 0px;
  background-color: #279b81;
  border-radius: 0px;
  text-align: left;
  color: #fff;
}

::v-deep .el-select-dropdown__item {
  color: #fff;
}

::v-deep .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #ccc;
}

::v-deep .el-select-dropdown__item.selected {
  color: #78c8ff;
}

::v-deep .el-input__inner {
  background-color: #279b81;
  border: none;
  border-radius: 0px;
  color: #fff;
  text-align: center;
}

::-webkit-scrollbar {
  /*滚动条整体*/
  width: 8px;
}

::-webkit-scrollbar-track {
  /*滑轨*/
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  /*滑块*/
  background-color: #999;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
  background-color: #fff;
}
</style>