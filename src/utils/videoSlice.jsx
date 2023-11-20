// /* eslint-disable no-self-assign */
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     videos: []
// }

// const videoSlice = createSlice({
//     name :"videos",
//     initialState : initialState,
//     reducers : {
//         HomeVideos : (state,action)=>{
//          return state.videos = action.payload
//         },
//         searchVideos : (state, action)=>{
//             state.videos  = action.payload
//         }
//     }
// })


// export const {HomeVideos, searchVideos}= videoSlice.actions
// export default videoSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     videos: []
// }

const videoSlice = createSlice({
    name: "videos",
    initialState: {
         videos: []
         },
    reducers: {
        HomeVideos: (state, action) => {
            state.videos = action.state.videos;
        },
        searchVideos: (state, action) => {
            state.videos =action.state.videos;
        }
    }
})

export const { HomeVideos, searchVideos } = videoSlice.actions
export default videoSlice.reducer
