import React from 'react'
import "./index.scss"
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tickets = () => {
  return (
    <section id='Tickets'>
        <p>Tickets</p>
        <div className="Tickets-container">
        <Row>

        <Col xs={12} md={6} lg={4}>
          <div className="film-card">
            <div className='film-card-left'>
            <h4>ONE DAY</h4>
            <p>Type: Regular ticket</p>
            <span>Price: $10</span>
            <p className='pargraph'>*Lorem ipsum dolores sit amet, dlores sit.</p>
            </div>
            <div className="film-card-right">
            <span></span>
            <p>buy</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="film-card">
            <div className='film-card-left'>
            <h4>ONE DAY</h4>
            <p>Type: Regular ticket</p>
            <span>Price: $10</span>
            <p className='pargraph'>*Lorem ipsum dolores sit amet, dlores sit.</p>
            </div>
            <div className="film-card-right">
            <span></span>
            <p>buy</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="film-card">
            <div className='film-card-left'>
            <h4>ONE DAY</h4>
            <p>Type: Regular ticket</p>
            <span>Price: $10</span>
            <p className='pargraph'>*Lorem ipsum dolores sit amet, dlores sit.</p>
            </div>
            <div className="film-card-right">
            <span></span>
            <p>buy</p>
            </div>
          </div>
        </Col>

        
        </Row>
        </div>
    </section>
  )
}

export default Tickets