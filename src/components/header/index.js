import { Link, useNavigate,} from "react-router-dom"
import Home from "./home"
import {useEffect,useState} from "react"
function Header(){
    const navigate = useNavigate()
    
    

   
         
return(
    <div className="Header">
        <Link to="/">News App</Link>
       <Link to="/samsung">Category1</Link>
       <Link to="/putin">category2</Link> 
       <Link to="/apple">Category3</Link> 
       <input onChange={(e)=>{
       
       }} placeholder="search"></input>
       <button onClick={()=>navigate(`/cars`)}>click</button>
      
    </div>
)
}
export default Header