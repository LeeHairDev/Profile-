import Header from "../components/header";
import { projectList } from "../data/data";
import projectListKey from "../components/projectList";
import { useState, useEffect } from "../libs";
const Projectpage = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/project")
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);
  // console.log(data);
  /*html*/
  return `
      <div class="container" id="myproject">
      <div class="box-portfolio" id="#/project">
          <div class="title-portfolio text-center py-5 text-white">
            <h3 class="text-primary-emphasis">Portfolio</h3>
          <h2>What I Do for My Clients</h2>
          </div>
          <div class="project-portfolio">
            <div class="filter-project ">
              <ul class="filter d-flex align-items-center justify-content-center gap-5 fw-bold fs-4">
                <li><a href="">All</a></li>
                <li><a href="">React JS</a></li>
                <li><a href="">Html Css</a></li>
                <li><a href="">Node Js</a></li>
              </ul>
            </div>
            <div class="box-grid-project row gap-4">
              ${projectData.map((item) => {
                console.log(item);
                return `
                  <div class="box-in-box-project col-sm-4 ">
                  <div class="img">
                    <img src="${item.link}" alt="">
                  </div>
                  <div class="information-project">
                      <div class="name-project">
                        <h3>${item.name}</h3>
                      </div>
                      <div class="content-project">
                        <p>${item.title}</p>
                      </div>
                      <div class="button-github">
                          <a href="${item.git}" target="_blank"><button class="button-86">View in GitHub</button></a>
                      </div>
                  </div>
              </div>
                    `;
              })}
            </div>
          </div>
      </div>
    </div>
    `;
};
export default Projectpage;