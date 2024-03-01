import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'


function Home() {
  const [removeCatVideoResponse,setRemoveCatVideoResponse]=useState("")
  const [uploadVideoResponse,setUploadVideoResponse] = useState("") //state lifting
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <Add setUploadVideoResponse={setUploadVideoResponse} /> {/* state lifting */}
      <Link to={'/watch'} style={{color:'white',textDecoration:'none',fontSize:'20px'}}>View History</Link>
    </div>
    <div className="container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3>All videos</h3>
        
        <View uploadVideoResponse={uploadVideoResponse} setRemoveCatVideoResponse={setRemoveCatVideoResponse} />  {/* state lifting */}
      </div>
      <div className="col-lg-6">
      <Category removeCatVideoResponse={removeCatVideoResponse}/>
       
      </div>
    </div>
    </>
  )
}

export default Home