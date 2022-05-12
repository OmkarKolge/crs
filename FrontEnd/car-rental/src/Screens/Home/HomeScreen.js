import React from 'react'
import { Row, Col } from 'react-bootstrap'
import companyLogo from '../../Images/cars.jpg'
import Footer from '../../Components/Footer'



const image = {
  top: '0',
  right: '320px',
  transform: 'none',
  position: 'relative',
  width: '1921px',
  height: 'auto',
}


const Home = (props) => {
  return (
    <Row
      className="show-grid text-center"
      style={{ marginLeft: '10px', marginRight: '10px' }}>
      <Col className="image-wrapper">
        <img src={companyLogo} alt="" style={image} />
        <Footer />
      </Col>
    </Row>
  )
}

export default Home
