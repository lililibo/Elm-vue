import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store(
    {
        state: {
            //放数据的
            thiscity: '定位失败请手动选择',
            geography: { x: 22.547, y: 114.085947 },
            shopid:1
        },
        getters: {
        },
        mutations: {
            //唯一能修改state
            setcity(state, newcity) {
                state.thiscity = newcity
            },
            setgeography(state, newetgeography) {
                state.geography=newetgeography
            },
            setshopid(state,newshopid){
                state.shopid=newshopid
            }
        },
        actions: {
            //可以多次mutations的东西
        }
    }
)
export default store;