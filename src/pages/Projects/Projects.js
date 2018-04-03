import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import './projects.css';

class Project_two extends Component {

	render() {

		return (
			<Container fluid className="fullscreen projects_page" >
				<Row>
					<Col md={{size: 12}}>
						<h1 className='pageheading'>projects</h1>
						<h4 className='pagesubheading'>Click Links for Code</h4>
					</Col>
				</Row>
				<Row>
					<Col md={{size: 6, offset: 3}} id="wrapper">
						<div className="project">	
							<a href="https://github.com/joyce-kim/joycekim">
								<h3>Personal Portfolio</h3>
							</a>
							<p>A deployed React app that utilizes Bootstrap and Google Maps packages.</p>
						</div>
						<div className="project">	
							<a href="https://github.com/joyce-kim/which-language">
								<h3>Which Language Quiz</h3>
							</a>
							<p>A questionnaire that utilizes React routing to show what programming language you should learn.</p>
						</div>
						<div className="project">	
							<a href="https://github.com/joyce-kim/FindChildCare">
								<h3>Find Child Care</h3>
							</a>
							<p>An Express app with MySQL backend that shows you child care centers in Washington DC.</p>
						</div>
						<div className="project">	
							<a href="https://github.com/joyce-kim/Hangman-Cli">
								<h3>Command Line Hangman</h3>
							</a>
							<p>A simple command line hangman game created using Node.js and Inquirer, an interactive command line user interface.</p>
						</div>
						<div className="project">	
							<a href="https://github.com/joyce-kim/NYT_Scraper">
								<h3>Mongo Scraper</h3>
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