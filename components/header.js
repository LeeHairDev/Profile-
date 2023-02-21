import navbar from "./navbar";
import banner from "./banner";
const Header = () => {
  // console.log(navbar());
  /*html*/
  return ` 
     <nav class="navbar navbar-expand-lg" id="/#home">
  <div class="container-fluid">
    <a class="navbar-brand logo-img text-white" href="#">LeeHair</a>
    <button class="navbar-toggler btn-menu-sub" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class=""><i class="fa-solid fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around">
        ${navbar()}
      </ul>
      <form class="d-flex" role="search">
           <div class="icon d-flex align-items-center gap-2">
    <a href=""><i class="fa-brands fa-facebook"></i></a>
    <a href=""><i class="fa-brands fa-telegram"></i></i></a>
    <a href="/admin/projects"><i class="fa-regular fa-user"></i></i></a>
  </div>
      </form>
    </div>
  </div>
</nav>
${banner()}
<div class="box-name-image position-absolute d-flex align-items-center row container">
  <div class="text-name-work col-sm-6 text-white" >
  <div class="name">
   <h1 class="text-white fw-bold text-name">Hello, My name is Hai</h1>
  </div>
  <div class="work d-flex gap-2">
          <div class="text-left">I'm a</div>
        <div class="text-typed">
            <p data-text="Front-End Developer">Front-End Developer</p>
        </div>
       </div>
  <button class="btn btn-outline-light button-86"><span class="text">Get Connected</span></button>
</div>
<div class="image-profile col-sm-4">
 <div class="image-profile-mini col-sm-4">
 <img src="img/z4122535271404_d5a207183fb5ca0f9878d80ebb5e4c4a.jpg" alt="">
</div>
   <span class="border-after"></span>
</div>
</div>
    `;
};
export default Header;
