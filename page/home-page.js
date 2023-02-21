import Header from "../components/header";
import Categorypage from "./category-page";
import Projectpage from "./project-page";
import notFoundPage from "./not-found";
import projectDetailPage from "./project-detail-page";
import aboutPage from "./aboutPage";
import option from "./option";
import contact from "./contact";
import footer from "../components/footer";
const Homepage = () => {
  return `
    ${Header()}
     ${option()}
     ${aboutPage()}
     ${Projectpage()}
    ${contact()}
    ${footer()}
    `;
};
export default Homepage;
