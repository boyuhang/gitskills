  //创建和初始化地图函数：
  function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
  }
  //创建地图函数：
  function createMap(){
      var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
      var point = new BMap.Point(116.324509,29.985843);//定义一个中心点坐标
      map.centerAndZoom(point,4);//设定地图的中心点和坐标并将地图显示在地图容器中
      window.map = map;//将map变量存储在全局
  }
  //地图事件设置函数：
  function setMapEvent(){
      map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom();//启用地图滚轮放大缩小
      map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard();//启用键盘上下左右键移动地图
  }
  //地图控件添加函数：
  function addMapControl(){
                      }
  initMap();//创建和初始化地图
//环形图4
  var myChart = echarts.init(document.getElementById('chart2'))
   option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right:162,
        bottom:0,
        data:['未完成','云南移动',]
    },
    color:['#FE8A8A','#87CEEB'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:''},
                {value:910, name:'云南移动'},
            ]
        }
    ]
};
  myChart.setOption(option)


//环形图3
var myChart = echarts.init(document.getElementById('chart3'))
 option = {
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      right:162,
      bottom:0,
      data:['未完成','云南移动',]
  },
  color:['#DAA3FF','#87CEEB'],
  series: [
      {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[
              {value:335, name:''},
              {value:910, name:'云南移动'},
          ]
      }
  ]
};
myChart.setOption(option)

//环形图2
var myChart = echarts.init(document.getElementById('chart4'))
 option = {
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      right:162,
      bottom:0,
      data:['未完成','云南移动',]
  },
  color:['#FE8A8A','#87CEEB'],
  series: [
      {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[
              {value:335, name:''},
              {value:910, name:'云南移动'},
          ]
      }
  ]
};
myChart.setOption(option)

//环形图1
var myChart = echarts.init(document.getElementById('chart5'))
 option = {
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      right:162,
      bottom:0,
      data:['未完成','上海移动',]
  },
  color:['#FE8A8A','#87CEEB'],
  series: [
      {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[
              {value:335, name:''},
              {value:910, name:'上海移动'},
          ]
      }
  ]
};
myChart.setOption(option)


//环形图1
var myChart = echarts.init(document.getElementById('center-mid'))
 option = {
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      itemGap:20,
      right:40,
      bottom:80,
      data:['上海移动','云南移动','江苏移动','浙江移动','河南移动','郑州移动']
  },
  color:['#FE8A8A','#87CEEB','#6DE6DF','red','#DAA3FF','yellow'],
  series: [
      {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[
              {value:427, name:'上海移动'},
              {value:427, name:'云南移动'},
              {value:427, name:'江苏移动'},
              {value:427, name:'浙江移动'},
              {value:427, name:'河南移动'},
              {value:427, name:'郑州移动'},
          ]
      }
  ]
};
myChart.setOption(option)


//柱状图
var myChart = echarts.init(document.getElementById('center-lf'))
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
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['上海移动','云南移动','江苏移动','河南电信','浙江移动','郑州电信']
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
