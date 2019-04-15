<template>
  <div id="home">
    <router-view></router-view>
    <NavBar :tabs="tabs"></NavBar>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  data () {
    return {
      tabs: [
        { name: '首页', href: '/me', icon: 'icon-changyonglogo40' },
        { name: '发现', href: '/discover', icon: 'icon-faxian' },
        { name: '订单', href: '/order', icon: 'icon-dingdan' },
        { name: '我的', href: '/profile', icon: 'icon-profile' }
      ]
    }
  },
  components: {
    NavBar
  }
};
</script>
