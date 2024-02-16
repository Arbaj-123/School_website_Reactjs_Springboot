package com.example.demo.Class;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	private String stu_fname;
	private String stu_mname;
	private String stu_lname;
	private String stu_mobile;
	private String stu_photo;
	private String stu_address;
	private String stu_uname;
	private String stu_password;
	private String stu_cpassword;
	private String stu_board;
	private String stu_class;
	private String stu_batch;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStu_fname() {
		return stu_fname;
	}
	public void setStu_fname(String stu_fname) {
		this.stu_fname = stu_fname;
	}
	public String getStu_mname() {
		return stu_mname;
	}
	public void setStu_mname(String stu_mname) {
		this.stu_mname = stu_mname;
	}
	public String getStu_lname() {
		return stu_lname;
	}
	public void setStu_lname(String stu_lname) {
		this.stu_lname = stu_lname;
	}
	public String getStu_mobile() {
		return stu_mobile;
	}
	public void setStu_mobile(String stu_mobile) {
		this.stu_mobile = stu_mobile;
	}
	public String getStu_photo() {
		return stu_photo;
	}
	public void setStu_photo(String stu_photo) {
		this.stu_photo = stu_photo;
	}
	public String getStu_address() {
		return stu_address;
	}
	public void setStu_address(String stu_address) {
		this.stu_address = stu_address;
	}
	public String getStu_uname() {
		return stu_uname;
	}
	public void setStu_uname(String stu_uname) {
		this.stu_uname = stu_uname;
	}
	public String getStu_password() {
		return stu_password;
	}
	public void setStu_password(String stu_password) {
		this.stu_password = stu_password;
	}
	public String getStu_cpassword() {
		return stu_cpassword;
	}
	public void setStu_cpassword(String stu_cpassword) {
		this.stu_cpassword = stu_cpassword;
	}
	public String getStu_board() {
		return stu_board;
	}
	public void setStu_board(String stu_board) {
		this.stu_board = stu_board;
	}
	public String getStu_class() {
		return stu_class;
	}
	public void setStu_class(String stu_class) {
		this.stu_class = stu_class;
	}
	public String getStu_batch() {
		return stu_batch;
	}
	public void setStu_batch(String stu_batch) {
		this.stu_batch = stu_batch;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", stu_fname=" + stu_fname + ", stu_mname=" + stu_mname + ", stu_lname="
				+ stu_lname + ", stu_mobile=" + stu_mobile + ", stu_photo=" + stu_photo + ", stu_address=" + stu_address
				+ ", stu_uname=" + stu_uname + ", stu_password=" + stu_password + ", stu_cpassword=" + stu_cpassword
				+ ", stu_board=" + stu_board + ", stu_class=" + stu_class + ", stu_batch=" + stu_batch + "]";
	}
	
	

}
