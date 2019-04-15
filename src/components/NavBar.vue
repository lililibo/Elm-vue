<template>
  <div class="footer">
    <ul>
      <li>
        <a href="#" class="footer-active">
          <i class="iconfont icon-changyonglogo40"></i>首页
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-faxian"></i>发现
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-dingdan"></i>订单
        </a>
      </li>
      <li>
        <a href="#">
          <i class="iconfont icon-profile"></i>我的
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
/* 底部 */
.footer {
  position: fixed;
  height: 0.52rem;
  border-bottom: 1px solid #e3e3e4;
  border-top: 1px solid #e3e3e4;
  background: #fff;
  box-sizing: border-box;
  width: 100%;
  padding-top: 0.02rem;
  bottom: 0;
  left: 0;
}
.footer ul {
  display: flex;
  justify-content: space-around;
}
.footer ul li a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-active {
  color: #009bff;
}
</style>
