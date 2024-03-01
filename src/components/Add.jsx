import React,{useState} from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUpload]=useState({
    caption:"",imageUrl:"",youtubeLink:""
  })
   console.log(uploadVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUpload({...uploadVideo,caption:"",imageUrl:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink=(link)=>{
if(link.includes("v=")){
  let videoId=link.split("v=")[1].slice(0,11)
  setUpload({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
}else{
  setUpload({...uploadVideo,youtubeLink:""})
  alert("enter proper youtube link")
}
  }
 
  const handleSubmit=async()=>{
    // to store upload video data in http://localhost:3000/videos
   const {caption,imageUrl,youtubeLink}=uploadVideo
   if(caption && imageUrl && youtubeLink){
    // proceed to store video from http://localhost:5173/home
    //npm i axios - command to install axios
    //API CALL
    const result = await uploadVideoAPI(uploadVideo)
    console.log(result);
    if(result.status>=200 && result.status<300){
      alert(`${result.data.caption} uploaded succesfully`)
      setUploadVideoResponse(result.data)
      handleClose()
    }else{
      alert("upload failed..")
    }
   }else{
    alert("please fill the form comepletely")
   }

  }


  return (
    <>
    <div className='d-flex'>
        <h4>Upload A Video</h4>
        <button onClick={handleShow} className='btn rounded-circle bg-secondary ms-2'><i className="fa-solid fa-plus fs-5"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the following details!!</p>
        <div className="border border-rounded p-3">
        <FloatingLabel
        controlId="floatingInputcaption"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.caption} onChange={e=>setUpload({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputimg"
        label="image url"
        className="mb-3"
      >
        <Form.Control type="text" value={uploadVideo.imageUrl} onChange={e=>setUpload({...uploadVideo,imageUrl:e.target.value})} placeholder="image url" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputcaption"
        label="youtube video link"
        className="mb-3"
      >
        <Form.Control type="text" value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)}  placeholder="youtube video link" />
      </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default Add