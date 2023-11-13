import Project from "../../typings/Project"
import Loading from "../../components/Loading"
import ProjectCard from "./ProjectCard"


type Prop = {
  projects: Project[],
  loading: boolean,
  removeProjectCallback: (id: number) => void,
}

export default function List({projects, loading, removeProjectCallback}: Prop) {
  if (loading) {
    return <Loading />
  }

  if (!projects) {
    return (<p>Não há projetos cadastrados!</p>)
  }
  
  return (
    <>
      {
        projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            handleRemove={removeProjectCallback}
          />
      ))}
    </>
  )
}