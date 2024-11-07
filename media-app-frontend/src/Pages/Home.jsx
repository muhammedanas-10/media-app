import React from 'react'
import { Link } from 'react-router-dom'
import { LuHistory } from "react-icons/lu";
import AddVideo from '../Components/AddVideo'
import ViewVideo from '../Components/ViewVideo'
import AddCategory from '../Components/AddCategory'

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-6 d-flex p-5">
          <h1 className='mx-3'>Upload Video</h1> <AddVideo />
        </div>
        <div className="col-6">
          <Link to={'/watch-history'} style={{float: 'right',textDecoration: 'none',padding: '50px'}} className='text-light'>
          Watch History <LuHistory className='fs-3' />
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <h1 className='text-center'>All Videos</h1>
          <ViewVideo/>
        </div>
        <div className="col-3">
          <h1 className='text-center'>Category</h1>
          <AddCategory />
        </div>
      </div>

    </div>
  )
}

export default Home