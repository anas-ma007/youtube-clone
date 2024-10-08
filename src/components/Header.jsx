import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
// import SearchResultsContainer from "./searchVideoContainer";
import {searchVideos} from '../utils/videoSlice'

function Header() {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [selectSuggestion, setSelectSuggestion] = useState("")
    const [searchVideos, setSearchVideos] = useState([])

    const searchCache = useSelector(store=>store.search)

    useEffect(() => {

        const timer = setTimeout(() => {

            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }

    }, [searchQuery])

    const getSearchSuggestions = async () => {
        // console.log("API CALL  " +searchQuery )
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
        const json = await data.json()
        // console.log(json, "json data");
        setSuggestions(json[1])


        //for update cache  
        dispatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }

    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    // console.log(suggestions, "suggestionsss");


    const handleSuggestionSearch = (suggestion)=>{
        console.log(suggestion, "suggestion in handleSuggestion Search");
        setSelectSuggestion(suggestion)
        setShowSuggestions(false)
    }

    useEffect(()=>{
        searchResults()

        return ()=>{

        }
    }, [selectSuggestion] )

    const searchResults = async ()=>{
        let data = YOUTUBE_SEARCH(selectSuggestion)
        let searchData =  await fetch(data) 
        let json = await searchData.json() 
        // console.log(json.items);
        // setSearchVideos(json.items)
        dispatch(searchVideos({videos : json}))
    }



    // console.log(selectSuggestion, "selectSuggestion is will get");

    return (
        <React.Fragment>
            <div className=" grid grid-flow-col shadow-lg p-5" >
                <div className="flex col-span-1.5">
                    <img onClick={() => toggleMenuHandler()} className="h-10 mx-5 my-2 cursor-pointer" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="hamburger" />
                    <a href="/"> <img className="h-10 mx-2 my-2 hidden sm:block" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YoutubeLogo" /> </a>
                </div>


                <div>
                    <div className="flex max-w-screen-4xl col-span-9"  >
                        <input type="text" value={searchQuery} onFocus={() => { setShowSuggestions(true) }} onBlur={()=>{setShowSuggestions(false)}}  onChange={(e) => { setSearchQuery(e.target.value) }} className="rounded-l-full w-3/4 h-14 my-auto border border-gray-400 border-r-0 pl-3 " placeholder="Search" /> <button className="my-auto h-14 bg-slate-200 rounded-r-full border border-gray-400 px-5">
                            <img className="h-7 my-auto " src="src\assets\pngwing.com.png" alt="s-icon" /> </button>
                        <img className="h-7 mx-7 my-auto hidden sm:block" src="https://freesvg.org/img/miciconmuted.png" alt="voice" />
                    </div>
                    {showSuggestions && (<div className="fixed w-[30.5rem]   rounded-lg mt-0.5 broder border-gray-600 shadow-lg bg-white ">
                        <ul>
                            {suggestions.map((s) => <li key={(s)} onClick={()=>{ handleSuggestionSearch (s); setSearchQuery(s)}}  className="flex h-9 pt-1.5 shadow-sm hover:bg-gray-200"> <img className="h-4 ml-5 mr-2 mt-1.5" src="src\assets\pngwing.com.png" alt="s-icon" />{s} </li>)}
                      
                        </ul>
                    </div>)}
                </div>

                <div className="flex justify-end  col-span-1.5">
                    <img className="h-9 mx-2 my-2 hidden md:block " src="https://blog.calameo.com/wp-content/uploads/2020/04/YOUTUBE-ICONES-3-e1586877042571-1024x612.png" alt="user" />
                    <img className="h-9 mx-2 my-2 hidden md:block" src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="user" />
                    <img className="h-10 mx-4 my-2" src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" alt="user" />
                </div>
            </div>      
        </React.Fragment>
    )
}

export default Header;