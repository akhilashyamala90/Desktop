import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";

const Navigate=()=>{

    return(
        <>
        <h1>Hello this is navigate page</h1>
        <Link to="/Login">Login</Link>


        <Routes>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/Error" element={<Error></Error>}></Route>
        </Routes>
        </>
    )

}

export default Navigate;