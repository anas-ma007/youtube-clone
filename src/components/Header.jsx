import React from "react"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Header() {
    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <React.Fragment>
            <div className=" grid grid-flow-col shadow-lg p-5">
                <div className="flex col-span-1.5">
                    <img onClick={() => toggleMenuHandler()} className="h-10 mx-5 my-2 cursor-pointer" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="hamburger" />
                    <a href="/"> <img className="h-10 mx-2 my-2 hidden sm:inline-block" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YoutubeLogo" /> </a>
                </div>
                <div className="flex col-span-9 justify-center">
                    <input type="text" className="rounded-l-full w-1/2 h-14 my-auto border border-gray-400 border-r-0 pl-3 " placeholder="Search" /> <button className="my-auto h-14 bg-slate-200 rounded-r-full border border-gray-400 px-5">
                        <img className="h-7 my-auto" src="src\assets\pngwing.com.png" alt="s-icon" /> </button>
                    <img className="h-7 mx-7 my-auto" src="https://freesvg.org/img/miciconmuted.png" alt="voice" />
                </div>

                <div className="flex justify-end  col-span-1.5">

                    <img className="h-9 mx-2 my-2" src="https://blog.calameo.com/wp-content/uploads/2020/04/YOUTUBE-ICONES-3-e1586877042571-1024x612.png" alt="user" />
                    <img className="h-9 mx-2 my-2" src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="user" />
                    <img className="h-10 mx-4 my-2" src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" alt="user" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;