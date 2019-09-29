import React from 'react';

import Slider from 'react-animated-slider';
import {Button} from 'reactstrap';
import 'react-animated-slider/build/horizontal.css';
import './slider.css';

class SliderImg extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Slider className="slider-wrapper">
	     		{this.props.content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat ` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						{/* <Button>{item.button}</Button> */}
					</div>
				</div>
			))}
		</Slider>
        )
    }
}
export default SliderImg;