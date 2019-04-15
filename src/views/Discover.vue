<template>
  <div>
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
