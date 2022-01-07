package com.kmrsrv.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.kmrsrv.model.CaptureModel;

public interface KmrRepo extends MongoRepository<CaptureModel, String> {
	
	public List<CaptureModel> findByProjectCode(String projectCode);
	
	@Query(value = "{'problemSolution.problem' : /.*?0.*/}")
	public List<CaptureModel> findBySearchKey(String key);
	
}
