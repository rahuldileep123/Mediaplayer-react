import React from 'react'
import { Card } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/home')
  }
  return (
 <>
      <div className="container mt-5">
        <div className="header row align-items-center">
          <div className="col-lg-5">
            <h2>Welcome to <span className='text-warning'>Media Player</span></h2>
            <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci rerum soluta nam voluptas, commodi recusandae voluptatibus quas a delectus necessitatibus beatae reiciendis optio perspiciatis sed atque doloribus, tempore expedita.
             </p>
             <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="land image" />
          </div>
        </div>
        <div className="features">
          <h3 className="text-center">Features</h3>
         <div className='row mt-3'>
            <div className="col-lg-4">
            <Card >
        <Card.Img style={{height:'350px'}} variant="top" src="https://i.pinimg.com/originals/f5/aa/d8/f5aad8e143b8d197c25d5e884bb315a2.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card>
            </div>
            <div className="col-lg-4">
            <Card >
            <Card.Img style={{height:'350px'}} variant="top" src="https://cdn.dribbble.com/users/470292/screenshots/4064016/ezgif.com-video-to-gif.gif" />
        <Card.Body>
          <Card.Title>Categorize videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card>
            </div>
            <div className="col-lg-4">
            <Card >
        <Card.Img style={{height:'350px'}} variant="top" src="https://i.pinimg.com/originals/04/39/04/04390480a47fd53214311db4eed77f71.gif" />
        <Card.Body>
          <Card.Title>Watch history</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card>
            </div>
         </div>
        </div>
        <div className="video row border p-5 mt-5 rounded">
          <div className="col-lg-5">
            <h2 className='text-warning'>Simple,Fast and Powerful</h2>
            <p style={{textAlign:'justify'}}> <span style={{fontSize:'20px'}}>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum aliquid at alias debitis qui accusantium, officia omnis illum suscipit facere laboriosam ab dolorem ullam delectus maiores. Accusamus aliquid numquam nihil? </p>
            <p style={{textAlign:'justify'}}> <span style={{fontSize:'20px'}}>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum aliquid at alias debitis qui accusantium, officia omnis illum suscipit facere laboriosam ab dolorem ullam delectus maiores. Accusamus aliquid numquam nihil? </p>
            <p style={{textAlign:'justify'}}> <span style={{fontSize:'20px'}}>Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum aliquid at alias debitis qui accusantium, officia omnis illum suscipit facere laboriosam ab dolorem ullam delectus maiores. Accusamus aliquid numquam nihil? </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 d-flex align-items center">
          <iframe width="853" height="480" src="https://www.youtube.com/embed/yRGUwOnXP30?list=RDyRGUwOnXP30" title="Bhaavam by Job Kurian" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
 </>
  )
}

export default LandingPage