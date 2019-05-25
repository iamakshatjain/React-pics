import React from 'react';

class ImageList extends React.Component{
    getImageList(){
        const Images = this.props.images.map(image => <img src={image.urls.regular} alt={image.alt_description} key={image.id}/>);
        return Images;
    }
    render(){
        console.log(this.props.images);
        return(<div>{this.getImageList()}</div>);
    }
}

export default ImageList;