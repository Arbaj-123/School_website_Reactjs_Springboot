package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Batch;
@Repository
public interface BatchRepo extends JpaRepository<Batch,Integer>
{
	 public Batch findById(int id);
}
