<template>
  <keep-alive exclude="login,register,detail">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./styles/reset.css";
</style>
