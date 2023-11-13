import { useContext } from "react"
import { ProjectContext } from ".."
import ProjectForm from "./ProjectForm"
import Info from "./Info"
import Button from "../../../components/Button"
import styles from "../Project.module.css"


export default function MainSection() {
  const context = useContext(ProjectContext)


  return (
    <div className={styles.details_container}>
      <h1>Projeto: {context?.project[0]?.name}</h1>
      <Button
        onClick={() => {context?.showForm[1](!context.showForm[0])}}
        className={styles.btn}
        name={!(context?.showForm[0]) ? "Editar Projeto" : "Fechar"}
      />
      {
        context?.project[0] &&
          (context?.showForm ?
            <ProjectForm btnText="Concluir Edição"/> :
            <Info />
          )
      }
    </div>
  )
}