package com.example.demo;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Class.Batch;
import com.example.demo.Class.Board;
import com.example.demo.Class.Classem;
import com.example.demo.Class.Homework;
import com.example.demo.Class.Student;
import com.example.demo.Class.Subject;
import com.example.demo.Class.Teacher;
import com.example.demo.Class.Video;

@RestController
@CrossOrigin
public class SchoolController 


{
	
	@Autowired
	BoardService bb;
	
	@Autowired
	FileUploadHelper FUL;
	
	
	// board
	@PostMapping("/")
	public String register(@RequestBody Board j)
	{
		bb.register(j);
		return "submit";
	}
	
	@GetMapping("/jcb")
	public List<Board> display()
	{
		return bb.display();
	}
	
	@GetMapping("/jcb/{id}")
	public ResponseEntity<Board> display(@PathVariable int id)
	{
		Board e = bb.getsingleid(id);
		return ResponseEntity.ok(e);
	}
	
	@PutMapping("/mcb/{id}")
	public ResponseEntity<Board> edit(@PathVariable int id,@RequestBody Board j)
	{
		Board e = bb.getsingleid(id);
		
		e.setBid(e.getBid());
		e.setFname(e.getFname());
		
		Board ee = bb.update(j);
		
		return ResponseEntity.ok(ee);
	}
	
	@DeleteMapping("/del/{id}")
	public ResponseEntity<Map<String,Boolean>> delete(@PathVariable int id)
	
	{
		Board e = bb.getsingleid(id);
		bb.deletedata(id);
		Map<String,Boolean> i = new HashMap<>();
		i.put("delet", Boolean.TRUE);
		
		return ResponseEntity.ok(i);
				
				
	}
	
	// Batch
	
	@PostMapping("/bacthreg")
	public String register(@RequestBody Batch j)
	{
		bb.batch_reg(j);
		return "submit";
	}
	
	
	@GetMapping("/batch")
	public List<Batch> batch_display()
	{
		return bb.batch_display();
	}
	
	@GetMapping("/batch/{id}")
	public ResponseEntity<Batch> batch_display(@PathVariable int id)
	{
		Batch ee = bb.getSingleid(id);
		return ResponseEntity.ok(ee);
	}
	
	@PutMapping("/batch_ms/{id}")
	public ResponseEntity<Batch> batch_display(@PathVariable int id,@RequestBody Batch j)
	{
		Batch ee = bb.getSingleid(id);
		
		ee.setBatch_id(ee.getBatch_id());
		ee.setBatch_name(ee.getBatch_name());
		
		Batch ff = bb.update(j);
		return ResponseEntity.ok(ff);
	}
	
	@DeleteMapping("/batch_del/{id}")
	public ResponseEntity<Map<String,Boolean>> del(@PathVariable int id)
	
	{
		Batch ee = bb.getSingleid(id);
		bb.delData(id);
		Map<String,Boolean> o = new HashMap<>();
		o.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(o);
		
	}
	
//	///////Class control/////
	
	@PostMapping("/class_reg")
	public String classem_reg(@RequestBody Classem yu)
	
	{
		bb.classem_reg(yu);
		return "submited";
	}
	
	@GetMapping("/class_list")
	public List<Classem> classem_display()
	{
		return bb.classem_display();
	}

	
	@GetMapping("/class_list/{id}")
	public ResponseEntity<Classem> classem_display(@PathVariable int id)
	{
		Classem tt = bb.getSingleId(id);
		return ResponseEntity.ok(tt);
	}
	
	@PutMapping("/class_edit/{id}")
	public ResponseEntity<Classem> edit(@PathVariable int id,@RequestBody Classem yu)
	{
		Classem tt = bb.getSingleId(id);
		
		tt.setCls_id(tt.getCls_id());
		tt.setCls_name(tt.getCls_name());
		
		Classem dd = bb.update(yu);
		return ResponseEntity.ok(dd);
		
	}
	
	@DeleteMapping("/class_del/{id}")
	public ResponseEntity<Map<String,Boolean>> dele(@PathVariable int id)
	
	{
		Classem tt = bb.getSingleId(id);
		bb.deleData(id);
		Map<String,Boolean> e = new HashMap<>();
		
		return ResponseEntity.ok(e);
		
	}
	
//	//Subject master
	
