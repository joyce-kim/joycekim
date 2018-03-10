import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import './experiencepanel.css';

const ExperiencePanel = props => (
	<Col md={{size: 12}}>
		<h2>{props.data.name}</h2>
		<h3>{props.data.title}</h3>
		<h4><strong>{props.data.subtitle}</strong></h4>
		<h4>{props.data.startDate} - {props.data.endDate}</h4>
		<h5>Experiences:</h5>
		<ul>{props.data.experiences.map( (experience) => <li>{experience}</li>) }</ul>
		<h5>Skills:</h5>
		<ul>{props.data.skills.map( (skill) => <li>{skill}</li>) }</ul>
		<Button outline color="secondary" onClick={() => props.onClick()} >Back</Button>{''}
	</Col>
);

export default ExperiencePanel;