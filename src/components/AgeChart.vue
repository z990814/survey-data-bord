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
  data() {
    return {};
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