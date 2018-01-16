import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

const ExperiencePanel = props => (
	<Col md={{size: 12}}>
		<h2>{props.data.title}</h2>
		<h4>{props.data.subtitle}</h4>
		<h3>{props.data.name}</h3>
		<h4>{props.data.startDate} - {props.data.endDate}</h4>
		<h5>Experiences:</h5>
		<ul>{props.data.experiences.map( (experience) => <li>{experience}</li>) }</ul>
		<h5>Skills:</h5>
		<ul>{props.data.skills.map( (skill) => <li>{skill}</li>) }</ul>
	</Col>
);

export default ExperiencePanel;