	@PostMapping("/sub_reg")
	public String subject_reg(@RequestBody Subject mm)
	{
		bb.subject_reg(mm);
		return "submitted";
	}
	

	@GetMapping("/sub_list")
	public List<Subject> subject_display()
	{
		return bb.subject_display();
	}

	@GetMapping("/sub_list/{id}")
	public ResponseEntity<Subject> subject_display(@PathVariable int id)
	{
		Subject pp = bb.Getsingleid(id);
		return ResponseEntity.ok(pp);
	}

	@PutMapping("/sub_edit/{id}")
	public ResponseEntity<Subject> edit(@PathVariable int id,@RequestBody Subject mm)
	{
		Subject pp = bb.Getsingleid(id);
		
		pp.setSubject_id(pp.getSubject_id());
		pp.setSubject_name(pp.getSubject_name());
		
		Subject po = bb.update(mm);
		
		return ResponseEntity.ok(po);
	}
	
	@DeleteMapping("/sub_del/{id}")
	public ResponseEntity<Map<String,Boolean>> edit(@PathVariable int id)
	{
	Subject pp = bb.Getsingleid(id);
	bb.DeleData(id);
	
	Map<String,Boolean> kk = new HashMap<>();
	kk.put("Delete", Boolean.TRUE);
	
	return ResponseEntity.ok(kk);
	}
	
//	//Student info
	
	@PostMapping("/stud_reg")
	public String student_reg(@RequestBody Student v)
	{
		bb.student_reg(v);
		return "submit";
	}
	
	@GetMapping("/stud_list")
	public List<Student>student_display()
	{
		return bb.student_display();
	}
	
	@GetMapping("/stud_list/{id}")
	public ResponseEntity<Student>student_display(@PathVariable int id)
	{
		Student hi = bb.GetSingleId(id);
		return ResponseEntity.ok(hi);
	}
	
	@PutMapping("/stud_edit/{id}")
	public ResponseEntity<Student>edit(@PathVariable int id,@RequestBody Student v)
	
	{
		Student hi = bb.GetSingleId(id);
		
		hi.setStu_fname(hi.getStu_fname());
		hi.setStu_mname(hi.getStu_mname());
		hi.setStu_lname(hi.getStu_lname());
		hi.setStu_mobile(hi.getStu_mobile());
		hi.setStu_photo(hi.getStu_photo());
		hi.setStu_address(hi.getStu_address());
		hi.setStu_uname(hi.getStu_uname());
		hi.setStu_password(hi.getStu_password());
		hi.setStu_cpassword(hi.getStu_cpassword());
		hi.setStu_board(hi.getStu_board());
		hi.setStu_class(hi.getStu_class());
		hi.setStu_batch(hi.getStu_batch());
		
		Student hy = bb.update(v);
		return ResponseEntity.ok(hy);
	}
	
	@DeleteMapping("/stud_del/{id}")
	public ResponseEntity<Map<String,Boolean>>delet(@PathVariable int id)
	{
		Student hi = bb.GetSingleId(id);
		bb.Deletdata(id);
		Map<String,Boolean> jl = new HashMap<>();
		
		jl.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(jl);
		
	}
	
	
//	//Teacher info
	
	@PostMapping("/tech_reg")
	public String teacher_reg(@RequestBody Teacher z)
	{
		bb.teacher_reg(z);
		return "submit";
		
	}
	
	@GetMapping("/tech_list")
	public List<Teacher> tech_display()
	{
		return bb.tech_display();
	}
	
	@GetMapping("/tech_list/{id}")
	public ResponseEntity<Teacher> tech_display(@PathVariable int id)
	
	{
		Teacher hh = bb.GetsingleId(id);
		return ResponseEntity.ok(hh);
		
	}
	
	@PutMapping("/tech_edit/{id}")
	public ResponseEntity<Teacher> edit(@PathVariable int id,@RequestBody Teacher z)
	{
		Teacher hh = bb.GetsingleId(id);
		
		hh.setTech_fname(hh.getTech_fname());
		hh.setTech_mname(hh.getTech_mname());
		hh.setTech_lname(hh.getTech_lname());
		hh.setTech_photo(hh.getTech_photo());
		hh.setTech_address(hh.getTech_address());
		
		Teacher kj = bb.update(z);
		return ResponseEntity.ok(kj);
	}
	
