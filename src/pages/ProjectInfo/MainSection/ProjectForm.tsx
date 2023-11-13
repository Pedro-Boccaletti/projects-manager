
import styles from "./ProjectForm.module.css";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { useContext, useEffect, useRef, useState } from "react";
import Input from "../../../components/Input";
import Category from "../../../typings/Category";
import Project from "../../../typings/Project";
import { ProjectContext } from "..";

type Prop = {
  btnText: string,
}

function ProjectForm({ btnText }: Prop) {
  const [categories, setCategories] = useState<Category[]>([]);
  const selectRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const budgetRef = useRef<HTMLInputElement>(null);
  const context = useContext(ProjectContext);
  const project = context?.project[0];

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
    if (selectRef.current) selectRef.current.value = `${project!.category.id}`
    if (nameRef.current) nameRef.current.value = project!.name
    if (budgetRef.current) budgetRef.current.value = `${project!.budget}`
  }, [project]);

  const editProject = (project: Project) => {
    context?.message[1]("");
    // budget validation
    if (project.budget < project.cost) {
      context?.message[1]("O Orçamento não pode ser menor que o custo do projeto!");
      context?.messageType[1]("error");
      return;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        context?.project[1](data);
        context?.showForm[1](false);
        context?.message[1]("Projeto alterado com sucesso!");
        context?.messageType[1]("success");
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={() => {if (context?.project[0]) editProject(context.project[0])}} className={styles.form}>
      <Input
        label={"Nome do Projeto"}
        forwardRef={nameRef}
        placeholder={"Insira o nome do projeto"}
      />
      <Input
        label={"Orçamento do Projeto"}
        forwardRef={budgetRef}
        type={"number"}
        placeholder={"Insira o orçamento total"}
      />
      <Select
        label={"Selecione a Categoria"}
        forwardRef={selectRef}
        options={categories.map(e => ({
          value: `${e.id}`,
          name: e.name
        }))}
      />
      <Button name={btnText} />
    </form>
  );
}

export default ProjectForm;
