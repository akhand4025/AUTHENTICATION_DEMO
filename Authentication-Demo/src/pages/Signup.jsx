import {useNavigate} from "react-router-dom"
import {useState} from 'react';
export function Signup(){
    const navigate=useNavigate();
    const [name,setname]=useState(" ");
    const [password,setpassword]=useState(" ");

    function handlename(e){
        setname(e.target.value);
    }
    function handlepass(e){
        setpassword(e.target.value);
    }

    async function change(){
        try{
            const res = await fetch("http://localhost:3000/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,password})

            });

            if(res.ok){
                navigate("/Dash");
            }else{
                alert("user already exist");
            }

        }catch(err){
            alert("Something went wrong"+err)
        }
    }

    return(
        <>
        <h1>Signup Page</h1>
        <input type="text" placeholder="username"  onChange={(handlename)}></input><br/>
        <input type="text" placeholder="password" onChange={(handlepass)}></input><br/>
        <button onClick={(change)}>Submit</button>
        </>
    )
}