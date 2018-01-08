import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
	
	render() {
		return (
			<Container>
				<Row>
					<Col md={{size: 6, offset: 3}}>
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