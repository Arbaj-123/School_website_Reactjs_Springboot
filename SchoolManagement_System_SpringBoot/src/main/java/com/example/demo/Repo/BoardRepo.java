package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Board;

@Repository
public interface BoardRepo extends JpaRepository<Board,Integer>
{
	public Board findById(int id);

}
