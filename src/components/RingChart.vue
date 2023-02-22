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
  data() {
    return {
      RingChartDiv: "",
    };
  },
  mounted() {
    this.echartsInit();
    window.addEventListener("resize", () => {
      this.RingChartDiv.resize();
    });
  },
  methods: {
    echartsInit() {
      this.RingChartDiv = echarts.init(document.getElementById("RingChartDiv"));
      let option = {
        legend: {
          orient: "vertical",
          x: "left",
          data: ["A", "B", "C", "D", "E"],
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            data: [
              { value: 335, name: "A" },
              { value: 310, name: "B" },
              { value: 234, name: "C" },
              { value: 135, name: "D" },
              { value: 1548, name: "E" },
            ],
          },
        ],
      };
      this.RingChartDiv.setOption(option);
      autoToolTip(this.RingChartDiv, option, {
        interval: 2000, // 轮播间隔时间 默认2s
        loopSeries: false, // 是否循环轮播所有序列
        seriesIndex: 0, // 第1个被轮播的序列下标
      });
    },
  },
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