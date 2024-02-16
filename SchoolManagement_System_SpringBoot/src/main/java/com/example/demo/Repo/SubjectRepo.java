package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Subject;

@Repository
public interface SubjectRepo extends JpaRepository<Subject,Integer>
{

	public Subject findById(int id);
}
