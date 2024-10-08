
const MY_API = import.meta.env.VITE_APIKEY;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${MY_API}`

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH =  (searchKeyword)=>{
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchKeyword}&key=${MY_API}`
}
//  const Youtube_Comment_Box_API001 = "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=AIzaSyBoLXJZOudBKwFpLGeofwazXTstNqE59RI"

//  its working
 const Youtube_Comment_Box_API = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=2437RbesXDQ&&key=AIzaSyBoLXJZOudBKwFpLGeofwazXTstNqE59RI"
//  its working


// https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&order=time&videoId=pVEu27BgwQ4&&key=AIzaSyBoLXJZOudBKwFpLGeofwazXTstNqE59RI
// https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&order=time&videoId=3v8y5yFmi5U&&key=AIzaSyBoLXJZOudBKwFpLGeofwazXTstNqE59RI


/*
 https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=pVEu27BgwQ4&&key=AIzaSyBoLXJZOudBKwFpLGeofwazXTstNqE59RI&maxResults=1
 https://www.googleapis.com/youtube/v3/videos?part=snippet&id=2437RbesXDQ&&key=AIzaSyBoLXJZOudBKwFpLGeofwazXTstNqE59RI
 https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=2437RbesXDQ&&key=AIzaSyBoLXJZOudBKwFpLGeofwazXTstNqE59RI
 */
