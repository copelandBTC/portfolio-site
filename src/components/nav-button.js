import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink } from 'react-router-dom';

export default class NavButton extends React.Component {
  state = {
	buttonText : "",
	path : ""
  };

  constructor(props) {
	super();
  }

  componentDidMount() {
	// Minify the path string so it's a little cleaner-looking in the browser
	const modifiedButtonText = this.props.buttonText.split(" ").join("").toLowerCase();

	this.setState({ buttonText : this.props.buttonText });
	this.setState({ path : modifiedButtonText });
  }
  
  render() {
	  return (
		<div>
			<NavLink to={`/${this.state.path}`}>
				<button className="clickable">
					{ this.state.buttonText }
				</button>
			</NavLink>
		</div>
	  );
  }
}