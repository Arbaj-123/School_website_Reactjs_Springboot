package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Teacher;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher,Integer>
{
	public Teacher findById(int id);
}
