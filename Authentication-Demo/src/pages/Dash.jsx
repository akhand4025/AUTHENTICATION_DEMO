import {useNavigate} from "react-router-dom"
export function Dash(){
    const navigate=useNavigate();
    return (
    <>

    <h1>Dashboard Page</h1>
    <button onClick={()=>{
          navigate("/")
    }}>Go on Landing Page </button>
    </>
)
}