package com.example.demo.Class;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Homework
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	private String board;
	private String classem;
	private String batch;
	private String subject;
	private String teacher;
	private String chapter;
	private String pdf;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBoard() {
		return board;
	}
	public void setBoard(String board) {
		this.board = board;
	}
	public String getClassem() {
		return classem;
	}
	public void setClassem(String classem) {
		this.classem = classem;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getTeacher() {
		return teacher;
	}
	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}
	public String getChapter() {
		return chapter;
	}
	public void setChapter(String chapter) {
		this.chapter = chapter;
	}
	public String getPdf() {
		return pdf;
	}
	public void setPdf(String pdf) {
		this.pdf = pdf;
	}
	@Override
	public String toString() {
		return "Homework [id=" + id + ", board=" + board + ", classem=" + classem + ", batch=" + batch + ", subject="
				+ subject + ", teacher=" + teacher + ", chapter=" + chapter + ", pdf=" + pdf + "]";
	}
	
	

}
