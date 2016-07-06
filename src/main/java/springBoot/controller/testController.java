package springBoot.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import bean.Model;

@Controller
@RequestMapping("/test")
public class testController {
	
	@RequestMapping(value="/indexData")
	public String indexData(HttpServletRequest request){
		return "indexData";
	}
	
	/**
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/queryForPage")
	@ResponseBody
	public Map<String,Object> queryForPage(HttpServletRequest request,Model entity){
		
		Map<String,Object> map=new HashMap<String, Object>();
		List<Object> dataList=new ArrayList<Object>();
		int from=0;
		if(request.getParameter("start")!=null){
			from =Integer.valueOf(request.getParameter("start"));
		}
		int pageSize=30;
		if(request.getParameter("length")!=null){
			 pageSize=Integer.valueOf(request.getParameter("length"));
		}
		
		SimpleDateFormat sdf=new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
		Date d=new Date();
		 Calendar calendar=Calendar.getInstance(); 
		int len=from+pageSize;
		if(len>100){
			len=100;
		}
		for(int i=from;i<len;i++){
			Model model=new Model();
			model.setCookie(""+i);
			model.setDeviceId("deviceId"+i);
		    calendar.setTime(d);
			calendar.set(Calendar.DAY_OF_MONTH,calendar.get(Calendar.DAY_OF_MONTH)+i);//让日期加1
			model.setStartTime(sdf.format(calendar.getTime()));
			model.setEndTime(sdf.format(calendar.getTime()));
			model.setRemoteAddr("192.168.0."+i);
			model.setUri("http://"+i);
			dataList.add(model);
		}
		map.put("draw",request.getParameter("draw"));
		map.put("recordsTotal",100);
		map.put("recordsFiltered",100);
		map.put("data", dataList);
		return map;
	}
}
