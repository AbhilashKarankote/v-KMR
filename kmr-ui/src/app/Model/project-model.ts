export class Project{
    constructor(
    public  id:string,
	public  projectName:string,
	public  projectCode:string,
	public  technologies:string,
	public  projectSbu:string,
	public  projectManager:string,
	public  technicalLead:string,
	public  problemSolution:ProblemSolution[]
    ){}
}

export class ProblemSolution{
	constructor(
  public  id: string,
	public  problem:string,
	public  solution:string,
  public file : File
	){}
}
