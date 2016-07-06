package springBoot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import bean.Model;

@Configuration
@EnableAutoConfiguration
@ComponentScan
@RestController
public class Application {
	
	 @RequestMapping("/home")
	  public String home() {
	    return "Hello";
	  }
	 
	 /**
		 * 
		 * @param request
		 * @return
		 */
		@RequestMapping(value="/queryForPage")
		@ResponseBody
		public Map<String,Object> queryForPage(HttpServletRequest request){
			Map<String,Object> map=new HashMap<String, Object>();
			List<Object> dataList=new ArrayList<Object>();
			for(int i=0;i<100;i++){
				Model model=new Model();
				model.setCookie("cookie"+i);
				model.setDeviceId("deviceId"+i);
				model.setStartTime("2016-06-27 16:36:06");
				model.setEndTime("2016-06-28 16:36:06");
				model.setRemoteAddr("192.168.0.116");
				model.setUri("http://");
				dataList.add(model);
			}
			map.put("draw",1);
			map.put("recordsTotal",dataList.size());
			map.put("recordsFiltered",dataList.size());
			map.put("data", dataList);
			return null;
		}
	 
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
