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
      this.histogramChartDiv.setOption({
        title: {
          text: "学历分布",
          textAlign: "auto",
          left: "center",
        },
        tooltip: {},
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          type: "category",
          axisLabel: {
            rotate: -45, // 旋转30度，不然横坐标显示不完全
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
          },
        },
        yAxis: {},
        // 确诊数量
        series: [
          {
            name: "总确诊数量",
            type: "bar",
            data: [120, 200, 150, 80, 70, 110, 130],
          },
        ],
      });
    },
  },
  mounted() {
    this.echartsInit();
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