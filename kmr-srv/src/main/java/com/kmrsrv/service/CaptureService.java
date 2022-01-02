package com.kmrsrv.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kmrsrv.model.CaptureModel;
import com.kmrsrv.model.ProbSol;
import com.kmrsrv.repository.KmrRepo;

@Service
public class CaptureService {
	
	@Autowired
	private KmrRepo kmrRepo;

	public void addProject(CaptureModel capture) {
		capture.setProblemSolution(new ArrayList<ProbSol>());
		kmrRepo.save(capture);
	}

	public CaptureModel getProject(String projectCode) {
		return kmrRepo.findByProjectCode(projectCode).stream().findFirst().get();
	}

	public void addKnowledge(String projectCode, ProbSol probSol) {
		List<CaptureModel> findByProjectCode = kmrRepo.findByProjectCode(projectCode);
		CaptureModel captureModel = findByProjectCode.stream().findFirst().get();
		captureModel.getProblemSolution().add(probSol);
		kmrRepo.save(captureModel);
		
	}

	public List<ProbSol> getKnowledge(String key) {
		List<CaptureModel> captureModelList = null;
		if(key.isEmpty()) {
			captureModelList = kmrRepo.findAll();
		} else {
			captureModelList = kmrRepo.findBySearchKey(key);
		}
		List<ProbSol> result = getProbSolList(key, captureModelList);
		return result;
	}

	private List<ProbSol> getProbSolList(String key, List<CaptureModel> captureModelList) {
		//get list of ProbSol which contains key
		List<ProbSol> list = captureModelList.stream().map(capture -> capture.getProblemSolution())
				.reduce(new ArrayList<ProbSol>(), (list1,list2) ->{ list1.addAll(list2);
				return list1;});
		//filter ProbSol object form list which contains key
		List<ProbSol> result = list.stream().filter(cap -> cap.getProblem().contains(key)).collect(Collectors.toList());
		return result;
	}
	
	// created for R n D
	public byte[] getFile() {
		List<CaptureModel> captureModelList = kmrRepo.findBySearchKey("a");
		List<ProbSol> list = captureModelList.stream().map(capture -> capture.getProblemSolution())
				.reduce(new ArrayList<ProbSol>(), (list1,list2) ->{ list1.addAll(list2);
				return list1;});
		System.out.println(list);
		byte[] data = list.get(1).getFile().getData();
		File file = new File("output.pdf");
	    try {
			FileOutputStream fis = new FileOutputStream(file);
			fis.write(data);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return data;
	}

	public List<CaptureModel> getProjects() {
		return kmrRepo.findAll();
	}

	public CaptureModel getProjectById(String id) {
		return kmrRepo.findById(id).get();
	}

}
