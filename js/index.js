//使用立即执行函数
//柱状图模块1
(function () {
    //1.实例化对象
    var myChart=echarts.init(document.querySelector('.bar .chart'));
    //2.指定配置项和数据
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        toolbox:{
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "旅游",
                    "教育",
                    "游戏",
                    "医疗",
                    "电商",
                    "社交",
                    "金融"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签相关样式
                axisLabel:{
                    color: "rgba(255,255,255,0.6)",
                    fontSize:"12"
                },
                //不显示x坐标轴的样式
                axisLine:{
                  show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                //修改刻度标签相关样式
                axisLabel:{
                    color: "rgba(255,255,255,0.6)",
                    fontSize:"12"
                },
                //更改y坐标轴的样式
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,2550.1)"
                    }
                },
                //y轴分割线样式
                splitLine:{
                    lineStyle: {
                        color:"rgba(255,255,255,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                //柱子的宽度属性
                barWidth: '35%',
                data: [10, 52, 200, 334, 390, 330, 220],
                //柱子的样式属性
                itemStyle:{
                    //将柱子改的圆润点
                    barBorderRadius:5
                }
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option);
    //4.图表跟随屏幕自适应
    window.addEventListener('resize',function () {
        myChart.resize();
    })
})();