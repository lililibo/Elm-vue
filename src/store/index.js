import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store(
    {
        state: {
            //放数据的
            thiscity: '定位失败请手动选择',
            geography: { x: 22.547, y: 114.085947 },
            shopid: 1,
            goodsstdata: []
        },
        getters: {
            goodCatNums (state) {
                // this.catData 中 num 的总和
                var total = 0;
                state.goodsstdata.map(item => {
                  total += item.num
                });
                return total;
              }
        },
        mutations: {
            //唯一能修改state
            setcity(state, newcity) {
                state.thiscity = newcity
            },
            setgeography(state, newetgeography) {
                state.geography = newetgeography
            },
            setshopid(state, newshopid) {
                state.shopid = newshopid
            },
            catAdd(state, good) {
                var flog = false;
                var set = 0;
                var goodscat = state.goodsstdata;
                for (var i = 0; i < goodscat .length; i++) {
                    if (goodscat [i].goods == good) {
                        flog = true;
                        set = i;
                    }
                }
                //查询购物车中是否有当前商品数据
                if (flog) {
                    goodscat [set].num += 1;
                    return goodscat[set].num;
                } else {
                    state.goodsstdata.push(Object.assign({ goods: good }, { num: 1 }));
                    return 1;
                }

                // 将当前的购物车数据存放到本地存储里面。
                // localStorage.setItem('catData', JSON.stringify(state.catData))
            },
            catReduce(state, good) {
                var flog = false;
                var set = 0;
                var goodscat = state.goodsstdata;
                for (var i = 0; i < goodscat.length; i++) {
                    if (goodscat[i].goods == good) {
                        flog = true;
                        set = i;
                    }
                }
                if (flog) {
                    // 存在
                    if (goodscat[set].num === 1) {
                        // 删除这个商品
                        goodscat.splice(set, 1);
                    } else {
                        // 数量减一
                        goodscat[set].num -= 1;
                        return goodscat[set].num;
                    }
                }

                // 将当前的购物车数据存放到本地存储里面。
                // localStorage.setItem('catData', JSON.stringify(state.catData))
            },
        },
        actions: {
            //可以多次mutations的东西
        }
    }
)
export default store;