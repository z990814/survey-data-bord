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
    };
  },
  methods: {
    echartsInit() {
      this.AgeChartDiv = echarts.init(document.getElementById("AgeChartDiv"));
      let option = {
        title: {
          text: "年龄分布",
          textAlign: "auto",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {},
        xAxis: {
          data: [
            "20岁及以下",
            "21-25岁",
            "26-30岁",
            "31-35岁",
            "36-40岁",
            "41岁及以上",
            "保密",
            "未知",
          ],
          type: "category",
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
            name: "",
            type: "bar",
            animationDuration: 3000,
            animationEasing: "cubicInOut",
            data: [120, 200, 150, 80, 70, 110, 130, 5],
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
      this.AgeChartDiv.setOption(option);
      // 自动轮播
      autoToolTip(this.AgeChartDiv, option, {
        interval: 2000, // 轮播间隔时间 默认2s
        loopSeries: false, // 是否循环轮播所有序列
        seriesIndex: 0, // 第1个被轮播的序列下标
      });
    },
  },
  mounted() {
    this.echartsInit();
    window.addEventListener("resize", () => {
      this.AgeChartDiv.resize();
    });
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