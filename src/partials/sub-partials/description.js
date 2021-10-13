import React from 'react';

class Description extends React.Component {
    render(){
        const { title, views, time } = this.props;
        return(
            <div id="video-description">
                <div id="video-title">{title}</div>
                <div id="video-subtitle">{views} views - {time}</div>
            </div>
        );
    }
}

export default Description;