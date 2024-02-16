package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Homework;

@Repository
public interface HomeworkRepo extends JpaRepository<Homework,Integer>
{
	public Homework findById(int id);
}
