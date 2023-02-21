import { projectList } from "../data/data";
import { router } from "../libs";
import Header from "../components/header";
const projectDetailPage = ({data: {id}}) => {
const project = projectList.find((project) =>
 project.id == id
);
if (!project) {
  return router.navigate("/project");
}
  return `
  ${Header()}
    <h1>${project.name}</h1>
    `;
}

export default projectDetailPage;
