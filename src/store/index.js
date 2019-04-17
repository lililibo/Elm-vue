import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store(
    {
        state:{
            //放数据的
            thiscity:'定位失败请手动选择'
        },
        getters:{
            //对数据二次计算
        },
        mutations:{
            //唯一能修改state
            setcity(state,newcity){
                state.thiscity=newcity
            }
        },
        actions:{
            //可以多次mutations的东西
        }
    }
)
export default store;