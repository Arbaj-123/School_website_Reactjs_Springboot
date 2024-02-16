package com.example.demo;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper 
{
	public final String UPLOAD_DIR = "C:\\Users\\HP\\Desktop\\SchoolPro\\Schoo1\\public\\Images";
	
	public boolean FileUpd(MultipartFile m)
	{
		boolean b = false;
		
		try 
		{
			Files.copy(m.getInputStream(),Paths.get(UPLOAD_DIR+File.separator+m.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
			b = true;
		}
		catch(Exception e)
		{
			//TODO: handle exception
			
			e.printStackTrace();
		}
		
		return b;
	}

}
