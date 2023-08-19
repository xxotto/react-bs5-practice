import logo from '../logo.svg';
import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';


export const FirstComponent = () => {

  let username = "Username";
  let intNumber = 2212313124;
  let floatNumber = 3.33333;
  let myList = ["item1", "item2", "item3", "item4", "item5"]

  const [myString, setMyString] = useState("Default");
  const changeVarName = (newVarName) => {
    setMyString(newVarName);
  }

  return (
    <div>
      <Row className='text-center'>

        <Col md={3} className='list-group mt-2 py-3 px-4'>
          <h1 className='list-group-item'>h1 title</h1>
          <h2 className='list-group-item'>h2 title</h2>
          <h3 className='list-group-item'>h3 title</h3>
          <p className='list-group-item'>P tag P tag P tag P tag P tag P tag P tag P tag P tag P tag P tag P tag P tag </p>
        </Col>

        <Col md={3} className='mt-2 py-3 px-4'>
          <img src={logo} className="App-logo" alt="logo" />
          <p className='mt-4'><b>Var 1: </b>{username}</p>
          <p><b>Var 2: </b>{intNumber}</p>
          <p><b>Var 3: </b>{floatNumber}</p>
        </Col>

        <Col md={3} className='mt-2 py-3 px-4'>
          <div className="card m">
            <div className="card-header">
              <h5>Items from a list:</h5>
            </div>
            <ul className="list-group list-group-flush">
              {
                myList.map((item, id) => {
                  return (
                    <li key={id} className="list-group-item">
                      {item}
                    </li>)
                })
              }
            </ul>
          </div>
        </Col>

        {/* React Bootstrap card */}
        <Col md={3} className='mt-2 py-3 px-4'>
          <Card className='mb-3'>
            <Card.Body>
              <Card.Header>Header</Card.Header>
              <Card.Title>Titile</Card.Title>
              <Card.Text>Text text text.</Card.Text>
            </Card.Body>
          </Card>

          {/* Plain Bootstrap Card, NO react components*/}
          <div class="card">
            <div class="card-header">
              Change variables
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <strong className={myString.length >= 9 ? 'color-green' : 'color-blue'}>{myString}</strong>
              </h5>
              <p className="card-text">+9 letters it turn green, 8 or less it turn blue</p>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Title</span>
                <input
                  type='text'
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onClick={e => changeVarName(e.target.value)}></input>
              </div>

              <button className="btn btn-primary" onClick={e => changeVarName("New string name")}>Change</button>
            </div>
          </div>
        </Col>

      </Row>
    </div>
  )
}
