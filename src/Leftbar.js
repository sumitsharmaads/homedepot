import React, { Component } from 'react';


class Leftbar extends Component {
  constructor() {
       super();
       this.state = {
          display: "none"
       }
    }
 
  showMenu = (event) => {
    event.preventDefault();   
    this.setState({display: "block"});
  }
  
  hideMenu = (event) => {
  	event.preventDefault();   
    this.setState({display: "none"});
  }

  render() {
    return (
      <div className="Leftbar">
        <div className="Header3__groupItem">
			<a href="//www.homedepot.com" title="The Home Depot" className="Header3__logo">
			  <img className="HomedepotImage" src = "https://corporate.homedepot.com/sites/default/files/styles/thumbnail/public/image_gallery/THD_logo.jpg" />
			</a>
        </div>
        <div className="Store">
        	<a href="#" className="MyStore__button" title="Store Finder" onClick={this.showMenu}  onDoubleClick = {this.hideMenu}>
				<span className="MyStore__icon">
					<svg width="22" height="28" viewBox="0 0 22 28" xmlns="http://www.w3.org/2000/svg">
					  	<g transform="translate(1 1)" stroke="#333" fill="none" fill-rule="evenodd">
					    	<path d="M9.985 26.348S0 15.896 0 9.346C0 2.796 4.824 0 10.36 0c5.537 0 9.85 4.868 9.6 10.287-.25 5.42-9.975 16.06-9.975 16.06z"></path>
					    	<ellipse cx="9.844" cy="9.643" rx="4.594" ry="4.5"></ellipse>
					  	</g>
					</svg>
				</span>
				<span className="MyStore__label">You're shopping <div className="MyStore__store">Guam - Tamuning</div></span>
			</a>
			<div className="store-dropdown" style={{display:this.state.display}}>
				<div className="arrow-button"></div>
				<div className="inner-store-dropdown">
					<div className="Gaum">
						<h2 className="Gaum-link">
							<a href="//www.homedepot.com/l/Guam-Tamuning/GU/Tamuning/96913/1710"> Guam - Tamuning #1710</a>
						</h2>
					</div>
					<div className="Left-storebar">
						<ul className="Left-storebar-all">
							<li className="Store-list-items">
							<span className="spanStore" style={{color:"#00873C", fontSize: "16px"}}>OPEN</span><br/>
							Until 8:00 pm
							</li>
							<li className ="Store-list-items-second">
								295 Chalan Pasaheru Route 10a<br/>
								Tamuning, GU 96913<br/>
								(671) 648-0440
							</li>
							<li className ="Store-list-items-third">
								<a href="#" className="Store-list-link">View Local Ad</a> <br/>
								<a href="#" className="Store-list-link">View Store Details</a>
							</li>
						</ul>
					</div>
					<div className="Store-bottom">
						<hr className="Horizontal-line" />
						<a href="#" className="Button-find">
							<div className="button-change-hover">
								<span className="bttn-content">Find Other Stores</span>
							</div>
						</a>
					</div>
				</div>
			</div>
        </div>
      </div>
    );
  }
}

export default Leftbar;
