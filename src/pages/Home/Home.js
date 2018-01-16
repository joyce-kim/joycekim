import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Home extends Component {

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
			<Container fluid className="fullscreen">
				<Element name="scroll-to-home" className="element"></Element>
				<Row onWheel={ event => {
					if (event.nativeEvent.wheelDelta < 80) {
						console.log(event.nativeEvent.wheelDelta);
					} else if (event.nativeEvent.wheelDelta < -80) { 
						console.log(event.nativeEvent.wheelDelta);
						this.scrollTo('scroll-to-background') 
					}
				}} >
					<Col md={{size: 6, offset: 3}} className="logoDiv">
						<h1>joyce kim</h1>
					</Col>
				</Row>
				<Row>
					<Col md={{size: 6, offset: 3}}>
						<h4>Full-Stack Web Developer</h4>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Home;

