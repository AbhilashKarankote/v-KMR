package com.kmrsrv.model;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ProbSol")
public class ProbSol {
	
	@Id
	private String id;
	private String problem;
	private String solution;
	private Binary file;
	
	public String getProblem() {
		return problem;
	}
	public void setProblem(String problem) {
		this.problem = problem;
	}
	public String getSolution() {
		return solution;
	}
	public void setSolution(String solution) {
		this.solution = solution;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Binary getFile() {
		return file;
	}
	public void setFile(Binary file) {
		this.file = file;
	}
	@Override
	public String toString() {
		return "ProbSol [id=" + id + ", problem=" + problem + ", solution=" + solution + ", file=" + file + "]";
	}
	
	

}
