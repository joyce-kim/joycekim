import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './projects.css';

class Project_two extends Component {

	render() {

		return (
			<Container fluid className="fullscreen" >
				<Row>
					<Col md={{size: 6, offset: 3}} id="wrapper">
						<div className="project">	
							<a href="https://github.com/joyce-kim/joycekim">
								<h2>Personal Portfolio</h2>
							</a>
							<p>A deployed React app that utilizes Bootstrap and Google Maps packages.</p>
						</div>
						<div className="project">	
							<a href="https://github.com/joyce-kim/FindChildCare">
								<h2>Find Child Care</h2>
							</a>
							<p>An Express app with MySQL backend that shows you child care centers in Washington DC.</p>
						</div>
						<div className="project">	
							<a href="https://github.com/joyce-kim/Hangman-Cli">
								<h2>Command Line Hangman</h2>
							</a>
							<p>A simple command line hangman game created using Node.js and Inquirer, an interactive command line user interface.</p>
						</div>
						<div className="project">	
							<a href="https://github.com/joyce-kim/NYT_Scraper">
								<h2>Mongo Scraper</h2>
							</a>
							<p>A web scraper created using Express, Handlebars, Mongoose, Cheerio, and Request packages.</p>
						</div>
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Project_two;

// <img src="/assets/img_hangman.jpg" />

