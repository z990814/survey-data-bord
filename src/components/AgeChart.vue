<!--年龄分布图-->
<template>
  <div class="container">
    <div id="AgeChartDiv"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { autoToolTip } from "@/utils/echartsAutoTooltip.js";
export default {
  name: "",
  components: {},
  props: {
    dataVColor: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      AgeChartDiv: "",
      //图表数据
      chartData: {
        xAxisData: [
          "20岁及以下",
          "21-25岁",
          "26-30岁",
          "31-35岁",
          "36-40岁",
          "41岁及以上",
          "保密",
          "未知",
        ],
        seriesData: [120, 200, 150, 80, 70, 110, 130, 5],
      },
    };
  },
  methods: {
    async createAgeChart(AgeChartData) {
      this.chartData = AgeChartData;
      let { chartData } = this; //获取图表数据
      await (this.AgeChartDiv && this.AgeChartDiv.dispose()); //若之前有，则销毁实例
      this.AgeChartDiv = echarts.init(document.getElementById("AgeChartDiv")); //初始化echarts
      let option = {
        title: {
          text: "年龄分布",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: "category",
          data: [],
          axisLabel: {
            rotate: -45, // 旋转30度，不然横坐标显示不完全
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#fff",
          },
        },
        series: [
          {
            type: "bar",
            animationDuration: 3000,
            animationEasing: "cubicInOut",
            label: {
              color: "#fff",
            },
            data: [],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 1,
                color: this.dataVColor[0],
              },
              {
                offset: 0,
                color: "#ffffff",
              },
            ]),
          },
        ],
      };
      option.xAxis.data = chartData.xAxisData;
      chartData.seriesData.forEach((s) => {
        option.series[0].data.push(s);
      });
      await (option && this.AgeChartDiv.setOption(option));
      // 自动轮播
      autoToolTip(this.AgeChartDiv, option, {
        interval: 2000, // 轮播间隔时间 默认2s
        loopSeries: false, // 是否循环轮播所有序列
        seriesIndex: 0, // 第1个被轮播的序列下标
      });
    },
    // echartsInit() {
    //   this.AgeChartDiv = echarts.init(document.getElementById("AgeChartDiv"));
    //   let option = {
    //     title: {
    //       text: "年龄分布",
    //       textAlign: "auto",
    //       left: "center",
    //       textStyle: {
    //         color: "#fff",
    //       },
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: [],
    //       type: "category",
    //       axisLabel: {
    //         rotate: -45, // 旋转30度，不然横坐标显示不完全
    //         show: true, //这行代码控制着坐标轴x轴的文字是否显示
    //         color: "#fff",
    //       },
    //     },
    //     yAxis: {
    //       type: "value",
    //       axisLabel: {
    //         color: "#fff",
    //       },
    //     },

    //     series: [
    //       {
    //         name: "",
    //         type: "bar",
    //         animationDuration: 3000,
    //         animationEasing: "cubicInOut",
    //         data: [],
    //         color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
    //           {
    //             offset: 1,
    //             color: this.dataVColor[0],
    //           },
    //           {
    //             offset: 0,
    //             color: "#ffffff",
    //           },
    //         ]),
    //       },
    //     ],
    //   };
    //   this.AgeChartDiv.setOption(option);
    //   option.xAxis.data = this.chartData.xAxisData;
    //   this.chartData.seriesData.forEach((s) => {
    //     option.series[0].data.push(s);
    //   });
    //   // 自动轮播
    //   autoToolTip(this.AgeChartDiv, option, {
    //     interval: 2000, // 轮播间隔时间 默认2s
    //     loopSeries: false, // 是否循环轮播所有序列
    //     seriesIndex: 0, // 第1个被轮播的序列下标
    //   });
    // },
  },
  mounted() {
    // this.echartsInit();
    // window.addEventListener("resize", () => {
    //   this.AgeChartDiv.resize();
    // });
  },
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}
#AgeChartDiv {
  height: 100%;
  width: 100%;
}
</style>