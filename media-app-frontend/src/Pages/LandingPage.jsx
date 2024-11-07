import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      {/* Welcome Section */}
      <MDBContainer style={{ padding: '10rem' }}>
        <MDBRow className="justify-content-between">
          <MDBCol size='6'>
            <h1>Welcome to Media Player</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eius rerum error excepturi quis assumenda tempore optio labore natus cupiditate officia perferendis pariatur unde, nam quos quibusdam quia, reiciendis ipsum. Quas id repellendus iste cupiditate earum libero. Eligendi ut in nostrum officia, minima pariatur facilis perspiciatis vitae dolores laborum autem fuga repudiandae iste. Expedita quam voluptatem natus, sapiente reprehenderit quasi.
            </p>
            <div className='my-5'>
              <Link to={'/home'}>
            <MDBBtn color='success'>Get Started</MDBBtn>
           </Link>
            </div>
            
          </MDBCol>
          <MDBCol size='4'>
            <img src="https://media1.tenor.com/images/33a46f727dbe790d436616a1f56fce9c/tenor.gif?itemid=7412752" alt="Media" style={{ width: '400px' }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Features Section */}
      <section style={{ marginBottom: '6rem' }}>
        <h1 className='text-center'>Features</h1>
        <MDBContainer>
          <MDBRow className="justify-content-between">
            {[...Array(3)].map((_, i) => (
              <MDBCol key={i} size='4'>
                <MDBCard>
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Simple, Fast, and Powerful Section */}
      <section style={{ marginBottom: '6rem' }}>
        <MDBContainer className="text-light" style={{ backgroundColor: '', padding: '50px', border: '1px solid white', borderSpacing: '10px' }}>
          <MDBRow className="mb-5">
            <MDBCol>
              <MDBTypography tag="h2" className="fw-bold text-warning">
                Simple fast and Powerful
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="text-light">
              {Array(3).fill().map((_, index) => (
                <React.Fragment key={index}>
                  <MDBTypography tag="h5" className="fw-bold mb-3">
                    Play Everything:
                  </MDBTypography>
                  <p>
                    Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita!
                    Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt.
                  </p>
                </React.Fragment>
              ))}
            </MDBCol>

            <MDBCol md="6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/_Yhyp-_hX2s?si=njEdgmRLpUbHhxjG"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  )
}

export default LandingPage;
