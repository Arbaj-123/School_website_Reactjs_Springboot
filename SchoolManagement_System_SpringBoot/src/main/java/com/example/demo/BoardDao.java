package com.example.demo;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Class.Batch;
import com.example.demo.Class.Board;
import com.example.demo.Class.Classem;
import com.example.demo.Class.Homework;
import com.example.demo.Class.Student;
import com.example.demo.Class.Subject;
import com.example.demo.Class.Teacher;
import com.example.demo.Class.Video;
import com.example.demo.Repo.BatchRepo;
import com.example.demo.Repo.BoardRepo;
import com.example.demo.Repo.ClassemRepo;
import com.example.demo.Repo.HomeworkRepo;
import com.example.demo.Repo.StudentRepo;
import com.example.demo.Repo.SubjectRepo;
import com.example.demo.Repo.TeacherRepo;
import com.example.demo.Repo.VideoRepo;

@Service
public class BoardDao implements BoardService
{
	@Autowired
	BoardRepo aa;
	
	@Autowired
	BatchRepo br;
	
	@Autowired
	ClassemRepo jp;
	
	@Autowired
	SubjectRepo sp;
	
	@Autowired
	StudentRepo cp;
	
	@Autowired
	TeacherRepo bp;
	
	@Autowired
	HomeworkRepo ap;
	
	@Autowired
	VideoRepo vp;

	@Override
	public void register(Board b)
	{
		aa.save(b);

	}


	@Override
	public List<Board> display() {
		
		return aa.findAll();
	}


	@Override
	public Board getsingleid(int id) {
		Board f = aa.findById(id);
		return f;
	}


	@Override
	public Board update(Board j) {
		Board h = aa.save(j);
		return h;
	}


	@Override
	public void deletedata(int id) {
		
		aa.deleteById(id);
		
	}


	
	//Batch....//
	
	
	@Override
	public void batch_reg(Batch b2) {
		
		br.save(b2);
	}


	@Override
	public List<Batch> batch_display() {
		
		return br.findAll();
	}


	@Override
	public Batch getSingleid(int id) {
		Batch j = br.findById(id);
		return j;
	}


	@Override
	public Batch update(Batch b) {
		Batch jj = br.save(b);
		return jj;
	}


	@Override
	public void delData(int id) {
		br.deleteById(id);
		
	}


	
	//class master
	
	
	
	@Override
	public void classem_reg(Classem oi) {
		
		jp.save(oi);
		
	}


	@Override
	public List<Classem> classem_display() {
		
		return jp.findAll();
	}


	@Override
	public Classem getSingleId(int id) {
		Classem rr = jp.findById(id);
		return rr;
	}


	@Override
	public Classem update(Classem m) {
		Classem uu = jp.save(m);
		return uu;
	}


	@Override
	public void deleData(int id) {
		
		jp.deleteById(id);
		
	}
	
	
	//Subject master


	@Override
	public void subject_reg(Subject s) {
		
		sp.save(s);
		
	}


	@Override
	public List<Subject> subject_display() {
		
		return sp.findAll();
	}


	@Override
	public Subject Getsingleid(int id) {
		Subject ss = sp.findById(id);
		return ss;
	}


	@Override
	public Subject update(Subject gg) {
		Subject sa = sp.save(gg);
		return sa;
	}


	@Override
	public void DeleData(int id) {
	sp.deleteById(id);
		
	}


	//Student Info
	
	
	@Override
	public void student_reg(Student t) 
	{
		cp.save(t);
		
	}


	@Override
	public List<Student> student_display() {
		
		return cp.findAll();
	}


	@Override
	public Student GetSingleId(int id) {
		Student mn = cp.findById(id);
		return mn;
	}


	@Override
	public Student update(Student jh) {
		
		Student vv = cp.save(jh);
		return vv;
	}


	@Override
	public void Deletdata(int id) {
	 cp.deleteById(id);
		
	}

	//Teacher Info

	@Override
	public void teacher_reg(Teacher j) {
		bp.save(j);
		
	}


	@Override
	public List<Teacher> tech_display() {
		
		return bp.findAll();
	}


	@Override
	public Teacher GetsingleId(int id) {
		Teacher tt = bp.findById(id);
		return tt;
	}


	@Override
	public Teacher update(Teacher tw) {
		Teacher ee = bp.save(tw);
		return ee;
	}


	@Override
	public void DeletData(int id) {
		bp.deleteById(id);
		
	}
	
	//Homework


	@Override
	public void Homework_reg(Homework n) {
		ap.save(n);
		
	}


	@Override
	public List<Homework> homework_display() {
		
		return ap.findAll();
	}


	@Override
	public Homework GetSingleid(int id) {
		Homework dd = ap.findById(id);
		return dd;
	}


	@Override
	public Homework update(Homework k) {
		Homework hh = ap.save(k);
		return hh;
	}


	@Override
	public void Dledata(int id) {
		ap.deleteById(id);
		
	}
	
	
	////////////Videos


	@Override
	public void Video_reg(Video v) {
		vp.save(v);
		
	}


	@Override
	public List<Video> vid_display() {
		
		return vp.findAll();
	}


	@Override
	public Video getSinGleid(int id) {
		Video v = vp.findById(id);
		return v;
	}


	@Override
	public Video update(Video ml) {
		Video pp = vp.save(ml);
		return pp;
		 
	}


	@Override
	public void DeleTdata(int id) {
		vp.deleteById(id);
		
	}


	
	



	

	
	
	
	




	




}
