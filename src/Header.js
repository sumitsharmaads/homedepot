import React, { Component } from 'react';
import Subheader from './Subheader';
import SearchHeader from './SearchHeader';
import Leftbar from './Leftbar';


class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<div className="InsideHeader">
      		<div className ="Upperheader">
      			<Subheader/>
      		</div>
      		<div className="Search">
            <div className="SearchLeft">
              <Leftbar />
            </div>
            <div className="Searchmid">
      			  <SearchHeader />
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Header;
