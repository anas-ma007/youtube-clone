import React from "react";
import Sidebar from '../components/Sidebar'
import Maincontainer from "./Maincontainer";

function Body() {
    return (
        <React.Fragment>
            <div className="flex">
                <Sidebar />
                <Maincontainer />
            </div>
        </React.Fragment>
    )
}


export default Body;