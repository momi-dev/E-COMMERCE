import { Link } from "react-router-dom";

const Login=()=>{

return (
  <form className="login">
   
    <h1>Login page</h1>
    <br></br>
    <div className="login-handle1">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label ">Email address</label>
    <input type="email" class="form-control login-handle" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <br></br>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control login-handle" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label " for="exampleCheck1">Check me out</label>
  </div>
  <Link to="/"> <button  type="submit" class="btn btn-primary" > submit</button> </Link>  

  </div>

</form>
)








}





    

    
    export default Login;
    





