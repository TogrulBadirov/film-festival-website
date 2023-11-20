import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const FilmPreviews = () => {
  return (
    <section id='FilmPreviews'>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-card">
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-1.jpg" alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-card">
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-2.jpg" alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-card">
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-3.jpg" alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-card">
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-4.jpg" alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-card">
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-5.jpg" alt="" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className="custom-card">
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/port-single-home-4-6.jpg" alt="" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default FilmPreviews;
