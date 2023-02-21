import { router, useEffect, useState } from "../../libs";

const AdminProjectUpdatePage = ({id}) => {
  // console.log(id);
  // const projectList = JSON.parse(localStorage.getItem("project"))||[];
  // const currentProject = projectList.find((project)=> project.id == id);
  // console.log(currentProject);
  /*
        B1: call api -> lấy data
        B2: set lại data để đổ dữ liệu ra form
        B3: submit form -> call api (truyền theo id cần update)
        B4: sau khi submit form thành công thì điều hướng về admin/projects
    */
   const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/project/${id}`) // call api
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);
      console.log(data);

  useEffect(() => {
    const form = document.getElementById("form-add");
    // console.log(form);
    const projectName = document.getElementById("project-name");
         const imageValue = document.getElementById("basic-url");
         const titleValue = document.getElementById("titleValue");
          const gitValue = document.getElementById("gitValue");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // tạo ra 1 object mới lấy dữ liêu từ form
      const newProject = {
        id: id,
        name: projectName.value,
        link: imageValue.value,
        title: titleValue.value,
        git: gitValue.value,
      };
      fetch(`http://localhost:3000/project/${id}`,{
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newProject)
      }).then(()=>router.navigate("/admin/projects"))
      // console.log(newProject);
      // Cập nhật vào mảng projectList
      // const newProjectList = projectList.map((project) => {
      //   return project.id == newProject.id ? newProject : project;
      // });

      // lưu vào localStorage dưới dạng chuỗi

      // localStorage.setItem("project", JSON.stringify(newProjectList));

      // điều hướng về trang projects

      // router.navigate("admin/projects");
    });
  });
  return `
     <div class="container">
      <h1>Add Project</h1>
      <form action="" id="form-add">
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Name</span>
  <input type="text" class="form-control form-control" id="project-name" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value="${data.name}">
</div>
          <div class="mb-3">
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">Img</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="${data.link}">
  </div>
</div>
<div class="input-group">
    <span class="input-group-text" id="basic-addon3">Link GitHub</span>
    <input type="text" class="form-control"  id="gitValue" aria-describedby="basic-addon3" value="${data.git}">
  </div>
<div class="input-group mt-3">
    <span class="input-group-text" id="basic-addon3">Title</span>
    <input type="text" class="form-control"  id="titleValue" aria-describedby="basic-addon3" value="${data.title}">
  </div>
          <div class="form-group mt-3">
            <button class="btn btn-success">Add</button>
          </div>
      </form>
    </div>
  `;
};

export default AdminProjectUpdatePage;
