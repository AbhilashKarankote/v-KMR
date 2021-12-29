package com.kmrsrv.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import com.mongodb.lang.NonNull;

@Document(collection = "CaptureModel")
public class CaptureModel {
	
	@Id
	private String id;
	private String projectName;
	@NonNull
	private String projectCode;
	private List<String> technologies;
	private String projectSbu;
	private String projectManager;
	private String technicalLead;
	//@DocumentReference(collection = "ProbSol")
	private List<ProbSol> problemSolution;
	
	
	
	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getProjectName() {
		return projectName;
	}



	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}



	public String getProjectCode() {
		return projectCode;
	}



	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}



	public List<String> getTechnologies() {
		return technologies;
	}



	public void setTechnologies(List<String> technologies) {
		this.technologies = technologies;
	}



	public String getProjectSbu() {
		return projectSbu;
	}



	public void setProjectSbu(String projectSbu) {
		this.projectSbu = projectSbu;
	}



	public String getProjectManager() {
		return projectManager;
	}



	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}



	public String getTechnicalLead() {
		return technicalLead;
	}



	public void setTechnicalLead(String technicalLead) {
		this.technicalLead = technicalLead;
	}



	public List<ProbSol> getProblemSolution() {
		return problemSolution;
	}



	public void setProblemSolution(List<ProbSol> problemSolution) {
		this.problemSolution = problemSolution;
	}



	@Override
	public String toString() {
		return "CaptureModel [id=" + id + ", projectName=" + projectName + ", projectCode=" + projectCode
				+ ", technologies=" + technologies + ", projectSbu=" + projectSbu + ", projetManager=" + projectManager
				+ ", technicalLead=" + technicalLead + ", problemSolution=" + problemSolution + "]";
	}
	
	
	
}
