<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-cell title="营业资质"/>
      <van-cell title="服务承诺"/>
      <van-collapse-item title="公示栏" name="3">
        <ul class="listbox">
          <li class="Tree-2xyeO">
            <span>关于修改《物流准时达协议 plus》的公示</span>
          </li>
          <li class="Tree-2xyeO">
            <span>关于修改《饿了么·商家名称命名规范》的公示</span>
          </li>
          <li class="Tree-2xyeO">
            <span>知识产权侵权店铺下线公示</span>
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="饿了么平台规则" name="4">
        <ul class="listbox">
          <li class="Tree-2xyeO">
            <span>用户协议</span>
          </li>
          <li class="Tree-2xyeO">
            <span>平台公告</span>
          </li>
          <li class="Tree-2xyeO">
            <span>售后规则</span>
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="餐饮中心规则" name="5">
        <ul class="listbox">
          <li class="Tree-2xyeO">
            <span>基础规则</span>
          </li>
          <li class="Tree-2xyeO">
            <span>商户准入规则</span>
          </li>
          <li class="Tree-2xyeO">
            <span>店铺运营管理规则</span>
          </li>
          <li class="Tree-2xyeO">
            <span>商品管理规则</span>
          </li>
          <li class="Tree-2xyeO">
            <span>配送规则</span>
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="非餐饮中心规则" name="6">
          <ul class="listbox">
            <li class="Tree-2xyeO">
              <span>基础规则</span>
            </li>
            <li class="Tree-2xyeO">
              <span>平台项目商户入驻规则</span>
            </li>
            <li class="Tree-2xyeO">
              <span>用户协议</span>
            </li>
            <li class="Tree-2xyeO">
              <span>平台公告</span>
            </li>
            <li class="Tree-2xyeO">
              <span>售后规则</span>
            </li>
          </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accordion: false,
      activeNames: []
    };
  }
};
</script>
<style>
.listbox{
  margin-top: -10px;
}
.Tree-2xyeO{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  line-height: 50px;
  padding-left: 30px;
}
</style>
