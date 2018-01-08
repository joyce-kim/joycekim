import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

class Home extends Component {
	
	render() {
		return (
			<Container>
				<Row>
					<Col md={{size: 6, offset: 3}}>
						<h1>contact</h1>
					</Col>
				</Row>
				<Row>
					<Col md={{size: 6, offset: 3}}>
						<h4><a href="https://www.linkedin.com/in/joyceyhkim/" target="_blank">LinkedIn</a></h4>
						<h4><a href="mailto:joycekim@alumni.cmu.edu" target="_top">Email</a></h4>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Home;