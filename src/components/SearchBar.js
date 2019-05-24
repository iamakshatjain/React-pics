import React from 'react';

class SearchBar extends React.Component{

	state = {term:''};

	//binding is es6 syntax
	onInputChange = (event) => {
		this.setState({term:event.target.value});
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render(){
		return(
			<div className = "ui segment" style={{marginTop:"10px"}}>
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="ui field">
						<label htmlFor="image-search">Image Search</label>
						<br/>
						<input type="text" id="image-search" value={this.state.term} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
			);
	}
}

export default SearchBar;