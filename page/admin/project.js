// import { projectList } from "../../data/data";
// console.log(projectList);
import Header from "../../components/header";
import { useEffect, useState } from "../../libs";
const projectAdmin = () => {
  // const [projects, setProjects] = useState(projectList);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
  // const projects = JSON.parse(localStorage.getItem("project"))||[];
  // setProjects(projects);

    fetch("http://localhost:3000/project") // call api 
    .then((response) => response.json())
    .then((data) => setProjects(data));
      },[]);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      // console.log(btn);
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        console.log(id);
        const newProjects = projects.filter((project) => project.id != id);
        // Xóa ở local
        setProjects(newProjects);
        console.log(projects);

        // xóa ở sever

        fetch(`http://localhost:3000/project/${id}`,{
          method: "DELETE"
        });
      });
    }
  });

  return `
  <td><button class="btn btn-success btn-add mb-2 mt-2 float-end"><a href="/admin/projects/add">Add Data</a></button></td>
    <table class="table table-bordered container mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Name Project</th>
          <th>Image Project</th>
          <th>Link GitHub Project</th>
          <th>Title Project</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      ${projects
        .map(
          (project, index) => `
            <tr>
          <td>${index + 1}</td>
          <td>${project.name}</td>
          <td>${project.link}</td>
          <td>${project.git}</td>
          <td>${project.title}</td>
          <td><button data-id="${
            project.id
          }" class="btn btn-danger btn-remove">Remove</button>
           <button class="btn btn-warning btn-edit"><a href="/admin/projects/${
             project.id
           }/edit">Edit</a></button></td>
        </tr>
      `
        )
        .join("")}
      </tbody>
    </table>
    
  `;
};

export default projectAdmin;
