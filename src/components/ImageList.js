import React from 'react';

import ImageCard from "./ImageCard";
import "./ImageList.css";

class ImageList extends React.Component{
    getImageList(){
        const Images = this.props.images.map(image => <ImageCard image={image} key={image.id}/>);
        return Images;
    }
    render(){
        console.log(this.props.images);
        return(<div className="image-list">{this.getImageList()}</div>);
    }
}

export default ImageList;