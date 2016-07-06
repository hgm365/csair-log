$(document).ready(function(){

	// 基于准备好的dom，初始化echarts实例
   myChart = echarts.init(document.getElementById('main'));
	
	var itemStyle = {//图形样式，有 normal(正常) 和 emphasis(高亮) 两个状态
		normal: {
			opacity: 0.8,
			shadowBlur: 10,
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowColor: 'rgba(0, 0, 0, 0.5)'
		}
	};
	
  option = {  
	 title: {
		        text: '日志查询',
		        subtext: '',
		        textStyle:{
		        	color:'#fff',
		        }
	 },
	backgroundColor: '#333',
	color: [
	        '#dd4444', '#fec42c', '#80F1BE'
	],
	legend: {
		y: 'top',
		data: ['表格数据','图例2','图例3'],
		textStyle: {
		color: '#fff',
		fontSize: 16
		}
	},
	grid: {
		x: '10%',
		x2: 150,
		y: '18%',
		y2: '10%'
	},
	toolbox: {
	    show: true,
	    feature: {
	    	restore: {},
	        saveAsImage: {}//保存图片
	    }
	},
	tooltip: {},
	visualMap: [
	{
		left: 'right',
		top: '10%',
		dimension: 1,
		min: 0,
		max: 100,
		itemWidth: 30,
		itemHeight: 120,
		calculable: true,
		precision: 0.1,
		text: ['圆形大小：数量'],
		textGap: 20,
		textStyle: {
		    color: '#fff'
		},
		inRange: {
		    symbolSize: [10, 70]
		},
		outOfRange: {
		    symbolSize: [10, 70],
		    color: ['rgba(255,255,255,.2)']
		},
		controller: {
		    inRange: {
		        color: ['#c23531']
		    },
		    outOfRange: {
		        color: ['#444']
		    }
		}
	},
	{
		left: 'right',
		bottom: '5%',
		dimension: 1,
		min: 0,
		max: 50,
		itemHeight: 120,
		calculable: true,
		precision: 0.1,
		text: ['明暗：数量'],
		textGap: 20,
		textStyle: {
		    color: '#fff'
		},
		inRange: {
		    colorLightness: [1, 0.5]
		},
		outOfRange: {
		    color: ['rgba(255,255,255,.2)']
		},
		controller: {
		    inRange: {
		        color: ['#c23531']
		    },
		    outOfRange: {
		        color: ['#444']
		    }
		}
	}
	],
	xAxis: {//X轴
		type: 'time',
		name: '开始时间',
		nameGap: 16,
		splitNumber:10,//坐标轴的分割段数
		nameTextStyle: {
			color: '#fff',
			fontSize: 14
		},
		splitLine: {
			show: false
		},
		axisLine: {
			lineStyle: {
			    color: '#777'
			}
		},
		axisTick: {
			lineStyle: {
			    color: '#777'
			}
		},
		axisLabel: {
			formatter: '{value}',
			textStyle: {
			    color: '#fff'
			}
		}
	},
	yAxis: {//Y轴
		type: 'value',
		name: '数量(cookie列)',
		nameLocation: 'end',//坐标轴名称显示位置。
		nameGap: 20,
		nameTextStyle: {
			color: '#fff',
			fontSize: 16
		},
		axisLine: {
			lineStyle: {
			    color: '#777'
			}
		},
		axisTick: {
			lineStyle: {
			    color: '#777'
			}
		},
		splitLine: {
			show: false
		},
		axisLabel: {
			textStyle: {
			    color: '#fff'
			}
		}
	},
	series: [
		{
			name: '表格数据',
			type: 'scatter',
			itemStyle: itemStyle,
			data: []
		},
		{
			name: '图例2',
			type: 'scatter',
			itemStyle: itemStyle,
			data: []
		},
		{
			name: '图例3',
			type: 'scatter',
			itemStyle: itemStyle,
			data: []
		},
	],
	};
	
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	window.onresize = myChart.resize; 
})