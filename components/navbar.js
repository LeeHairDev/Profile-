import { menuList } from "../data/data";
const navbar = (menu) => {
  return `${menuList
    .map((menu) => {
      // console.log(menu.path);
      return `
            <li class="nav-item ">
          <a class="nav-link text-white" href="${menu.path}">${menu.name}</a>
        </li>
    `;
    })
    .join("")}
      `;
};

export default navbar;

// Gõ nafce + enter để tạo hàm nhanh
