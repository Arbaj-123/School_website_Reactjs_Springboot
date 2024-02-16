package com.example.demo.Class;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Classem 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	private String cls_id;
	private String cls_name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCls_id() {
		return cls_id;
	}
	public void setCls_id(String cls_id) {
		this.cls_id = cls_id;
	}
	public String getCls_name() {
		return cls_name;
	}
	public void setCls_name(String cls_name) {
		this.cls_name = cls_name;
	}
	@Override
	public String toString() {
		return "Classem [id=" + id + ", cls_id=" + cls_id + ", cls_name=" + cls_name + "]";
	}
	
	

}
