package com.example.demo.Class;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Subject 
{

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	private String subject_id;
	private String subject_name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSubject_id() {
		return subject_id;
	}
	public void setSubject_id(String subject_id) {
		this.subject_id = subject_id;
	}
	public String getSubject_name() {
		return subject_name;
	}
	public void setSubject_name(String subject_name) {
		this.subject_name = subject_name;
	}
	@Override
	public String toString() {
		return "Subject [id=" + id + ", subject_id=" + subject_id + ", subject_name=" + subject_name + "]";
	}
	
	
	
}
