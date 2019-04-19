<template>
  <div>
    <van-nav-bar title="添加地址" left-text left-arrow @click-left="onClickLeft"/>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      areaList: {
        province_list: {
          110000: "深圳市",
          120000: "天津市"
        },
        city_list: {
          110100: "深圳市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "南山区",
          110102: "宝安区",
          110105: "罗湖区",
          110106: "福田区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      },
      searchResult: [],
      list: []
    };
  },
  methods: {
    isLogin: function() {
      if (localStorage) {
        if (localStorage.getItem("username")) {
          var username = localStorage.getItem("username");
          var _this = this;
          //对username进行验证
          axios
            .get("http://localhost:3000/users/usernameyz", {
              params: {
                username: username
              }
            })
            .then(function(res) {
              //console.log(res.data);
              if (res.data.code == 0) {
                _this.username = res.data.username;
                _this.list = res.data.address;
              } else if (res.data.code == -1) {
                //console.log(res.data.msg);
                _this.username = "";
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        } else {
          this.username = "";
          this.phone = "";
        }
      }
    },
    //保存地址
    onSave(e) {
      let data = {};
      data.id = this.list.length + 1;
      data.name = e.name;
      data.tel = e.tel;
      data.address = e.province + e.city + e.county + e.addressDetail + "";
      data.addressDetail = e.addressDetail;
      data.areaCode = e.areaCode;
      data.postalCode = e.postalCode;
      data.isDefault = e.isDefault;
      this.list.push(data);
      var _this = this;
      axios
        .post("http://localhost:3000/users/addaddress", {
          username: this.username,
          list: this.list
        })
        .then(function(res) {
          //console.log(res.data);
          if (res.data.code == 0) {
            alert("地址添加成功");
            _this.$router.push("/profile/address");
          } else {
            alert(res.data.msg);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    onDelete() {
      alert(2);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    //点击返回
    onClickLeft() {
      this.$router.push("/profile/address");
    }
  },
  activated() {
    this.isLogin();
  }
};
</script>
