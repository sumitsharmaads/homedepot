import React, { Component } from 'react';
const INPUT_TIMEOUT = 250;


class SearchHeader extends Component {

	constructor(props) {
      super(props);
      this.state = {
        value: '',
        predictions: [],
      };

      this.onChange = this.onChange.bind(this);
    }

    getPredictions(value) {
      // let's say that it's an API call
      return [
        'Boston',
        'Los Angeles',
        'San Diego',
        'San Franciso',
        'Sacramento',
        'New York',
        'New Jersie',
        'Chicago',
      ].filter(item => item.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

    onChange(e) {
      // clear timeout when input changes value
      clearTimeout(this.timeout);
      const value = e.target.value;
      this.setState({
        value
      });

      if (value.length > 0) {
        // make delayed api call
        this.timeout = setTimeout(() => {
          const predictions = this.getPredictions(value);
          this.setState({
            predictions
          });
        }, INPUT_TIMEOUT);
      } else {
        this.setState({
          predictions: []
        });
      }
    }

 render() {
        return ( 
          <div >
          <form className="SearchBox">
          <input type = "text" value={this.state.value} onChange = {this.onChange} className="Search-searchbar" placeholder="What can we help you find today?"/>
          <button className="Search-btn">
          	<i className="fa fa-search"></i>
          </button>
          </form>
          <div> 
            {
              this.state.predictions.map((item, index) => (
                <div key={index + item} className="Suggestions">{item}</div>
              ))
            } 
            </div> 
          </div>
        )
    }
}


export default SearchHeader;

    