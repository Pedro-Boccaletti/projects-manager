import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import Container from "../../components/Container";
import Message from "../../components/Message";
import LinkButton from "../../components/LinkButton";
import { useLocation } from "react-router-dom";
import Project from "../../typings/Project";
import List from "./List";

function ProjectsView() {
  const location = useLocation();
  const m = location.state ? location.state.message : "";
  const [projects, setProjects] = useState<Project[]>([]);
  const [message, setMessage] = useState(m);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setLoading(false);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeProject(id: number) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((projects) => projects.id !== data.id));
        setMessage("Projeto removido com sucesso.");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.projects_container}>
      <div className={styles.projects_title}>
        <h1>Meus Projetos</h1>
        <LinkButton to={"/newproject"} text={"Criar Projeto"}></LinkButton>
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass={"start"}>
        <List projects={projects} loading={loading} removeProjectCallback={removeProject} />
      </Container>
    </div>
  );
}

export default ProjectsView;
