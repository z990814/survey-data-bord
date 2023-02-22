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
  // props: {
  //   dataVColor: {
  //     type: Array,
  //     default: [],
  //   },
  // },
  data() {
    return {
      LineChartDiv: "",
      arr: [],
    };
  },
  mounted() {
    this.echartsInit();
    window.addEventListener("resize", () => {
      this.LineChartDiv.resize();
    });
    this.getBeforeDate();
    for (var i = 0; i > -7; i--) {
      this.arr.push(this.getBeforeDate(i));
    }
  },
  methods: {
    getBeforeDate(n) {
      var n = n;
      var d = new Date();
      var year = d.getFullYear();
      var mon = d.getMonth() + 1;
      var day = d.getDate();
      if (day <= n) {
        if (mon > 1) {
          mon = mon - 1;
        } else {
          year = year - 1;
          mon = 12;
        }
      }
      d.setDate(d.getDate() + n); //很重要，+n取得是前一天的时间
      year = d.getFullYear();
      mon = d.getMonth() + 1;
      day = d.getDate();
      var s = (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);
      return s;
    },
    echartsInit() {
      this.LineChartDiv = echarts.init(document.getElementById("LineChartDiv"));
      let option = {
        title: {
          text: "每日渠道填写人数",
          textAlign: "auto",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["富学宝典", "相信", "其他"],
        },
        xAxis: {
          type: "category",
          name: "日期",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          boundaryGap: false,
          data: this.arr.reverse(),
          nameGap: 7, //坐标轴与轴线之间的距离
          axisTick: {
            //是否显示坐标轴刻度
            inside: true, //坐标轴刻度是否朝内，默认朝外
          },
        },
        yAxis: {
          type: "value",
          name: "人",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示
          },
          nameGap: 15,
          axisTick: {
            inside: true,
          },
        },
        series: [
          {
            type: "line", //线条
            name: "人数",
            data: [4, 5, 6],
            symbol: "circle", //标记的类型：圆圈
            itemStyle: {
              normal: {
                shadowBlur: 50, //文字块的背景阴影长度
                shadowColor: "red", //文字块的背景阴影颜色
                color: "blue", //图形的颜色
                lineStyle: {
                  color: "blue", //线的颜色
                  width: 1, //线的宽度
                },
              },
            },
          },
        ],
      };
      this.LineChartDiv.setOption(option);
      autoToolTip(this.LineChartDiv, option, {
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
#LineChartDiv {
  height: 100%;
  width: 100%;
}
</style>