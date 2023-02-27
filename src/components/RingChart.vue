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
        title: {
          text: "人员分布",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        // tooltip: {
        //   trigger: "item",
        //   //   formatter: "{a} <br/>{b} : {c}",
        //   textStyle: {
        //     fontSize: 18,
        //   },
        // },
        legend: {
          orient: "vertical",
          x: "left",
          textStyle: {
            color: "#fff",
          },
          data: ["派遣工", "师级", "员级", "其他"],
        },
        series: [
          {
            type: "pie",
            animationDuration: 3000,
            animationEasing: "cubicInOut",
            radius: ["30%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              //   position: "center",

              textStyle: {
                color: "#fff",
                fontSize: 15,
              },
              formatter: "{b}:\r{d}%", //提示文本内容 d代表百分比，b代表name文本
            },
            labelLine: {
              show: true,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
              },
            },
            data: [
              { value: 335, name: "派遣工" },
              { value: 310, name: "师级" },
              { value: 234, name: "员级" },
              { value: 135, name: "其他" },
            ],
          },
        ],
      };
      this.RingChartDiv.setOption(option);
      // 自动轮播
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