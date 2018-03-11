import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import MyMap from "../../components/Map";
import Experience_panel from "../../components/Experience_panel";
import About_panel from "../../components/About_panel";
import experiences from "./experiences.json";
import './background.css';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Background extends Component {

	state = {
		experiences,
		isMarkerClicked: false
	};

	showMarkerInfo = id => {
		const filteredExp = this.state.experiences.filter(experience => experience.id == id);	
		this.setState({ filteredExp });
		this.setState({ isMarkerClicked: true });
	};

	handleBtnClick = () => {
		this.setState({ isMarkerClicked: false });
	}

	render() {

		return (
			<Container fluid id='page_background' className="fullscreen">
				<Row>
					<Col md={{size: 12}}>
						<h1 className='pageheading'>experience</h1>
						<h4 className='pagesubheading'>Click Map to Explore</h4>
					</Col>
				</Row>
				<Row>
					<Col xs={{size:10}} sm={{size:10}} md={{size: 10}} lg={{size: 5}} className="mapDiv">
						<MyMap
							showMarkerInfo={this.showMarkerInfo}
							markers={ experiences }
							center={{ lat:40.059085, lng:-77.168609 }}
							zoom={6}
							containerElement={ <div style={{height:100+"%"}} />} 
							mapElement={ <div style={{height:100+"%"}} />}  
						/>
					</Col>
					<Col xs={{size:10}} sm={{size:10}} md={{size: 10}} lg={{size: 5}} className="panelDiv">
						{this.state.isMarkerClicked ? <Experience_panel data={this.state.filteredExp[0]} onClick={this.handleBtnClick} /> : <About_panel />}
					</Col>
				</Row>
			</Container>
		);
	};
};

export default Background;
