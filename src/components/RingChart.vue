<!--环图-->
<template>
  <div class="container">
    <div id="RingChartDiv"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { autoToolTip } from "@/utils/echartsAutoTooltip.js";
export default {
  props: {
    dataVColor: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      RingChartDiv: "",
      //图表数据
      chartData: {
        seriesData: [
          { value: 365, name: "派遣工" },
          { value: 310, name: "师级" },
          { value: 234, name: "员级" },
          { value: 135, name: "其他" },
        ],
      },
    };
  },
  mounted() {
    // this.echartsInit();
    // window.addEventListener("resize", () => {
    //   this.RingChartDiv.resize();
    // });
  },
  methods: {
    async createRingChart(RingChartData) {
      this.chartData.seriesData[0].value = RingChartData[0];
      this.chartData.seriesData[1].value = RingChartData[1];
      this.chartData.seriesData[2].value = RingChartData[2];
      this.chartData.seriesData[3].value = RingChartData[3];
      let { chartData } = this; //获取图表数据
      await (this.RingChartDiv && this.RingChartDiv.dispose()); //若之前有，则销毁实例
      this.RingChartDiv = echarts.init(document.getElementById("RingChartDiv")); //初始化echarts
      let option = {
        title: {
          text: "人员分布",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        // tooltip: {
        //   trigger: "item",
        // },
        // legend: {
        //   orient: "vertical",
        //   x: "left",
        //   textStyle: {
        //     color: "#fff",
        //   },
        // },
        series: [
          {
            type: "pie",
            animationDuration: 3000,
            radius: ["30%", "50%"],
            animationEasing: "cubicInOut",
            center: ["50%", "60%"], //饼图位置
            label: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 15,
              },
              formatter: "{b}:\r{d}%", //提示文本内容 d代表百分比，b代表name文本
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            data: [],
          },
        ],
      };
      chartData.seriesData.forEach((s) => {
        option.series[0].data.push({
          value: s.value,
          name: s.name,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
              {
                offset: 0,
                color: this.dataVColor[0],
              },
              {
                offset: 1,
                color: "#fff",
              },
            ]),
          },
        });
      });
      await (option && this.RingChartDiv.setOption(option)); //设置数据
      // 自动轮播
      autoToolTip(this.RingChartDiv, option, {
        interval: 2000, // 轮播间隔时间 默认2s
        loopSeries: false, // 是否循环轮播所有序列
        seriesIndex: 0, // 第1个被轮播的序列下标
      });
    },
  },
  // echartsInit() {
  //   this.RingChartDiv = echarts.init(document.getElementById("RingChartDiv"));
  //   let option = {
  //     title: {
  //       text: "人员分布",
  //       left: "center",
  //       textStyle: {
  //         color: "#fff",
  //       },
  //     },
  //     // tooltip: {
  //     //   trigger: "item",
  //     //   //   formatter: "{a} <br/>{b} : {c}",
  //     //   textStyle: {
  //     //     fontSize: 18,
  //     //   },
  //     // },
  //     legend: {
  //       orient: "vertical",
  //       x: "left",
  //       textStyle: {
  //         color: "#fff",
  //       },
  //       data: ["派遣工", "师级", "员级", "其他"],
  //     },
  //     color: ["#a8e6ae", "#8bde93", "#63c16c", "#4d9654"],
  //     series: [
  //       {
  //         type: "pie",
  //         animationDuration: 3000,
  //         animationEasing: "cubicInOut",
  //         radius: ["30%", "50%"],
  //         avoidLabelOverlap: false,
  //         label: {
  //           show: true,
  //           //   position: "center",
  //           textStyle: {
  //             color: "#fff",
  //             fontSize: 15,
  //           },
  //           formatter: "{b}:\r{d}%", //提示文本内容 d代表百分比，b代表name文本
  //         },
  //         labelLine: {
  //           show: true,
  //         },
  //         emphasis: {
  //           label: {
  //             show: true,
  //             fontSize: "18",
  //             fontWeight: "bold",
  //           },
  //         },
  //         data: [
  //           { value: 365, name: "派遣工" },
  //           { value: 310, name: "师级" },
  //           { value: 234, name: "员级" },
  //           { value: 135, name: "其他" },
  //         ],
  //       },
  //     ],
  //   };
  //   this.RingChartDiv.setOption(option);
  //   // 自动轮播
  //   autoToolTip(this.RingChartDiv, option, {
  //     interval: 2000, // 轮播间隔时间 默认2s
  //     loopSeries: false, // 是否循环轮播所有序列
  //     seriesIndex: 0, // 第1个被轮播的序列下标
  //   });
  // },
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}
#RingChartDiv {
  height: 100%;
  width: 100%;
}
</style>