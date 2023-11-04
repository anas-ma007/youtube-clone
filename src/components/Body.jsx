import React from "react";
import Sidebar from '../components/Sidebar'
import { Outlet } from "react-router-dom";

function Body() {
    return (
        <React.Fragment>
            <div className="flex">
                <Sidebar />
                <Outlet/>
            </div>
        </React.Fragment>
    )
}


export default Body;