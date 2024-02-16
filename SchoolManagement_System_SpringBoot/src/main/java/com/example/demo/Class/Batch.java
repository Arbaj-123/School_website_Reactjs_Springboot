package com.example.demo.Class;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Batch
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String batch_id;
	private String batch_name;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBatch_id() {
		return batch_id;
	}
	public void setBatch_id(String batch_id) {
		this.batch_id = batch_id;
	}
	public String getBatch_name() {
		return batch_name;
	}
	public void setBatch_name(String batch_name) {
		this.batch_name = batch_name;
	}
	@Override
	public String toString() {
		return "Batch [id=" + id + ", batch_id=" + batch_id + ", batch_name=" + batch_name + "]";
	}
	
	
}
