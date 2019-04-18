<template>
  <div class="root-container" id="root">
    <div data-reactroot class="home-page entrance-fixed fixed-1">
      <!-- react-empty: 19 -->
      <div class="home-scroll">
        <div class="home-welcome">
          <div class="home-welcome-container">
            <div class="home-welcome-avatar"></div>
            <div class="home-welcome-greeting">您好，客服小e很高兴为您服务！</div>
          </div>
        </div>
        <div class="home-module">
          <!-- react-empty: 26 -->
          <div class="faq-module">
            <header class="faq-header">常见问题</header>
            <dl class="faq-list">
              <div class="faq-list-item">
                <dt class="faq-category can-click">
                  <i
                    class="faq-category-icon"
                    style="background-image: url(&quot;https://fuss10.elemecdn.com/d/dc/4a7a65364efc09d4bbd72ee9b0aadpng.png&quot;);"
                  ></i>
                  <span class="faq-category-item showArrow">催单问题</span>
                </dt>
                <div class="faq-category-list">
                  <dd class="category-list-item">订单超时了怎么办？</dd>
                  <dd class="category-list-item">下单以后怎么修改订单信息？</dd>
                </div>
              </div>
              <div class="faq-list-item">
                <dt class="faq-category can-click">
                  <i
                    class="faq-category-icon"
                    style="background-image: url(&quot;https://fuss10.elemecdn.com/9/d8/2efe04cd59b05d4110bbd58e7e6c7png.png&quot;);"
                  ></i>
                  <span class="faq-category-item showArrow">退单问题</span>
                </dt>
                <div class="faq-category-list">
                  <dd class="category-list-item">【申请客服介入】进度查询</dd>
                  <dd class="category-list-item">退单后钱款多久到账？</dd>
                </div>
              </div>
              <div class="faq-list-item">
                <dt class="faq-category can-click">
                  <i
                    class="faq-category-icon"
                    style="background-image: url(&quot;https://fuss10.elemecdn.com/9/ef/122ff32b81589cb924a495c7c2e53png.png&quot;);"
                  ></i>
                  <span class="faq-category-item showArrow">活动问题</span>
                </dt>
                <div class="faq-category-list">
                  <dd class="category-list-item">我是新用户吗？</dd>
                  <dd class="category-list-item">怎么关闭超级会员自动续费功能？</dd>
                </div>
              </div>
              <div class="faq-list-item">
                <dt class="faq-category">
                  <i
                    class="faq-category-icon"
                    style="background-image: url(&quot;https://fuss10.elemecdn.com/b/73/f8c0990b54f84078043a05a62b99cpng.png&quot;);"
                  ></i>
                  <span class="faq-category-item">投诉建议</span>
                </dt>
                <div class="faq-category-list">
                  <dd class="category-list-item">怎么投诉？</dd>
                  <dd class="category-list-item">错送漏送餐品怎么办？</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <section class>
        <section class="customer-link-module parallel">
          <a href="#im?from=eleme-app?status=4" class="customer-link">
            <i class="customer-tag iconfont icon-liaotian third"></i>
            <span>在线客服</span>
          </a>
          <span class="customer-link-divide"></span>
          <a href="tel:10105757" class="customer-link">
            <i class="customer-tag iconfont icon-dianhua"></i>
            <span>电话客服</span>
          </a>
        </section>
      </section>
    </div>
  </div>
</template>

<style>
.root-container,
body,
html {
  height: 100%;
  box-sizing: border-box;
}
.home-page.fixed-1 {
  padding-bottom: 0.7rem;
}
.home-page {
  width: 100%;
  height: 100%;
}
.home-scroll {
  height: 100%;
  overflow: scroll;
}
.home-welcome {
  width: 100%;
  height: 1.2rem;
  background: url(//shadow.elemecdn.com/faas/service/static/media/bg.c8e3f1ab.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
.home-welcome-container {
  display: flex;
  height: 0.8rem;
  align-items: center;
}
.home-welcome-avatar {
  margin: 0.16rem 0.16rem 0.16rem 0.24rem;
  width: 0.48rem;
  height: 0.48rem;
  background-image: url(//shadow.elemecdn.com/faas/service/static/media/customer-service.9f9fce54.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
}
.home-welcome-greeting {
  position: relative;
  width: calc(100% - 100px);
  padding: 0.08rem 0.12rem;
  background-color: rgba(51, 51, 51, 0.15);
  border-radius: 0.04rem;
  color: #fff;
  font-size: 0.14rem;
  vertical-align: top;
}
/* 常见问题 */
.home-module {
  position: relative;
  top: -0.32rem;
  margin: 0 0.08rem;
  z-index: 10;
}

.faq-module {
  margin-bottom: 0.08rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.faq-header {
  padding: 0.16rem 0.16rem 0;
  font-size: 0.14rem;
  font-weight: 600;
  color: #333;
  background: #fff;
}
.faq-list {
  margin: 0;
}
.faq-list-item {
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.faq-category {
  position: relative;
  display: inline-block;
  margin: 0.15rem 0;
  width: 0.9rem;
  min-height: 0.6rem;
  border-right: 1px solid #eee;
  text-align: center;
  vertical-align: middle;
}
.faq-category-list {
  display: inline-block;
  width: calc(100% - 0.9rem);
  overflow: hidden;
  vertical-align: middle;
}
.category-list-item {
  margin: 0 0.12rem;
  min-height: 0.45rem;
  line-height: 0.45rem;
  overflow: hidden;
  font-size: 0.14rem;
  color: #666;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.category-list-item:not(:last-child) {
  border-bottom: 1px solid #eee;
}
.faq-list-item {
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.faq-category {
  position: relative;
  display: inline-block;
  margin: 0.15rem0;
  width: 0.9rem;
  min-height: 0.6rem;
  border-right: 1px solid #eee;
  text-align: center;
  vertical-align: middle;
}
/* .warning-container {
    display: none;
} */
.home-page.entrance-fixed .customer-link-module {
  position: fixed;
  bottom: 0;
  z-index: 233;
}
.customer-link-module.parallel {
  width: 100%;
  background: #fff;
  box-shadow: 0 -0.03rem 0.12rem 0 rgba(0, 0, 0, 0.05);
}
.parallel .customer-link {
  display: inline-block;
  padding: 0.08rem 0;
  width: calc(50% - 0.5px);
  height: 0.6rem;
  background: #fff;
  font-size: 0.12rem;
  color: #666;
  border: none;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
}
.parallel .customer-link-divide {
  display: inline-block;
  margin-top: 0.16rem;
  width: 0;
  height: 0.3rem;
  border-right: 1px solid #f1f1f1;
}
.parallel .customer-tag {
    position: relative;
    display: block;
    margin: 2px auto;
    width: .2rem;
    height: .2rem;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
