import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './projecttwo.css';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Project_two extends Component {

	render() {

		return (
			<Container fluid className="fullscreen" >
				<Row>
					<Col md={{size: 6, offset: 3}} className="center_div" style={{border: 'grey 3px solid'}}>
						<h2>Command Line Hangman</h2>
						<p>A simple command line hangman game created using Node.js and Inquirer, an interactive command line user interface</p>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Project_two;

// <img src="/assets/img_hangman.jpg" />