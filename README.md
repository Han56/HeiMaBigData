#Echarts数据可视化项目

##开发环境与工具

开发工具：WebStorm

[Less自动转换css文件](https://mp.weixin.qq.com/s?__biz=Mzg3OTI1ODkzOQ==&tempkey=MTA2OF93MCtIM25JYkJJN3kyaWtjUG9iZ2libjBKVnN3b1R4ZE01VWtIcV9wSWJUdkhIMC1iSUxhM0JYVDZkR0pPNzQySkI5VVdGUlhHTFlXeERXaWpOLWV2emNtQ0JUTXE3R1hsYUJPWmNZX1BQZkZHSTgzTzVfRmFPRktVQUZIZFVOVkdJdFpMcDloM2t1REhDSHNzZG9CTjZnbE11RFZSbnlnSU5jd1B3fn4%3D&chksm=4f067f077871f61113d75155599526be56b5c1f31684f67c230fb9c5c54a374e22994ff6c6cb#rd)

[利用flexible.js页面实现自适应]()

[px2rwd插件的使用](https://blog.csdn.net/u010377383/article/details/101198104)

##案例适配方案
1.flexiable.js将屏幕分成24等份  
2.px2rwd插件的基准值是80px  
3.设置基准值在 setting->的最下方 PX to RWD中的FontSize里边



##页面header头部的设计
###基础设置
body设置背景图，缩放100%，行高1.15  
背景图在容器内显示  
css初始化
###header布局
高度200px  
背景图在容器内显示  
缩放比100%  
h1标题部分 白色 38像素 居中显示  行高为80像素  
时间模块(showTime盒子中) 定位右侧 right为30px 行高75px 文字颜色为：rgba（255,255,255,0.7） 文字大小 20像素  
实时时间在shoeTime.js文件中，避免了代码的冗余

##页面主体部分设计
###mainbox盒子(主题模块)
一个左右为10px的内边距  
column列容器，分三列，占比 3:5:3
###公共面板模块panel  
高度310px  
像素为 1px solid rgba(25,186,139,17)边框  
背景图片 line.jpg  
padding 上0 左右15px 下为40px  
下外边距15px  
利用panel盒子的 before 和 after制作上面的两个角，大小为10px，线条为2px solid #02a5b6  
新加一个盒子 before和after 制作两个角 宽高为15px

####panel模块之柱形图模块（布局）
标题模块 h2 高度48px 文字颜色为白色 文字大小为20px  
柱形图内容模块高度240px  
其余的panel模块除内容外样式基本与之一致

###中间布局
上面是no 数字模块  
下面是map 地图模块  
数字模块 no背景色rgba(101,132,226,0.1) 15像素内边距  
no-hd 数字模块 一个边框 1px solid rgba(15,166,139,0.17)  
no-hd 数字模块，内部有两个 li 每个li高度80px 文字大小 70px 颜色为 #ffeb7b 字体是图标字体 electronicFont  
no-hd左上与右下的小角继续用 after和before制作，边距 2px solid #02a6b5 高度10px 宽度30px  
中间的小竖线的实现办法：在左侧的li的after设置一个 width:1px rgba(255,255,255,0.2) 高度50% top25% right:0即可  
no-bd内部同样是两个li 高度40px 文字颜色 rgba(255,255,2550.7) 文字大小18px 上内边距为 10px

####地图模块
地图模块 810px 内部包含4个盒子 chart放图表模块 球形盒子 旋转1 旋转2  
球体图片模块 map1 大小518px 加背景图片 缩放100% 定位到最中央 透明度0.6 做旋转动画  
旋转1 map2 大小643px 加背景图片 缩放100% 定位到中央 透明度 0.6 做旋转动画  
旋转2 map3 大小566px 加背景图片 缩放100% 定位到中央 旋转逆时针动画