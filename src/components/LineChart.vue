<!--折线图-->
<template>
  <div class="container">
    <div id="LineChartDiv"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { autoToolTip } from "@/utils/echartsAutoTooltip.js";
export default {
  components: {},
  props: {
    dataVColor: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      lineChart: "",
      chartData: {
        xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        seriesData: [
          {
            name: "项目1",
            data: [],
          },
          {
            name: "项目2",
            data: [],
          },
          {
            name: "项目3",
            data: [],
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>