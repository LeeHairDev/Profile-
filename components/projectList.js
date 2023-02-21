import { projectList } from "../data/data"
const projectListKey = ({projects}) => {
    // console.log(projects);
  return `
    ${ projects.map(item =>{
        return `
     <p>Đây là bản cũ</p>
              
        `;
    }).join("")
}
  `
}

export default projectListKey