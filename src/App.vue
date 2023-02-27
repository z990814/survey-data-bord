<template>
  <div id="app">
    <TopNav></TopNav>
    <!-- <LineChart></LineChart> -->
    <iframe :src="iframeSrc"></iframe>
    <!-- <DataVisualization></DataVisualization> -->
    <router-view></router-view>
  </div>
</template>
<script>
import TopNav from "./components/TopNav.vue";
import DataVisualization from "./views/DataVisualization.vue";
// import LineChart from "./components/LineChart.vue";
export default {
  components: { TopNav, DataVisualization },
  data() {
    return {
      iframeSrc: "./polygonBackground/demo.html", //背景路径
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100vh;
  width: 100vw;
  user-select: none;
}
p {
  margin: 0px;
}
iframe {
  position: absolute;
  top: 5vh;
  right: 0;
  z-index: 0;
  border: 0px;
  height: 95vh;
  width: 100%;
}
</style>
