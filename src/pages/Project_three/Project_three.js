import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Project_three extends Component {

	scrollTo(page) {
		console.log(page);
	    scroller.scrollTo(page, {
	      duration: 600,
	      delay: 0,
	      smooth: 'easeInOutQuart'
	    })
	}

	render() {

		return (
			<Container fluid className="fullscreen" >
				<Element name="scroll-to-projthree" className="element"></Element>
				<Row onWheel={ event => {
					if (event.nativeEvent.wheelDelta > 80) {
						console.log(event.nativeEvent.wheelDelta);
						this.scrollTo('scroll-to-projtwo');
					} else if (event.nativeEvent.wheelDelta < -80) { 
						console.log(event.nativeEvent.wheelDelta);
						this.scrollTo("scroll-to-contact"); }
					}} >
					<Col md={{size: 6, offset: 3}} className="center_div" style={{border: 'grey 3px solid'}}>
						<h2>this is project three</h2>
						<p>information about project three</p>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Project_three;