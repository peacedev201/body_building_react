import React from 'react';
import { Row, Col } from 'reactstrap';
import suppImage1 from 'assets/images/supplements/10.png';
import foodImage2 from 'assets/images/foods/11.png';
import foodImage3 from 'assets/images/foods/12.png';
import './List.css';
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {


    return (
      <div className = "food">
          <div className = "title">
          The 3 Best Supplements to Gain Muscle
          </div>
          <div className = "description">
              <p>
              If you exercise regularly, you likely want to be sure you’re getting the most out of it.One important benefit of exercise is gaining muscle and 
              strength. Having a healthy amount of muscle allows to you to perform your best during exercise and daily life.
              <br/>
              <br/>
              Three main criteria must be met for maximal muscle gain: eating more calories than you 
              burn, consuming more protein than you break down and an exercise program that is challenging 
              to your muscles (1Trusted Source, 2Trusted Source, 3Trusted Source).
              <br/>
              <br/>
              While it’s possible to meet all these criteria without taking dietary supplements, certain supplements may help you meet your goals.
              <br/>
              <br/>
              The 3 supplements listed below may help you gain more muscle with your exercise program.
              <br/>
              <br/>

              <div className = "rightImage">
              <div>
              1. Creatine
              Creatine is a molecule that’s produced naturally in your body. It provides energy for your muscles and 
              other tissues.However, taking it as a dietary supplement can increase muscle creatine content by up to
              40% beyondits normal levels (4Trusted Source, 5Trusted Source, 6Trusted Source).This affects your 
              muscle cells and exercise performance, promoting muscle gain. In fact, a large amount of research shows
              creatine improves muscle strength (7Trusted Source, 8Trusted Source, 9Trusted Source).This is good news
              if you’re trying to gain muscle. Greater strength allows you to perform better during exercise, leading to
              larger increases in muscle mass over time (10Trusted Source).
              <br/>
              </div>
              <img src = {suppImage1} />
              </div>
              Creatine can also increase water content in your muscle cells. This may cause your muscle cells to swell slightly and produce signals for
              muscle growth (11Trusted Source).
              Furthermore, this supplement may increase levels of the hormones involved in muscle growth, such as IGF-1 (12Trusted Source).Moreover,
              some research shows that creatine could decrease the breakdown of proteins in your muscles (13Trusted Source).Overall, many researchers 
              have studied creatine supplements and exercise, and one thing is clear — creatine can help increase muscle mass (14Trusted Source, 
              15Trusted Source).
              <br/>
              <br/>
              Creatine has also been studied extensively and has an outstanding safety profile (14Trusted Source). If you are looking for a supplement to
              help you gain muscle, consider creatine first.
              <br/>
              <br/>
              Shop for creatine supplements online.
              <br/>
              <br/>
              2. Protein Supplements
              Getting enough protein is critical for gaining muscle.
              <br/>
              <br/>
              Specifically, to gain muscle, you need to consume more protein than your body breaks down through natural processes (16Trusted Source).
              <br/>
              <br/>
              While it’s possible to get all the protein you need from protein-rich foods, some people struggle to do so. If this sounds like you, you may 
              want to consider 
              taking a protein supplement.
              <br/>
              <br/>
              There are many different protein supplements available, but some of the most popular are whey, casein and soy protein. Other protein 
              supplements
              contain protein isolated from eggs, beef, chicken or other sources (17Trusted Source). Research shows that adding extra protein via 
              supplements causes 
              slightly more muscle gain in people who exercise than adding extra carbs (18Trusted
              Source, 19Trusted Source, 20Trusted Source). However, the effects are probably largest for people who aren’t getting enough protein in their
              normal diet.
              In fact, some research shows that consuming very high amounts of protein supplements doesn’t help increase muscle if you are already 
              following a 
              high-protein diet (21Trusted Source, 22Trusted Source, 23Trusted Source, 24Trusted Source).
              Many people wonder how much protein to eat daily. If you are an active individual trying to gain muscle, 0.5–0.9 grams of protein per pound 
              (1.2–2.0 grams 
              per kg) of body weight may be best (25Trusted Source, 26Trusted Source, 27Trusted Source).
              <br/>
              <br/>
              Shop for protein supplements online.
              <br/>
              <br/>
              3. Weight Gainers
              Weight gainers are supplements designed to conveniently help you get more calories and protein. They’re typically used by individuals who
              struggle to gain muscle.
              <br/>
              <br/>
              Some people find it hard to gain muscle, even when consuming large amounts of calories and lifting weights (28Trusted Source). Although 
              the calorie contents of weight gainer supplements vary, it’s not uncommon for them to contain over 1,000 calories per serving.Many people 
              think these calories come from protein since it’s so important for muscle building. However, most of the calories actually come from carbs.
              There are often 75–300 grams of carbs and 20–60 grams of protein per serving of these high-calorie supplements.While these products can
              help you consume more calories, it’s important to realize that there is nothing magical about weight gainer supplements. Some research in 
              physically inactive adults has shown that drastically increasing calories can increase lean mass like muscle, as long as you eat enough 
              protein (29Trusted Source). However, research in adults who weight trained indicated that consuming a weight gainer supplement may not 
              be effective for increasing lean mass (28Trusted Source).
              <br/>
              <br/>
              Overall, weight gainers are only recommended if you are struggling to eat enough food and you find it easier to drink a weight gainer shake than eat 
              more real food.
              <br/>
              <br/>
              Shop for weight gainer supplements online.
              <br/>
              <br/>
              SUMMARY:
              Weight gainers are high-calorie products designed to help you consume more calories and protein. However, they are only recommended if you struggle
              to get enough calories from food.
              <br/>
              <br/>
            </p>
          </div>      
      </div>
    );
  }
}


export default List;
