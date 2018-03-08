import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './projectthree.css';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Project_three extends Component {

	render() {

		return (
			<Container fluid className="fullscreen" >
				<Row>
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