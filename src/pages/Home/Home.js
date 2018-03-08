import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './home.css';

class Home extends Component {
	
	render() {

		return (
			<Container fluid id="page_home" className="fullscreen">
				<Row>
					<Col md={{size: 6, offset: 3}} className="logoDiv">
						<h1>joyce kim</h1>
						<h4>Full-Stack Web Developer</h4>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Home;

