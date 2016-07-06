package bean;

public class ValReration {
	
	private String relationship; //与:must 或:should 非:must_not
    private String value;
    
	public String getRelationship() {
		return relationship;
	}
	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
    
    
}
