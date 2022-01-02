package com.kmrsrv;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.kmrsrv.model.CaptureModel;
import com.kmrsrv.model.ProbSol;
import com.kmrsrv.repository.KmrRepo;

@Component
public class DbSeeder implements CommandLineRunner {
	
	@Autowired
	public KmrRepo repo;

	@Override
	public void run(String... args) throws Exception {
		
		System.out.println("Application started");
		
		List<CaptureModel> list = Arrays.asList(
				new CaptureModel("project1", "1231", Arrays.asList("java","angular"), "SBU 1", "Manager 1", "Lead 1", 
						Arrays.asList(new ProbSol( "problem 1", "Solution 1", null))),
				new CaptureModel("project2", "1232", Arrays.asList("java","angular"), "SBU 2", "Manager 2", "Lead 2", 
						Arrays.asList(new ProbSol( "problem 2", "Solution 2", null))),
				new CaptureModel("project3", "1233", Arrays.asList("java","angular"), "SBU 3", "Manager 3", "Lead 3", 
						Arrays.asList(new ProbSol( "problem 3", "Solution 3", null))),
				new CaptureModel("project4", "1234", Arrays.asList("java","angular"), "SBU 4", "Manager 4", "Lead 4", 
						Arrays.asList(new ProbSol( "problem 4", "Solution 4", null))),
				new CaptureModel("project5", "1235", Arrays.asList("java","angular"), "SBU 5", "Manager 5", "Lead 5", 
						Arrays.asList(new ProbSol( "problem 5", "Solution 5", null))),
				new CaptureModel("project6", "1236", Arrays.asList("java","angular"), "SBU 6", "Manager 6", "Lead 6", 
						Arrays.asList(new ProbSol( "problem 6", "Solution 6", null))),
				new CaptureModel("project7", "1237", Arrays.asList("java","angular"), "SBU 7", "Manager 7", "Lead 7", 
						Arrays.asList(new ProbSol( "problem 7", "Solution 7", null)))
				);
		repo.saveAll(list);
		

	}

}
