package com.example.demo.Class;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Teacher 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	
	private int id;
	private String tech_fname;
	private String tech_mname;
	private String tech_lname;
	private String tech_uname;
	private String tech_password;
	@Override
	public String toString() {
		return "Teacher [id=" + id + ", tech_fname=" + tech_fname + ", tech_mname=" + tech_mname + ", tech_lname="
				+ tech_lname + ", tech_uname=" + tech_uname + ", tech_password=" + tech_password + ", tech_mobile="
				+ tech_mobile + ", tech_photo=" + tech_photo + ", tech_address=" + tech_address + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTech_fname() {
		return tech_fname;
	}
	public void setTech_fname(String tech_fname) {
		this.tech_fname = tech_fname;
	}
	public String getTech_mname() {
		return tech_mname;
	}
	public void setTech_mname(String tech_mname) {
		this.tech_mname = tech_mname;
	}
	public String getTech_lname() {
		return tech_lname;
	}
	public void setTech_lname(String tech_lname) {
		this.tech_lname = tech_lname;
	}
	public String getTech_uname() {
		return tech_uname;
	}
	public void setTech_uname(String tech_uname) {
		this.tech_uname = tech_uname;
	}
	public String getTech_password() {
		return tech_password;
	}
	public void setTech_password(String tech_password) {
		this.tech_password = tech_password;
	}
	public String getTech_mobile() {
		return tech_mobile;
	}
	public void setTech_mobile(String tech_mobile) {
		this.tech_mobile = tech_mobile;
	}
	public String getTech_photo() {
		return tech_photo;
	}
	public void setTech_photo(String tech_photo) {
		this.tech_photo = tech_photo;
	}
	public String getTech_address() {
		return tech_address;
	}
	public void setTech_address(String tech_address) {
		this.tech_address = tech_address;
	}
	private String tech_mobile;
	private String tech_photo;
	private String tech_address;
	
}
