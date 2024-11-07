import React from 'react';
import { SiVlcmediaplayer } from "react-icons/si";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' style={{color: 'yellow'}}>
            <SiVlcmediaplayer size={60} /> Media Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header