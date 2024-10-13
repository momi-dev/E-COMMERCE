import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { Estore } from "./store/E-coomerce-store";
import { useContext, useEffect, useState } from "react";


const Header=()=>{



  const {count}=useContext(Estore);

 
 











  return(
    

<header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-link px-2 text-secondary logo" ><img src="https://img.freepik.com/free-vector/flat-design-mobile-store-logo-template_23-2149728788.jpg?t=st=1720781621~exp=1720785221~hmac=5822776b8ea3734b545b80647ce1098415a88bebaf1ee67cade08498ffb7bc06&w=740" alt=""  height={50} width={50}/></li>
      
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search-box" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/login" class="nav-link px-2 text-white">Login</Link></li>
        <li className="addtocartlogo nav-link px-2 text-white"><TiShoppingCart />:{count}</li>
        <li><Link to="/list" class="nav-link px-2 text-white" > cart list </Link></li> 
      
       
        </ul>
          
         
        </div>
      </div>
    </div>
  </header>
  )

}
export default Header;