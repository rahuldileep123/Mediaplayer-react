import React,{ useEffect, useState } from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'
import { addCategoryAPI, getCategoryAPI, removeCategoryAPI,getSingleVideoAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category({removeCatVideoResponse}) {
  const [allCategories,setAllCategories]=useState([])

  const [categoryName,setCategoryName]=useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
const handleAddCategory=async()=>{
  if(categoryName){
    const result = await addCategoryAPI({categoryName,allVideos:[]})
    handleClose()
    getAllCategories()
  }else{
    alert("Please fill the form completely")
  }
 
}
const getAllCategories=async()=>{
  const result = await getCategoryAPI()
  setAllCategories(result.data)
  // if(result?.status==200){
   
  // }
}
// console.log(allCategories);

useEffect(()=>{
  getAllCategories()
},[removeCatVideoResponse])
const handleRemoveCategory=async(cId)=>{
  await removeCategoryAPI(cId)
  getAllCategories()
}

const dragOverCategory=(e)=>{
  e.preventDefault()
  console.log("draggin over");
}

const videoDropped=async(e,categoryId)=>{
  const videoId=e.dataTransfer.getData("videoId")
  console.log(`video dropped ${videoId} catergory ${categoryId}`);
  // get video details
  const {data} = await getSingleVideoAPI(videoId)
  console.log(data);
  // get category details
  let selectedCategory = allCategories.find(item=>item.id==categoryId)
  console.log(selectedCategory);
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  await updateCategoryAPI(categoryId,selectedCategory)
  getAllCategories()
}
//remove video
const videoDragStarted=(e,videoId,categoryId)=>{
  console.log("drag started from category");
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
}

  return (
    <>
     <div className="d-flex justify-content-evenly">
          <h3>All Categories</h3>
          <button onClick={handleShow} className='btn rounded-circle bg-info ms-0 fs-4'>+</button>
        </div>
        <div className="container-fluid mt-3">

         {allCategories?.length>0? allCategories.map((item,index)=>(
             <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)}  key={index} className="border rounded p-5 ">
               <div className='d-flex justify-content-between'>
                <h5>{item.categoryName}</h5>
                <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
                <div className="row mt-2">
                  {item.allVideos?.length>0 && 
                  item.allVideos?.map((video,index)=>(
                    <div draggable onDragStart={(e)=>videoDragStarted(e,video.id,item.id)} key={index} className="col-lg-6">
                      <VideoCard insideCategory={true} displayData={video}/>
                    </div>
                  ))

                  }
                </div>
             </div>
         ))
        
        :
         <div className='text-danger fw-bolder'>No categories added!!</div>  
        }
        </div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLease fill the form completely</p>
         <div className="border border-rounded p-3">
         <FloatingLabel
        controlId="floatingInputcategory"
        label="category name"
        className="mb-3"
      >
        <Form.Control value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="category name" />
      </FloatingLabel>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category