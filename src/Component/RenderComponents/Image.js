import React from 'react';

export default class Image extends React.Component {
    
    shouldComponentUpdate(){
        return false;
    }

    render(){
        return (
            <img src={this.props.src} alt={this.props.alt}></img>
        )
    }
}