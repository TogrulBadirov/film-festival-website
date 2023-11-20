import React from 'react'
import "./index.scss"
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Magazine = () => {
  return (
    <section id='Magazine'>
        <Row>
        <Col xs={12} md={6} lg={6}>
          <div className="magazine-card">
            <div className="Magazine-container">
                Magazine
            <div>
            <span>PRODUCERS</span> <span>DECEMBER 10</span>
            </div>
            <h2>Interview with movie producer Paul Gange </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <button>View More</button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <div className="magazine-card">
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
          </div>
        </Col>
        </Row>
        </section>
  )
}

export default Magazine