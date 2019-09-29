import React from 'react';
import {
  Row, Col } from 'reactstrap';
// Import actions
// Import settings
import './List.css';
import Img1 from 'assets/images/exercise/5.png';
import Img2 from 'assets/images/exercise/6.png';
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className = "workout">
         <div className = "title">
              Program for Men to Build Muscles.
         </div>
         <div className = "description">
         <Row>
           <Col md = "7">
              <p>
              Day 1: Legs  <br/>
              1) &nbsp;&nbsp;&nbsp;&nbsp;	Back Squat - 50kg<br/>
              2) &nbsp;&nbsp;&nbsp;&nbsp;	Dead-lifts - 60kg<br/>
              3) &nbsp;&nbsp;&nbsp;&nbsp;	Leg Extension Machine - 41.5kg<br/>
              4) &nbsp;&nbsp;&nbsp;&nbsp;	Seated Leg Curld Machine - 41.5kg<br/>
              5)&nbsp;&nbsp;&nbsp;&nbsp;	Calf Raise Machine - 82.5kg 15reps x 2 sets. 30 seconds rest between<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; 8-12 reps x 3 sets(1minute rest between sets)<br/>
              <br/>
              Day 2: Chest and Triceps<br/>
              1) &nbsp;&nbsp;&nbsp;&nbsp;	Becnh Press - 55kg<br/>
              2) &nbsp;&nbsp;&nbsp;&nbsp; Dumbell Incline Press - 35lb<br/>
              3) &nbsp;&nbsp;&nbsp;&nbsp;	Dumbell Fly`s - 25lb<br/>
              4) &nbsp;&nbsp;&nbsp;&nbsp;	Triceps Skull Crusherss - 24kg<br/>
              5) &nbsp;&nbsp;&nbsp;&nbsp;	Triceps Dips – Body Weigth<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;8-12 reps x 3 sets(1minute rest between sets)<br/>
             <br/>
              Day 3: Back and Biceps<br/>
              1) &nbsp;&nbsp;&nbsp;&nbsp;	Wide Grip Pull-Ups – Body Weight 60 reps as many sets as needed.<br/>
              2) &nbsp;&nbsp;&nbsp;&nbsp;	Lying Dumbell Rows – 35lb<br/>
              3) &nbsp;&nbsp;&nbsp;&nbsp;	Shrugs – 20kg<br/>
              4) &nbsp;&nbsp;&nbsp;&nbsp;	Seated Cable Rows – 41kg<br/>
              5) &nbsp;&nbsp;&nbsp;&nbsp;	Bicep Curls – 24kg 15reps x 2 sets. 30 seconds rest between<br/>
              6) &nbsp;&nbsp;&nbsp;&nbsp;	Dumbell Hammer Curls – 22.5lbs 15reps x 2 sets. 30 seconds rest <br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;8-12 reps x 3 sets(1minute rest between sets)<br/>
                <br/>
              Day 4: Shoulders<br/>
              1) &nbsp;&nbsp;&nbsp;&nbsp;	Military Press – 20kg<br/>
              2) &nbsp;&nbsp;&nbsp;&nbsp;	Dumbell Shoulder Press – 22lbs<br/>
              3) &nbsp;&nbsp;&nbsp;&nbsp;	Dumbel Side Raises – 12.5lbs<br/>
              4) &nbsp;&nbsp;&nbsp;&nbsp;	Front Raises – 15kg plate<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;8-12 reps x 3 sets(1minute rest between sets)<br/>
              </p>
           </Col>
           <Col md = "5">
              <img src = {Img1} style = {{width:"100%"}}/>
           </Col>
         </Row>
         <div className = "title">
             The Ultimate 5-Day Workout Routine for Women to Get Strong and Toned
         </div>
         <Row>
           <Col md = "7">
             <p>
             Day 1:  Chest and Arms<br/>
              1.	&nbsp;&nbsp;&nbsp;&nbsp;Flat bench barbell press – 4 sets of 8 reps<br/>
              2.	&nbsp;&nbsp;&nbsp;&nbsp;Push ups – 4 sets of 10 reps<br/>
              3.	&nbsp;&nbsp;&nbsp;&nbsp;Cable crossovers – 3 sets of 15 reps<br/>
              4.	&nbsp;&nbsp;&nbsp;&nbsp;Incline dumbbell flyes – 4 sets of 12 reps<br/>
              5.	&nbsp;&nbsp;&nbsp;&nbsp;Barbell biceps curls – 3 sets of 15 reps<br/>
              6.	&nbsp;&nbsp;&nbsp;&nbsp;Alternate arm hammer curls – 4 sets of 12 reps per arm<br/>
              7.	&nbsp;&nbsp;&nbsp;&nbsp;Triceps rope overhead extensions – 3 sets of 20 reps<br/>
              8.	&nbsp;&nbsp;&nbsp;&nbsp;Triceps dips – 3 sets of 15 reps<br/>
              9.	&nbsp;&nbsp;&nbsp;&nbsp;10 minutes on the elliptical machine<br/>
              <br/>
              Day 2: Shoulders and Back<br/>
              1.	&nbsp;&nbsp;&nbsp;&nbsp;Standing barbell military press – 4 sets of 10 reps<br/>
              2.	&nbsp;&nbsp;&nbsp;&nbsp;Dumbbell lateral raises – 4 sets of 15 reps<br/>
              3.	&nbsp;&nbsp;&nbsp;&nbsp;EZ bar upright rows – 3 sets of 15 reps<br/>
              4.	&nbsp;&nbsp;&nbsp;&nbsp;Seated dumbbell shoulder press – 4 sets of 10 reps<br/>
              5.	&nbsp;&nbsp;&nbsp;&nbsp;Dumbbell shrugs – 4 sets of 10 reps<br/>
              6.	&nbsp;&nbsp;&nbsp;&nbsp;Close-grip lat pulldowns – 4 sets of 12 reps<br/>
              7.	&nbsp;&nbsp;&nbsp;&nbsp;Dumbbell bent over rows – 4 sets of 12 reps per arm<br/>
              8.	&nbsp;&nbsp;&nbsp;&nbsp;T-Bar rows – 4 sets of 10 reps<br/>
              9.	&nbsp;&nbsp;&nbsp;&nbsp;10 minutes on the stationary bike<br/>
              <br/>
              Day 3: Cardio Circuit<br/>
              1.	&nbsp;&nbsp;&nbsp;&nbsp;10 burpees<br/>
              2.	&nbsp;&nbsp;&nbsp;&nbsp;10 push ups<br/>
              3.	&nbsp;&nbsp;&nbsp;&nbsp;15 crunches<br/>
              4.	&nbsp;&nbsp;&nbsp;&nbsp;20 squat thrusts<br/>
              5.	&nbsp;&nbsp;&nbsp;&nbsp;3 sets of 10 hanging leg raises<br/>
              6.	&nbsp;&nbsp;&nbsp;&nbsp;3 x 1-minute rounds of plank<br/>
              7.	&nbsp;&nbsp;&nbsp;&nbsp;20 minutes low intensity cardio on the treadmill<br/>
              <br/>
              Day 4: Strengths<br/>
              1.	&nbsp;&nbsp;&nbsp;&nbsp;Incline dumbbell press – 5 sets of 5 reps<br/>
              2.	&nbsp;&nbsp;&nbsp;&nbsp;Flat bench barbell press – 5 sets of 5 reps<br/>
              3.	&nbsp;&nbsp;&nbsp;&nbsp;Deadlifts – 5 sets of 5 reps<br/>
              4.	&nbsp;&nbsp;&nbsp;&nbsp;Barbell clean and press – 5 sets of 5 reps<br/>
              5.	&nbsp;&nbsp;&nbsp;&nbsp;Barbell bent-over rows – 5 sets of 5 reps<br/>
              6.	&nbsp;&nbsp;&nbsp;&nbsp;Barbell snatch – 5 sets of 5 reps<br/>
              7.	&nbsp;&nbsp;&nbsp;&nbsp;10 minutes on the stationary bike<br/>
              <br/>
              Day 5: Legs<br/>
              1.	&nbsp;&nbsp;&nbsp;&nbsp;Barbell squats – 4 sets of 8 reps<br/>
              2.	&nbsp;&nbsp;&nbsp;&nbsp;Leg press machine – 3 sets of 12 reps<br/>
              3.	&nbsp;&nbsp;&nbsp;&nbsp;Leg extensions – 3 sets of 15 reps<br/>
              4.	&nbsp;&nbsp;&nbsp;&nbsp;Hamstring curls – 3 sets of 15 reps<br/>
              5.	&nbsp;&nbsp;&nbsp;&nbsp;Walking lunges – 4 sets of 10 reps per leg<br/>
              6.	&nbsp;&nbsp;&nbsp;&nbsp;Seated or standing calf raises – 4 sets of 20 reps per leg<br/>
              7.	&nbsp;&nbsp;&nbsp;&nbsp;10 minutes on the elliptical machine<br/>

             </p>
           </Col>
           <Col md = "5">
             <img src = {Img2} style = {{width:"100%"}}/>
           </Col>
         </Row>
         </div>
      </div>
     );
  }
}


export default List;
