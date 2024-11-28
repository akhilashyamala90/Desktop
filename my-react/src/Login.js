import React, { useState } from "react";
import Navigate from "./Navigate";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    let [u,setU]=useState();
    let [p,setP]=useState();
    

    let navi=useNavigate();
    function verify()
        {
            if(u=="GRIET" && p=="GRIET")
            {
                navi("/Dashboard");
            }
            else
            {
                navi("/Error");
            }
        }

    return(
        
        <>
        <input type="text" placeholder="username" value={u} onChange={(e)=>{setU(e.target.value)}} name="uname"></input>
        <input type="password" placeholder="password" value={p} onChange={(e)=>{setP(e.target.value)}} name="pass"></input>
        <input type="submit" onClick={verify}></input>
        </>
    )
}

export default Login;


