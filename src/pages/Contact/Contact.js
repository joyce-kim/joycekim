import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import './contact.css';

import { DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Contact extends Component {

	handleClick = event => {
		event.preventDefault();
		document.execCommand('copy');
	}

	handleCopy = event => {
		event.preventDefault();
		if (event.clipboardData) {
			event.clipboardData.setData('text/plain', 'joycekim@alumni.cmu.edu');
			alert('Copy Succcessful!');
		};

	}
	
	render() {
		return (
			<Container fluid id="page_contact" className="fullscreen" >
				<Row>
					<Col md={{size: 6, offset: 3}} className="pageheader">
						<h1>contact</h1>
					</Col>
				</Row>
				<Row>
					<Col md={{size: 6, offset: 3}}>
						<h4><a href="https://github.com/joyce-kim">Github</a></h4>
						<h4><a href="https://www.linkedin.com/in/joyceyhkim/">LinkedIn</a></h4>
						<h4><span onClick={this.handleClick} onCopy={this.handleCopy}>Email</span></h4>
						<h4><a href="/assets/joycekim_resume.pdf" download>Resume&#47;Recommendations</a></h4>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Contact;

// <h4><a href="mailto:joycekim@alumni.cmu.edu" target="_top">Email</a></h4>
