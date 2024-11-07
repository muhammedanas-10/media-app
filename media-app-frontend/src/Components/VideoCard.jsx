import React from 'react'

import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";

function VideoCard() {
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" />
      <Card.Body>
        
        <Card.Text className='d-flex justify-content-between'>
          Video Caption <MdDelete className='text-danger fs-3'/>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default VideoCard