	@DeleteMapping("/tech_del/{id}")
	public ResponseEntity<Map<String,Boolean>> deleted(@PathVariable int id)
	{
		Teacher hh = bb.GetsingleId(id);
		bb.DeletData(id);
		
		Map<String,Boolean> kk = new HashMap<>();
		kk.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(kk);
		
	}
	
//	//Homework
	
	@PostMapping("/home_reg")
	public String home_reg(@RequestBody Homework mm)
	{
		bb.Homework_reg(mm);
		return "submitted";
	}
	
	@GetMapping("/home_list")
	public List<Homework> homework_display()
	{
		return bb.homework_display();
	}
	
	@GetMapping("/home_list/{id}")
	public ResponseEntity<Homework> homework_display(@PathVariable int id)
	{
		Homework jj = bb.GetSingleid(id);
		return ResponseEntity.ok(jj);
	}
	
	@PutMapping("/home_edit/{id}")
	public ResponseEntity<Homework> homework_display(@PathVariable int id,@RequestBody Homework mm)
	{
		Homework jj = bb.GetSingleid(id);
		
		jj.setBoard(jj.getBoard());
		jj.setClassem(jj.getClassem());
		jj.setBatch(jj.getBatch());
		jj.setSubject(jj.getSubject());
		jj.setTeacher(jj.getTeacher());
		jj.setChapter(jj.getChapter());
		jj.setPdf(jj.getPdf());
		
		Homework ji = bb.update(mm);
		return ResponseEntity.ok(ji);
	}
	
	@DeleteMapping("/home_del/{id}")
	public ResponseEntity<Map<String,Boolean>> dlet(@PathVariable int id)
	{
		Homework jj = bb.GetSingleid(id);
		bb.Dledata(id);
		
		Map<String,Boolean> ol = new HashMap<>();
		ol.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(ol);
		
	}
	
//	///File Uploading 
	
	@PostMapping("/upload")
	public ResponseEntity <String> UploadFile(@RequestParam("file") MultipartFile file)
	{
		try {
//		System.out.println(file.getName());
		
		
		// Validation
		if(file.isEmpty()){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("upload image");
			
		}
		
		///file upload.file..
		
		boolean b = FUL.FileUpd(file);
		if(b) {
			return ResponseEntity.ok("success");
		}
		
		
		}catch(Exception e){
			// TODO : Handle Exception	
			e.printStackTrace();
			
	}
		
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error uploading");
		}
	
                                     ///Video 
	
	
	
	@PostMapping("/vid_reg")
	public String Video_reg(@RequestBody Video n)
	{
		bb.Video_reg(n);
		return "submit";
	}
	
	@GetMapping("/vid_list")
	public List<Video> vid_display()
	{
		return bb.vid_display();
		
	}
	
	@GetMapping("/vid_list/{id}")
	public ResponseEntity<Video> vid_display(@PathVariable int id)
	{
		Video nv = bb.getSinGleid(id);
		return ResponseEntity.ok(nv);
	}
	
	@PutMapping("/vid_edit/{id}")
	public ResponseEntity<Video> edit(@PathVariable int id,@RequestBody Video n)
	{
		Video nv = bb.getSinGleid(id);
		
		nv.setVid_boarde(nv.getVid_boarde());
		nv.setVid_class(nv.getVid_class());
		nv.setVid_batch(nv.getVid_batch());
		nv.setVid_teacher(nv.getVid_teacher());
		nv.setVid_subject(nv.getVid_subject());
		nv.setVid_chapter(nv.getVid_chapter());
		nv.setVid_link(nv.getVid_link());
		
		Video po = bb.update(n);
		return ResponseEntity.ok(po);
	}
	
	@DeleteMapping("/vid_del/{id}")
	public ResponseEntity<Map<String,Boolean>> deleT(@PathVariable int id)
	{
		Video nv = bb.getSinGleid(id);
		bb.DeleTdata(id);
		
		Map<String,Boolean> lp = new HashMap<>();
		lp.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(lp);
	}
}
