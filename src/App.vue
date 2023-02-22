<template>
  <div id="app">
    <!-- <LineChart></LineChart> -->
    <DataVisualization></DataVisualization>
  </div>
</template>
<script>
import DataVisualization from "./views/DataVisualization.vue";
// import LineChart from "./components/LineChart.vue";
export default {
  components: { DataVisualization },
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
}
p {
  margin: 0px;
}
</style>
