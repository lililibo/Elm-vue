<template>
  <div class="detail">
    <!--头部-->
		<div class="header">
			<div class="header_t">
				<a href="#"><i class="iconfont icon-fanhui"></i></a>
				<img src="//fuss10.elemecdn.com/7/63/06a2d3a322b4da10ec394e5ee79cbpng.png?imageMogr/format/webp/thumbnail/150x/" />
			</div>
			<div class="header_b">
				<div class="header_b1">
					八戒排骨<i class="iconfont icon-sanjiaoright"></i>
				</div>
				<div class="header_b2">
					<span>评价5.0</span>
					<span>月售40单</span>
					<span>蜂鸟快送</span>
					<span>约40分钟</span>
				</div>
				<div class="header_b3">
					<div class="header_b31">
						<span>满减</span>
						<span>满10减5，满25减8，满40减15</span>	
					</div>
					<div class="header_b32">
						<span>4个优惠<i class="iconfont icon-xiajiantou"></i></span>
					</div>
				</div>
				<div class="header_b4">
					公告：欢迎光临，用餐高峰期请提前下单，谢谢。
				</div>
			</div>
		</div>
		<!--导航-->
		<div class="banner">
			<ul>
				<li>点餐</li>
				<li>评价</li>
				<li>商家</li>
			</ul>
		</div>
		<!--商品-->
		<div class="shangpin"> 
			<div class="shangpinl">
				<ul>
					<li class="shangpinl_active"><a href="#"><i class="iconfont icon-youhui"></i>优惠</a></li>
				</ul>
			</div>
			<div class="shangpinr">
				<ul>
					<li>
						<a href="#">
							<img src="//fuss10.elemecdn.com/6/a6/07780287ee18bf351cfa48f02b637jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" />
							<div class="shangpinr1">
								<div class="shangpinr11">
									大脸鸡排+饮品
								</div>
								<div class="shangpinr12">
									7.8折起
								</div>
								<div class="shangpinr13">
									￥19.5起
								</div>
							</div>
							<button>+</button>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!--底部-->
		<div class="footer">
			<div class="footerl">
				<i class="iconfont icon-gouwuchekong"></i>
				<div>
					<span>未选购商品</span><br />
					<span>另需配送费3.5元</span>
				</div>
				
			</div>
			<div class="footerr">
				￥20起送
			</div>
		</div>
  </div>
</template>

<style>
.detail .header_t{
	width: 100%;
	height: 1rem;
	position: relative;
	background: url("//fuss10.elemecdn.com/7/63/06a2d3a322b4da10ec394e5ee79cbpng.png?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/");
	background-size: 100%;
	margin-bottom: .26rem;
}
.detail .header_t a{
	position: absolute;
	top: 0;
	color: white;
	left: 0;
}
.detail .header_t img{
	width: .75rem;
	height: .75rem;
	box-shadow: 0 0 0.4vw 0 rgba(0,0,0,.2);
	position: absolute;
	top: .42rem;
	left: 1.5rem;
}
.detail .header_b{
	padding: 0 .38rem 0;
}
.detail .header_b1{
	text-align: center;
	font-size: .2rem;
	font-weight: bold;
}
.detail .header_b2{
	text-align: center;
	font-size: .1rem;
	color: #666666;
}
.detail .header_b3{
	display: flex;
	font-size: .1rem;
	color: #666666;
	justify-content: space-between;
}
.detail .header_b31 span:nth-of-type(1){
	display: inline-block;
	color: white;
	width: .26rem;
	height: .13rem;
	background: #f07373;
	text-align: center;
	line-height: .13rem;
}
.detail .banner{
	height: .4rem;
	padding: 0 .48rem 0;
	margin-top: .24rem;
}
.detail .banner ul{
	display: flex;
	justify-content: space-between;
}
.detail .banner ul li{
	width: 20%;
	font-size: .12rem;
	color: #4c4c4c;
}
/*商品*/
.detail .shangpin{
	display: flex;
}
.detail .shangpinl{
	width: .77rem;
	background: #f8f8f8;
	margin-right: 10px;
}
.detail .shangpinl ul li{
	width: .77rem;
	height: .49rem;
	text-align: center;
	line-height: .49rem;
}
.detail .shangpinl_active{
	background: white;
}
.detail .shangpinr{
	flex: 1;
	padding-right: .15rem;
}
.detail .shangpinr ul li a{
	display: flex;
	justify-content: space-between;
}
.detail .shangpinr ul li a img{
	width: .95rem;
	height: .95rem;
}
.detail .shangpinr11{
	color: #333333;
	margin-bottom: .2rem;
}
.detail .shangpinr12{
	color: #ee806f;
	margin-bottom: .2rem;
}
.detail .shangpinr13{
	color: #ee806f;
}
.detail .shangpinr ul li a button{
	width: .22rem;
	height: .22rem;
	border-radius: 50%;
	font-size: .2rem;
	color: white;
	background: #2395ff;
}
/*底部*/
.detail .footer{
	height: .48rem;
	display: flex;
	width: 100%;
	justify-content: space-between;
	background: #505052;
	padding-left: .12rem;
	position: fixed;
	bottom: 0;
	left: 0;
}
.icon-gouwuchekong{
	display: inline-block;
	text-align: center;
	line-height: .3rem;
	width: .4rem;
	height: .4rem;
	color: #999999;
	box-sizing: border-box;
	border: .05rem solid #444444;
	border-radius: 50%;
}
.detail .footerl{
	display: flex;
	width: 1.5rem;
	justify-content: space-between;
}
.detail .footerl div{
	color: #999999;
}
.detail .footerr{
	width: 1.05rem;
	background: #535356;
	color: white;
	text-align: center;
	line-height: .48rem;
	font-size: .13rem;
}
</style>
