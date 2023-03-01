<template>
  <div class="container">
    <div id="CategoryChartDiv"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { autoToolTip } from "@/utils/echartsAutoTooltip.js";
export default {
  name: "",
  props: {
    dataVColor: {
      type: Array,
      default: [],
    },
  },
  components: {},
  data() {
    return {
      CategoryChartDiv: "",
      chartData: {
        yAxisData: [
          "企业文化价值",
          "情商",
          "恒毅力",
          "逆商",
          "文化逆商",
          "文化商数",
          "同理心",
          "信任测评",
        ],
        seriesData: [37.62, 17.08, 16.52, 10.01, 7.4, 4.88, 2.32, 0.94],
      },
    };
  },
  methods: {
    async createCategoryChart(CategoryChartData) {
      this.chartData = CategoryChartData;
      let { chartData } = this; //获取图表数据
      await (this.CategoryChartDiv && this.CategoryChartDiv.dispose()); //若之前有，则销毁实例
      this.CategoryChartDiv = echarts.init(
        document.getElementById("CategoryChartDiv")
      ); //初始化echarts
      let option = {
        title: {
          text: "各问卷数据占比",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          formatter: "{b}{c}%",
        },
        xAxis: {
          type: "value",
          axisLabel: {
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            color: "#fff",
          },
        },
        yAxis: {
          type: "category",
          data: [],
          axisLabel: {
            rotate: 45,
            show: true,
            color: "#fff",
          },
        },
        series: [
          {
            type: "bar",
            animationDuration: 3000,
            animationEasing: "cubicInOut",
            label: {
              position: "right",
              color: "#fff",
              show: true,
              formatter: "{c}%",
            },
            data: [],
            barWidth: 15,
            barBorderRadius: [5, 5, 0, 0],
            itemStyle: {
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
          },
        ],
      };
      option.yAxis.data = chartData.yAxisData;
      chartData.seriesData.forEach((s) => {
        option.series[0].data.push(s);
      });
      await (option && this.CategoryChartDiv.setOption(option));
      // 自动轮播
      autoToolTip(this.CategoryChartDiv, option, {
        interval: 2000, // 轮播间隔时间 默认2s
        loopSeries: false, // 是否循环轮播所有序列
        seriesIndex: 0, // 第1个被轮播的序列下标
      });
    },
    // echartsInit() {
    //   this.CategoryChartDiv = echarts.init(
    //     document.getElementById("CategoryChartDiv")
    //   );
    //   let option = {
    //     title: {
    //       text: "各问卷填写人数占比",
    //       textAlign: "auto",
    //       left: "center",
    //       textStyle: {
    //         color: "#fff",
    //       },
    //     },
    //     tooltip: {
    //       formatter: "{b}{c}%",
    //     },
    //     xAxis: {
    //       type: "value",
    //       axisLabel: {
    //         show: true, //这行代码控制着坐标轴x轴的文字是否显示
    //         color: "#fff",
    //       },
    //     },
    //     yAxis: {
    //       type: "category",
    //       axisLabel: {
    //         rotate: 45,
    //         show: true,
    //         color: "#fff",
    //       },
    //       data: [
    //         "企业文化价值",
    //         "情商",
    //         "恒毅力",
    //         "逆商",
    //         "文化逆商",
    //         "文化商数",
    //         "同理心",
    //         "信任测评",
    //       ],
    //     },
    //     series: [
    //       {
    //         name: "",
    //         type: "bar",
    //         animationDuration: 3000,
    //         animationEasing: "cubicInOut",
    //         min: 0,
    //         max: 20,
    //         data: [37.62, 17.08, 16.52, 10.01, 7.4, 4.88, 2.32, 0.94],
    //         barWidth: 15,
    //         label: {
    //           color: "#fff",
    //           show: true,
    //           show: true,
    //           formatter: "{c}%",
    //         },
    //         itemStyle: {
    //           color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
    //             {
    //               offset: 1,
    //               color: this.dataVColor[0],
    //             },
    //             {
    //               offset: 0,
    //               color: "#ffffff",
    //             },
    //           ]),
    //           barBorderRadius: [5, 5, 0, 0], // （顺时针左上，右上，右下，左下）
    //         },
    //       },
    //     ],
    //   };
    //   this.CategoryChartDiv.setOption(option);
    //   // 自动轮播
    //   autoToolTip(this.CategoryChartDiv, option, {
    //     interval: 2000, // 轮播间隔时间 默认2s
    //     loopSeries: false, // 是否循环轮播所有序列
    //     seriesIndex: 0, // 第1个被轮播的序列下标
    //   });
    // },
  },
  mounted() {
    // this.echartsInit();
    // window.addEventListener("resize", () => {
    //   this.CategoryChartDiv.resize();
    // });
  },
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}
#CategoryChartDiv {
  height: 100%;
  width: 100%;
}
</style>