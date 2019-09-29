import React from 'react';

import Img1 from 'assets/images/home/1.png';
import Img2 from 'assets/images/home/access/1.png';
import Img3 from 'assets/images/home/access/2.png';
import Img4 from 'assets/images/home/access/3.png';
import {Row, Col} from 'reactstrap';
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div style = {{paddingTop:"30px", color:"black"}} > 
        <img src = {Img1} style = {{width:"100%"}} />
        <br/>
        <br/>
        <Row>
          <Col xs = "12" md = "4">
              <img src = {Img2} style = {{width:"100%", marginBottom:"10px"}} />
              <h4 style = {{color:"black"}}>NEW FEATURES</h4>
              <p>
              Join All Access and Track
              Your Workout
              Today
              </p>
          </Col>
          <Col xs = "12" md = "4">
              <img src = {Img3} style = {{width:"100%", marginBottom:"10px"}} />
              <h4 style = {{color:"black"}}>FREE SHIPPING</h4>
              <p>
              Over 60 Plans, Up to 10% 
              off in-Store Saving + FREE 
              Shipping
              </p>
          </Col>
          <Col xs = "12" md = "4">
              <img src = {Img4} style = {{width:"100%", marginBottom:"10px"}} />
              <h4 style = {{color:"black"}}>FEAUTRED WORKOUT PLAN</h4>
              <p>
              Your Sleeves Will Never Be 
              the Same
              </p>
          </Col>
        </Row>
      </div>
    );
  }
}


export default List;
