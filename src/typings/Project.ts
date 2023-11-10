import Service from "./Service"

type Category = {
  id: number,
  name: string,
}

type Project = {
  id: number,
  name: string,
  category: Category,
  budget: number,
  cost: number,
  services: Service[],
}

export default Project
