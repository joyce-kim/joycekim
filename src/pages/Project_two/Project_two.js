import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Project_two extends Component {

	render() {

		return (
			<Container fluid className="fullscreen" >
				<Row>
					<Col md={{size: 6, offset: 3}} className="center_div" style={{border: 'grey 3px solid'}}>
						<h2>this is project two</h2>
						<p>information about project two</p>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Project_two;