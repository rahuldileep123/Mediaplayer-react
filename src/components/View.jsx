import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse,setRemoveCatVideoResponse}) {
 
  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState('')

  const getAllVideos= async()=>{
   const result= await getAllVideosAPI()
   
   if(result?.status==200){
    setAllVideos(result?.data);
   }
   
  }
  console.log(allVideos);

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])

//delete video from category
const dragOverView=(e)=>{
  e.preventDefault()
}

const handleCategoryVideo=async(e)=>{
const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
console.log(`remove the video ${videoId} ${categoryId} `);
//get the category
const {data}=await getSingleCategoryAPI(categoryId)
console.log(data);
const updatedVideoList= data.allVideos.filter(item=>item.id!==videoId)
console.log(updatedVideoList);
const {id,categoryName}=data
const result= await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedVideoList})
setRemoveCatVideoResponse(result.data)
}

  return (
    <>
    <Row droppable="true" onDragOver={(e)=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
       { allVideos?.length>0? 
       allVideos.map((video,index)=> 
        <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
       <VideoCard setDeleteVideoResponse={setDeleteVideoResponse}  displayData={video}/>
       </Col>)
      
        :
        <div className='text-danger fw-bolder'>NO Videos to display</div>
        }
        
        
    </Row>
    </>
  )
}

export default View