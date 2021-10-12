import React from 'react';

export default class Video extends React.Component {


    render(){
        return (
            <video src={this.props.src} 
                autoPlay={this.props.autoplay} 
                width="100%" 
                height="auto" 
                controls={true}
                preload={this.props.preload ? 'auto' : 'metadata'}>
            </video>
        );
    }


}