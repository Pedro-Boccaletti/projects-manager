import { useContext } from "react";
import styles from "../Project.module.css";
import { ProjectContext } from "..";


export default function Info() {
  const context = useContext(ProjectContext);
  const project = context?.project[0]
  return (
    <div className={styles.project_info}>
      <p>
        <span>Categoria: </span>
        {project!.category.name}
      </p>
      <p>
        <span>Orçamento total: </span>
        R${project!.budget}
      </p>
      <p>
        <span>Total utilizado: </span>
        R${project!.cost}
      </p>
    </div>
  )
}