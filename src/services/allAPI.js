import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"


//upload video -store in http://localhost:3000/videos
export const uploadVideoAPI=async(video)=>{
  // send respoonse to add component
  return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}
//get video api for view component to show the uploaded videos
export const getAllVideosAPI= async()=>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")
} 

//  store watch history from videocard to http://localhost:3000/history

export const saveHistoryAPI= async (videoDetail)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetail)
}
//get history data from http://localhost:3000/history
export const getHistoryAPI= async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// delete watch history from http://localhost:3000/history
export const removeHistoryAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//delete video 
export const removeVideoAPI= async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}

// add category
export const addCategoryAPI =async(categoryDetails)=>{
    return await commonAPI('POST',`${SERVER_URL}/categories`,categoryDetails)
}
//get category
export const getCategoryAPI= async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
} 
//remove category api
export const removeCategoryAPI= async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,[])
}
//get single video api
export const getSingleVideoAPI= async(videoId)=>{
    return await commonAPI('GET',`${SERVER_URL}/videos/${videoId}`,"")
}
//update category API
export const updateCategoryAPI=async(categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}
//get a single category
export const getSingleCategoryAPI=async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}