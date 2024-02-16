package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Classem;

@Repository
public interface ClassemRepo extends JpaRepository<Classem,Integer>

{
	public Classem findById(int id);
}
