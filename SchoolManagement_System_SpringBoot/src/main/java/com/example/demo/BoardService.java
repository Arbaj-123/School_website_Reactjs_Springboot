package com.example.demo;

import java.util.List;

import com.example.demo.Class.Batch;
import com.example.demo.Class.Board;
import com.example.demo.Class.Classem;
import com.example.demo.Class.Homework;
import com.example.demo.Class.Student;
import com.example.demo.Class.Subject;
import com.example.demo.Class.Teacher;
import com.example.demo.Class.Video;

public interface BoardService 
{
	
	// board master 
	void register(Board b);
	
	List<Board> display();
	
	Board getsingleid(int id);
	
	Board update(Board j);
	
	void deletedata(int id);
	
	// batch master
	
	void batch_reg(Batch b2);
	
	List<Batch> batch_display();
	
	Batch getSingleid(int id);
	
	Batch update(Batch b);
	
	void delData(int id);
	
	//Class master
	
	void classem_reg(Classem oi);
	
	List <Classem> classem_display();
	
	Classem getSingleId(int id);
	
	Classem update(Classem m);
	
	void deleData(int id);
	
	//Subject master
	
	void subject_reg(Subject s);
	
	List<Subject> subject_display();
	
	Subject Getsingleid(int id);
	
	Subject update(Subject gg);
	
	void DeleData(int id);
	
	//Student info
	
	void student_reg(Student t);
	
	List<Student> student_display();
	
	Student  GetSingleId(int id);
	
	Student update(Student jh);
	
	void Deletdata(int id);
	
	//Teacher info
	
	void teacher_reg(Teacher j);
	
	List<Teacher> tech_display();
	
	Teacher GetsingleId(int id);
	
	Teacher update(Teacher tw);
	
	void DeletData(int id);
	
	//Homework
	
	void Homework_reg(Homework n);
	
	List<Homework> homework_display();
	
	Homework GetSingleid(int id);
	
	Homework update(Homework k);
	
	void Dledata(int id);
	
	//Video
	
	void Video_reg(Video v);
	
	List<Video> vid_display();
	
	Video getSinGleid(int id);
	
	Video update (Video ml);
	
	void DeleTdata(int id);

}

