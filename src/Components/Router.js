import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee.js";
import Employee from "./Employee.js";
import Home from "./Home.js";

import PageNotFound from "./PageNotFound.js";

const Router = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/employees" element={<Employee/>}/>
                    <Route exact path="/add" element={<AddEmployee/>}/>
                    <Route exact path="/edit/:employee_id" element={<AddEmployee/>}/>
                    <Route exact path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )


}

export default Router;