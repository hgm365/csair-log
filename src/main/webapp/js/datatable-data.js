
 $(document).ready(function(){
	function initName(pName,index,vName){
			return pName+"["+index+"]."+vName;
	}
  // datatable
    oTable = $("#dataTable").DataTable( {
      searching: false,
     // "bSort": true, //排序功能
      "processing": true,
      "autoWidth": true,
      "serverSide": true,//服务器模式
      responsive: true,
      "order": [[ 1, 'asc' ]],
      "columnDefs": [ {
          "searchable": false,
          "orderable": false,
          "targets": 0
      } ],
     // stateSave: true,//保存状态
     /*"language": {//语言文件，国际化
          "url": "../resources/zh_CN.txt"
      },*/
      "oLanguage": {
    	  "sLengthMenu": "每页显示 _MENU_ 条记录",
    	  "sZeroRecords": "抱歉， 没有找到",
    	  "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
    	  "sInfoEmpty": "没有数据",
    	  "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
    	  "oPaginate": {
    	  "sFirst": "首页",
    	  "sPrevious": "前一页",
    	  "sNext": "后一页",
    	  "sLast": "尾页"
    	  },
    	  "sZeroRecords": "没有检索到数据...",
    	  "sProcessing": "数据加载中，请稍候..."
       },
      "aLengthMenu": [[30, 50, 100], [30, 50, 100]],//每页显示
      "ajax": {
	    	"dataType": 'json',
	    	"type": "POST",
    	    "url": "datatables/datatable.json",
    	    "url": "/test/queryForPage",
    	    "data": function ( d ) {
    	    	var jsonuserinfo = $('#searchForm').serializeObject();  
    	    	return $.extend( {}, d,jsonuserinfo);
    	     }
    	    },
      "columns": [
			  { "data": "" ,
				 defaultContent:"",
				 width:100,
				 /*"sClass":"text-center",*/
			  },
              { "data": "start_time" ,
            	 defaultContent:"",
              },
              { "data": "end_time",
            	 defaultContent:"",
              },
              { "data": "cookie" ,
            	 defaultContent:"",
              },
              { "data": "device_id",
            	 defaultContent:"" ,
              },
              { "data": "uri" ,
            	 defaultContent:"",
              },
              { "data": "remote_addr",
            	 defaultContent:"",
              },
        ],
      "sDom": "<'row'<'col-sm-6'l><'col-sm-6'B><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
      "sPaginationType": "full_numbers",
      buttons: {
    	  buttons: [
    				{
    				    extend: 'excelHtml5',
    				    text: 'excel',
    			    	className:'btn btn-info',
    				    exportOptions: {
    				        modifier: {
    				            page: 'current'
    				        },
    				        columns: ':gt(0)',
    				       /* rows: function ( idx, data, node ) {
    		                    // If rows are selected, export those, if not, export all
    		                    if(oTable.rows( { selected: true } ).any())
    		                    	{
    		                    		return $.inArray(parseInt(data.asset_id), oTable.rows( { selected: true } )) !== -1;
    		                    	}
    		                    return true;
    		                }*/
    				    },
    				    
    				},
    				{
    				    extend: 'csvHtml5',
    				    text: 'csv',
    				    className:'btn btn-info',
    				    exportOptions: {
    				        modifier: {
    				            page: 'current'
    				        }
    				    }
    				},
          ]
      },
      "fnDrawCallback": function (oSettings) {
    	  //加上序列号
		  oTable.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
	            cell.innerHTML = i+1;
	        } );
    	  
		 //实例化图表数据
    	 if(myChart){
   			myChart.setOption({
   				visualMap: [
   				     	{
   				     		max:200,
   				     	},
   				     	{
   				     		max:100,
   				     	}
   				],
   				tooltip: {
   					padding: 10,
   					backgroundColor: '#222',
   					borderColor: '#777',
   					borderWidth: 1,
   					formatter: function (obj) {
   						var value = obj.value;
   						return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
   					    + obj.seriesName + ' ' + value[0].Format("yyyy-MM-dd HH:mm:ss")
   					    + '</div>'
   					    + "数量："+value[1] + '<br>';
   					}
   				},
   	            series: [
   	               {
   	                data: (function () {
   	                   var d = [];
   	                   var len = 0;
   	                   var now = new Date();
   	                   var value;
   	                   if(oTable.data()){
   	                	   var listData=oTable.data();
   	                	   for(var i in listData){
   	                		   var model=listData[i];
   	                		   var startTime=model.start_time;
   	                		   if(startTime){
   	                			startTime = startTime.replace(/-/g,"/");
   	                			 d.push([
   	     	                           new Date(startTime),
   	     	                           model.cookie,
   	     	                           model.uri
   	     	                       ]);
   	                		   }
   	                	   }
   	                   }
   	                   return d;
   	               })()
   	             },
   	             {
	                data: (function () {
	                   var d = [];
	                   var len = 0;
	                   var now = new Date();
	                   var value;
	                   if(oTable.data()){
	                	   var listData=oTable.data();
	                	   for(var i in listData){
	                		   var model=listData[i];
	                		   var startTime=model.start_time;
	                		   if(startTime){
	                			startTime = startTime.replace(/-/g,"/");
	                			 d.push([
	     	                           new Date(startTime),
	     	                           Math.round(Math.random()*100),
	     	                           model.uri
	     	                       ]);
	                		   }
	                	   }
	                   }
	                   return d;
	               })()
    	          },
    	          {
    	        	  data: (function () {
   	                   var d = [];
   	                   var len = 0;
   	                   var now = new Date();
   	                   var value;
   	                   if(oTable.data()){
   	                	   var listData=oTable.data();
   	                	   for(var i in listData){
   	                		   var model=listData[i];
   	                		   var startTime=model.start_time;
   	                		   if(startTime){
   	                			startTime = startTime.replace(/-/g,"/");
   	                			 d.push([
   	     	                           new Date(startTime),
   	     	                           Math.round(Math.random()*100),
   	     	                           model.uri
   	     	                       ]);
   	                		   }
   	                	   }
   	                   }
   	                   return d;
   	               })()
    	          }
   	             ]
   	         });
   		 }
      },
      fnPreDrawCallback: function (oSettings) { 
    	  var options=["cookies","deviceIds","uris","remoteAddrs"];
    	  for(var i in options){
    		  var name=options[i];
    		  var index=0;
      		$("div[name='"+name+"']").each(function(){
      			$(this).find("select.pRelation").attr("name",initName(name,index,"relationship"));
      			$(this).find("input.pValue").attr("name",initName(name,index,"value"));
      			index++;
      		});
      	}
    	return true;
      },
    } );
  });
 