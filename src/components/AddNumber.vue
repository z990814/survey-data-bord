<!--数字增加动画组件-->
<template>
  <span class="num-span" :data-time="time" :data-value="value">{{
    addNum
  }}</span>
</template>
<script>
export default {
  props: {
    //动画时间
    time: {
      type: Number,
      default: 4,
    },
    //停止时的值
    value: {
      type: Number,
      default: 0,
    },
    //千位的逗号
    thousandSign: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      oldValue: 0,
      addNum: 0, //响应式的数值
    };
  },
  watch: {
    value(val) {
      this.oldValue = 0;
      this.addNum = 0; //响应式的数值
      this.startAnimation(); //值改变时开始动画
    },
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      let value = this.value - this.oldValue;
      let step = (value * 10) / (this.time * 100);
      let current = 0;
      let start = this.oldValue;
      //定时器
      let t = setInterval(() => {
        start += step;
        if (start > value) {
          clearInterval(t);
          start = value;
          t = null;
        }
        if (current === start) {
          return;
        }
        current = Math.floor(start); //取整
        this.oldValue = current;
        if (this.thousandSign) {
          this.addNum = current
            .toString()
            .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,"); //添加千位符
        } else {
          this.addNum = current.toString(); //无千位符
        }
      }, 10);
    },
  },
};
</script>
<style scoped>
.num-span {
  /*开启gpu加速*/
  transform: translateZ(0);
}
</style>