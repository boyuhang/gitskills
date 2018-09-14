//柱状图
var myChart = echarts.init(document.getElementById('bottom-lf'))
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        left:370,
        data:['通过','未通过']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['延安','咸阳','榆林','宝鸡','西安','安康']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'通过',
            type:'bar',
            data:[45, 25, 31, 25, 38, 62]
        },
        {
            name:'未通过',
            type:'bar',
            data:[21, 18, 9, 17, 22, 10],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
    ]
};
myChart.setOption(option)

//折线图

var myChart = echarts.init(document.getElementById('bottom-rt'))
option = {
    title: {
        text: '数量(个)'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['延安','咸阳','榆林','西安','安康','宝鸡']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['08.13','08.14','08.15','08.16','08.17','08.18','08.19']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'延安',
            type:'line',
            data:[7, 25, 35, 22, 11, 36, 12]
        },
        {
            name:'咸阳',
            type:'line',
            data:[2, 20, 15, 30, 4, 19, 19]
        },
        {
            name:'榆林',
            type:'line',
            data:[0, 8, 10, 13, 9, 14, 11]
        },
        {
            name:'西安',
            type:'line',
            data:[0, 8, 9, 11, 13, 5, 7]
        },
        {
            name:'安康',
            type:'line',
            data:[21, 32, 22, 37, 30, 35, 33]
        },
        {
            name:'宝鸡',
            type:'line',
            data:[0, 0, 0, 0, 0, 0, 0]
        }
    ]
};
myChart.setOption(option)
