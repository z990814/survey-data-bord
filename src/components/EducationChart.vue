<!--学历分布图-->
<template>
  <div class="container">
    <div id="histogramChartDiv"></div>
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
      histogramChartDiv: "",
    };
  },
  methods: {
    echartsInit() {
      this.histogramChartDiv = echarts.init(
        document.getElementById("histogramChartDiv")
      );
      let option = {
        title: {
          text: "学历分布",
          textAlign: "auto",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {},
        xAxis: {
          data: [
            "小学及以下",
            "初中",
            "高中/职高",
            "大专",
            "本科",
            "硕士及以上",
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
        // 确诊数量
        series: [
          {
            name: "",
            type: "bar",
            animationDuration: 3000,
            animationEasing: "cubicInOut",
            data: [120, 200, 150, 80, 70, 110, 130],
            color: this.dataVColor,
          },
        ],
      };
      this.histogramChartDiv.setOption(option);
      // 自动轮播
      autoToolTip(this.histogramChartDiv, option, {
        interval: 2000, // 轮播间隔时间 默认2s
        loopSeries: false, // 是否循环轮播所有序列
        seriesIndex: 0, // 第1个被轮播的序列下标
      });
    },
  },
  mounted() {
    this.echartsInit();
    window.addEventListener("resize", () => {
      this.histogramChartDiv.resize();
    });
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}
#histogramChartDiv {
  height: 100%;
  width: 100%;
}
</style>