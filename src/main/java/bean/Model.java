package bean;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Model {
	@JsonProperty("start_time")
    private String startTime;//开始时间
    @JsonProperty("end_time")
    private String endTime;//结束时间
    @JsonProperty("cookie")
    private String cookie;//cookie
    
    private List<ValReration> cookies;//cookie
    
    @JsonProperty("device_id") 
    private String deviceId;
    
    private List<ValReration> deviceIds;//设备id
    
    @JsonProperty("uri")
    private String uri;
    
    private List<ValReration> uris;//接口uri
    @JsonProperty("remote_addr")
    private String remoteAddr;
    
    private List<ValReration> remoteAddrs;//客户端 ip
    
    @JsonProperty("page_size")
    private int length;//结果数
    @JsonProperty("from")
    private int start;//起始记录数
    
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
	
	public String getCookie() {
		return cookie;
	}
	public void setCookie(String cookie) {
		this.cookie = cookie;
	}
	public List<ValReration> getCookies() {
		return cookies;
	}
	public void setCookies(List<ValReration> cookies) {
		this.cookies = cookies;
	}
	public String getDeviceId() {
		return deviceId;
	}
	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}
	public List<ValReration> getDeviceIds() {
		return deviceIds;
	}
	public void setDeviceIds(List<ValReration> deviceIds) {
		this.deviceIds = deviceIds;
	}
	public String getUri() {
		return uri;
	}
	public void setUri(String uri) {
		this.uri = uri;
	}
	public List<ValReration> getUris() {
		return uris;
	}
	public void setUris(List<ValReration> uris) {
		this.uris = uris;
	}
	public String getRemoteAddr() {
		return remoteAddr;
	}
	public void setRemoteAddr(String remoteAddr) {
		this.remoteAddr = remoteAddr;
	}
	public List<ValReration> getRemoteAddrs() {
		return remoteAddrs;
	}
	public void setRemoteAddrs(List<ValReration> remoteAddrs) {
		this.remoteAddrs = remoteAddrs;
	}
	public int getLength() {
		return length;
	}
	public void setLength(int length) {
		this.length = length;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
}
