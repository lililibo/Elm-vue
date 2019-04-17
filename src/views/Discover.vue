<template>
  <div class="bgfind">
    <router-view></router-view>
    <find></find>
    <findtime></findtime>
  </div>
</template>

<script>
import find from "../components/find/find";
import findtime from "../components/find/findtime";
export default {
  components: {
    find,
    findtime
  }
};
</script>
<style>
body,
html {
  width: auto;
  height: auto;
  background-color: #f5f5f5;
}
</style>

