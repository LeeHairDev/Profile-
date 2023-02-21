import { router, useEffect } from "../../libs";

const AdminProjectAddPage = () => {
  // kiểm tra localStorage có dữ liệu không?
  // nếu có thì lấy dữ liệu
  // ngược lại thì gán mảng rỗng

  const projectList = JSON.parse(localStorage.getItem("project")) || [];
  // console.log(projectList);

  // chạy sau khi render
  useEffect(() => {
    const form = document.getElementById("form-add");
    //  console.log(form);
    const projectName = document.getElementById("project-name");
     const imageValue = document.getElementById("basic-url");
      const titleValue = document.getElementById("titleValue");
    const gitValue = document.getElementById("gitValue")
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // chặn sự kiện load lại trang
      // Tạo ra project mới lấy dữ liệu từ form
      // console.log(form);
      const newProjects = {
        // id: projectList.length + 1,

        name: projectName.value,
        link: imageValue.value,
        title: titleValue.value,
        git: gitValue.value
      };
      fetch("http://localhost:3000/project", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProjects), // Lưu vào mảng theo dạng chuỗi
      }).then(() => router.navigate("/admin/projects"));
      // // Thêm vào mảng project
      // projectList.push(newProjects);

      // // Lưu vào localStorage dưới dạng chuỗi
      // localStorage.setItem("project", JSON.stringify(projectList));

      // // console.log(localStorage.getItem("projects"));
      // // điều hướng về trang projects
    });
  });
  return `
        <div class="container">
      <h1>Add Project</h1>
      <form action="" id="form-add">
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Name</span>
  <input type="text" class="form-control form-control" id="project-name" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>
          <div class="mb-3">
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">Img</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
  </div>
</div>
<div class="input-group">
    <span class="input-group-text" id="basic-addon3">Link GitHub</span>
    <input type="text" class="form-control"  id="gitValue" aria-describedby="basic-addon3">
  </div>
<div class="input-group mt-3">
    <span class="input-group-text" id="basic-addon3">Title</span>
    <input type="text" class="form-control"  id="titleValue" aria-describedby="basic-addon3">
  </div>
          <div class="form-group mt-3">
            <button class="btn btn-success">Add</button>
          </div>
      </form>
    </div>
  `;
};

export default AdminProjectAddPage;
