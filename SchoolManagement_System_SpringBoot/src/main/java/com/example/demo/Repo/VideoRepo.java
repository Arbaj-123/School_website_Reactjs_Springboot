package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Class.Video;

@Repository
public interface VideoRepo extends JpaRepository<Video,Integer>
{
	public Video findById(int id);
}
