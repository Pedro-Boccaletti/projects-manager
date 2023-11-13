import { createContext, useContext, useEffect, useState } from "react";
import Project from "../../typings/Project"
import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Message from "../../components/Message";
import MainSection from "./MainSection";


type ContextType = {
  project: ReturnType<typeof useState<Project>>,
  message: ReturnType<typeof useState<string>>,
  messageType: ReturnType<typeof useState<string>>,
  showForm: ReturnType<typeof useState<boolean>>,
} | null

const ProjectContext = createContext<ContextType>(null)

export { ProjectContext }

export default function ProjectInfo() {
  const { id } = useParams();
  const [project, setProject] = useState<Project>();
  const [showForm, setShowForm] = useState<boolean>();
  const [message, setMessage] = useState<string>();
  const [messageType, setMessageType] = useState<string>();
  useContext


  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, [id, message])

  return (
    <ProjectContext.Provider value={{
      project: [project, setProject],
      showForm: [showForm, setShowForm],
      message: [message, setMessage],
      messageType: [messageType, setMessageType],
    }}>
      <div className={styles.project_details}>
        <Container customClass="column">
          {message && <Message type={messageType || ""} msg={message} />}
          <MainSection />
        </Container>
      </div>
    </ProjectContext.Provider>
  )
}
