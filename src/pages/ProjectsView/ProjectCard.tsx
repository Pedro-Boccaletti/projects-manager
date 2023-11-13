import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import Project from "../../typings/Project";
import CategoryDot from "./CategoryDot";

type Prop = {
  project: Project,
  handleRemove: (id: number) => void,
}

function ProjectCard({ project, handleRemove }: Prop) {
  const p = project;
  return (
    <div className={styles.project_card}>
      <h4>{p.name}</h4>
      <p>
        <span>Orçamento:</span> R${p.budget}
      </p>
      <p className={styles.category_text}>
        <CategoryDot style={`${styles[p.category.name.toLowerCase()]}`}/>
        {p.category.name}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${p.id}`} id={`${p.id}`}>
          <BsPencil /> Editar
        </Link>
        <button
          type="button"
          onClick={() => { handleRemove(project.id) }}
        >
            <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
