<template>
  <div class="footer">
    <ul>
      <li v-for="(tab,index) in tabs" :key="index">
        <router-link :to="tab.href" active-class="footer-active">
          <i :class="['iconfont', tab.icon]"></i>{{ tab.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array
    }
  }
}
</script>
<style>
/* 底部 */
.footer {
  position: fixed;
  height: 0.52rem;
  border-bottom: 1px solid #e3e3e4;
  border-top: 1px solid #e3e3e4;
  background: #fff;
  box-sizing: border-box;
  width: 100%;
  padding-top: 0.02rem;
  bottom: 0;
  left: 0;
}
.footer ul {
  display: flex;
  justify-content: space-around;
}
.footer ul li a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-active {
  color: #009bff;
}
</style>
