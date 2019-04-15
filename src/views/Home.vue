<template>
  <div id="home">
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>
