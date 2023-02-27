<template>
  <div class="another">
    <dv-border-box-12 class="anotherview">
      <div class="content"><span>还没有数据展示</span></div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {};
</script>

<style>
.another {
  user-select: none;
  height: 95vh;
  width: 100vw;
}
.anotherview {
  height: 95vh;
  width: 100vw;
}
.content {
  display: flex;
  height: 30vh;
  width: 90vw;
}
span {
  display: block;
  color: #fff;
  font-size: 50px;
  margin: 100px auto;
}
</style>