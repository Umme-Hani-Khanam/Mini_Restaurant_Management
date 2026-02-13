import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedUser = login(email, password);

    if (!loggedUser) {
      alert("Invalid credentials");
    } else {
      if (loggedUser.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/customers/dashboard");
      }
    }
  };

  return (
 <div>
   <div>
      <h2 style={{textAlign:'center',fontSize:'50px'}}>Login Page </h2>

      <form onSubmit={handleSubmit}>
        <input style={{width:"25%",height:"25px"}}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<br>
</br>
<br>
</br>
        <input style={{width:"25%",height:"25px"}}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<br>
</br>
<br>
</br>        <button type="submit" style={{backgroundColor:"red" , width:'150px',height:'40px'}}>Login</button>
      </form>
    </div>
 </div>  
 
  );
}

export default Login;
