import React from 'react';

class ImageCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {span : 0}
		this.imageRef = React.createRef();
	}

	componentDidMount(){
		// console.log(this.imageRef);
		this.imageRef.current.addEventListener('load',this.setSpans)
		// console.log(this.imageRef.clientHeight);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const span = Math.ceil(height/10);
		this.setState({span});
	}

	render(){
		const {alt_description,urls} = this.props.image;

		return(
			<div style={{gridRowEnd : `span ${this.state.span}`}}>
				<img ref={this.imageRef} src={urls.regular} alt={alt_description}/>
			</div>
			);
	}
}

export default ImageCard;