import React from "react"

function Header() {
    return (
        <React.Fragment>
            <div className=" grid grid-flow-col shadow-lg p-3">
                <div className="flex col-span-1.5">
                    <img className="h-10 mx-5 my-2" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="hamburger" />
                    <img className="h-10 mx-2 my-2 " src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YoutubeLogo" />
                </div>
                <div className="flex col-span-9  justify-center">
                    <input type="text" className="rounded-l-full w-1/2 h-10 my-auto border border-gray-600 border-r-0" placeholder="serch" /> <button className="my-auto h-10 rounded-r-full border border-gray-600 px-2">  Search </button>
                    <img className="h-7 mx-2 my-auto" src="https://freesvg.org/img/miciconmuted.png" alt="voice" />
                </div>
                <div className="flex col-span-1.5">
                    <img className="h-10 mx-2 my-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_user_icon-01.svg/768px-New_user_icon-01.svg.png?20160211171440" alt="user" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;