import React from 'react';

export default class VideoEmbed extends React.Component {

    shouldComponentUpdate(){
        return false;
    }

    render(){
        const autoplay = "?autoplay=" + this.props.autoplay;
        const preload = "&preload=" + this.props.preload;


        console.log(this.props.src)

        return (
            <div style={{position: "relative", paddingTop: "56.25%"}}>
                <iframe title="VideoEmbed"
                    src={this.props.src}
                    loading="lazy" 
                    style={{border: "none", position: "absolute", top: "0", height: "100%", width: "100%"}}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                    allowFullScreen={true}>
                </iframe>
            </div>
        )
    }

}