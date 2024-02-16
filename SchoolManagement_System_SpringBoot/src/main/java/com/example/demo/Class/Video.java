package com.example.demo.Class;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Video
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int id;
	private String vid_boarde;
	private String vid_class;
	private String vid_batch;
	private String vid_subject;
	private String vid_teacher;
	private String vid_chapter;
	private String vid_video;
	private String vid_link;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getVid_boarde() {
		return vid_boarde;
	}
	public void setVid_boarde(String vid_boarde) {
		this.vid_boarde = vid_boarde;
	}
	public String getVid_class() {
		return vid_class;
	}
	public void setVid_class(String vid_class) {
		this.vid_class = vid_class;
	}
	public String getVid_batch() {
		return vid_batch;
	}
	public void setVid_batch(String vid_batch) {
		this.vid_batch = vid_batch;
	}
	public String getVid_subject() {
		return vid_subject;
	}
	public void setVid_subject(String vid_subject) {
		this.vid_subject = vid_subject;
	}
	public String getVid_teacher() {
		return vid_teacher;
	}
	public void setVid_teacher(String vid_teacher) {
		this.vid_teacher = vid_teacher;
	}
	public String getVid_chapter() {
		return vid_chapter;
	}
	public void setVid_chapter(String vid_chapter) {
		this.vid_chapter = vid_chapter;
	}
	public String getVid_video() {
		return vid_video;
	}
	public void setVid_video(String vid_video) {
		this.vid_video = vid_video;
	}
	public String getVid_link() {
		return vid_link;
	}
	public void setVid_link(String vid_link) {
		this.vid_link = vid_link;
	}
	@Override
	public String toString() {
		return "Video [id=" + id + ", vid_boarde=" + vid_boarde + ", vid_class=" + vid_class + ", vid_batch="
				+ vid_batch + ", vid_subject=" + vid_subject + ", vid_teacher=" + vid_teacher + ", vid_chapter="
				+ vid_chapter + ", vid_video=" + vid_video + ", vid_link=" + vid_link + "]";
	}
	
	

}
