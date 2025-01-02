import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects : [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        projecId: prevState.selectedProjectId,
        id : Math.random()
      }
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=> task.id !== id)
      }
    })
  }

  function handelSelectProject(projectId){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  function handelStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }

  function handelCancelAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId:undefined
      }
    })
  }

  function handelAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id : Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects,newProject]
      }
    })
  }

  function handelDeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId)
      }
    })
  }

  console.log(projectsState);

  const selectedProject= projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content= <SelectedProject project={selectedProject} onDelete={handelDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handelAddProject} onCancel={handelCancelAddProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handelStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handelStartAddProject} projects={projectsState.projects} onSelectProject={handelSelectProject} />
      {content}
    </main>
  );
}

export default App;
