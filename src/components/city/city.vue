<template>
  <div class="city-listhet" id="pydw">
    <div class="city-3Obwy_0" v-for="item in citysolt" :key="item.name">
      <div class="city-1bnTP_0" :id="item.name">{{item.name}}</div>
      <div class="city-5r26m_0" v-for=" list in item.key " :key="list.id">
        <span>{{list.name}}</span>
      </div>
      <div class="leeter">
        <ul>
          <li v-for="item in citysolt" :key="item.name" @click="fn2(item.name)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      citys: []
    };
  },
  computed: {
    citysolt:function() {
      let lise = {};
      let citysy = [];
      for (var key in this.citys) {
        lise["key"] = this.citys[key];
        lise["name"] = key;
        citysy.push(lise);
        lise = {};
      }
      citysy.sort((a, b) => {
        return a.name.charCodeAt() - b.name.charCodeAt();
      });
      return citysy;
    }
  },
  methods: {
    fn2(py) {
      var el = document.getElementById(py);
      var box = document.getElementById("pydw");
      box.scrollTop = el.offsetTop - 90;
    },
    gitcity() {
      Axios.get("https://elm.cangdu.org/v1/cities?type=group").then(req => {
        if (req.data) {
          this.citys = req.data;
        }
      });
    },
  },
  created() {
    this.gitcity();
  }
};
</script>
<style scoped>
.city-listhet {
  height: 520px;
  overflow: scroll;
  overflow-x: hidden
}
.city-1bnTP_0 {
  width: 100%;
  box-sizing: border-box;
  padding-left: 15px;
  height: 37px;
  background: #f5f5f5;
  border-bottom: 1px solid #ededee;
  line-height: 37px;
}
.city-5r26m_0 {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background: #ffffff;
  line-height: 50px;
  font-size: 14px;
  margin-left: 15px;
  color: #333333;
  border-bottom: 1px solid #dddddd;
}
.leeter {
  position: fixed;
  top: 130px;
  right: 10px;
  font-size: 10px;
  bottom: 0;
  color: #999;
  font-weight: 100;
}
</style>

