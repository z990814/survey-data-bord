<template>
  <div class="header">
    <div class="box">
      <p>AI大数据中心运营管理中心</p>
    </div>
    <nav>
      <router-link active-class="active" to="/home">问卷中心</router-link>
      <router-link active-class="active" to="/another">其他页</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: flex;
  height: 5vh;
  width: 100vw;
  background-color: rgb(11, 11, 39);
}
.box {
  height: 5vh;
  width: 14vw;
}
p {
  line-height: 5vh;
  color: #fff;
  vertical-align: center;
  font-size: 20px;
  font-weight: 900;
  padding-left: 20px;
}
nav {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
}
nav a {
  padding: 0 20px;
  text-decoration: none;
  color: #fff;
}
.active {
  color: #608bd2;
}
</style>