import React from 'react'
import { MdOutlineCloudUpload } from "react-icons/md";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFilm } from "react-icons/fa6";

import { MDBInput } from 'mdb-react-ui-kit';
import { addVideoAPI } from '../../services/allAPI';


function AddVideo() {
  
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgUrl: "",
    link: ""
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbededLink = (e) => {
    const { value } = e.target;
    let ycode = value.slice(-31);
    let ylink = `https://www.youtube.com/embed/${ycode}`;
    setVideoDetails({ ...videoDetails, link: ylink });
  }

  const handleAdd = async () => {
    const { caption, imgUrl, link } = videoDetails;
    if (!caption || !imgUrl || !link) {
      alert('Please fill all the details');
    } else {
      try {
        const response = await addVideoAPI(videoDetails);
        console.log(response);
        alert("Video uploaded successfully");
      } catch (error) {
        console.error('Error uploading video:', error);
        alert('Failed to upload video. Please try again.');
      }
    }
  }

  return (
    <div>
      <MdOutlineCloudUpload className='fs-1' onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaFilm /> Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill following details</p>
          <form style={{ color: 'white' }}>
            <MDBInput onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} label="Video Caption" id="typeText" type="text" />
            <br />
            <MDBInput onChange={(e) => setVideoDetails({ ...videoDetails, imgUrl: e.target.value })} label="Video image" id="typeText" type="text" />
            <br />
            <MDBInput onChange={getEmbededLink} label="Video Url" id="typeText" type="text" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo


