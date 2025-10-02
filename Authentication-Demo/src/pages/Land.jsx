import {useNavigate} from "react-router-dom"
export function Land(){
    const navigate=useNavigate()
    return ( 
        <>
        <h1>Landing Page</h1>
        <button onClick={()=>{
            navigate("/Sign")
        }}>Signin</button>
        {" "}
        <button onClick={()=>{
            navigate("/Signup")
        }}>Signup</button>
    </>
    )
    
}