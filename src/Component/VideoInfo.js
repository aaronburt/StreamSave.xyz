import React from 'react';

export default class VideoInfo extends React.Component {
    render(){
        return (
            <div className={this.props.darkMode ? 'card grey darken-3' : 'card'}>
                <div className="card-image">{this.props.header}</div>
                <div className="card-action">{this.props.actions}</div>
            </div>
        )
    }
}