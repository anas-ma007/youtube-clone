
const MY_API = import.meta.env.VITE_APIKEY;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${MY_API}`

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH =  (searchKeyword)=>{
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchKeyword}&key=${MY_API}`
}


