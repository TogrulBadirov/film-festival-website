import React, { useEffect, useState } from 'react';
import "./index.scss";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseFetch from '../UseFetch';

const PopularMovies = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleData = (data) => {
    setData(data);
    setFilteredData(data);
  };

  useEffect(() => {
    UseFetch("http://localhost:3000/Movies", handleData);
  }, []);

  const handleFilter = (e) => {
    let filteredMovies = data.filter((x) => x.category === e.target.value);

    e.target.value === "showAll" ? setFilteredData(data) : setFilteredData(filteredMovies);
  };

  return (
    <section id='PopularMovies'>
      <h3>PopularMovies</h3>
      <div className="PopularMovies-filter">
        <button value={"showAll"} onClick={handleFilter}>Show All </button>
        <button value={"comedy"} onClick={handleFilter}>Comedy</button>
        <button value={"documentary"} onClick={handleFilter}>Documentary</button>
        <button value={"drama"} onClick={handleFilter}>Drama</button>
        <button value={"fantasy"} onClick={handleFilter}>Fantasy</button>
        <button value={"romance"} onClick={handleFilter}>Romance</button>
        <button value={"sci-fi"} onClick={handleFilter}>Sci-Fi</button>
      </div>
      <div className="film-card-container">
        <Row>
          {filteredData && filteredData.map((item) => (
            <Col xs={12} md={4} lg={2} key={item.id}>
              <div className="film-card">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <span>${item.price}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PopularMovies;
