import React from 'react';

class Player extends React.Component {

    render(){
        const { title, id, autoplay, preload } = this.props;
        return(
            <div id="VideoContainer">
                <iframe 
                    loading="lazy" 
                    title={title}
                    src={"https://iframe.mediadelivery.net/embed/13819/" + id + "?autoplay=" + autoplay + "&preload=" + preload}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                    allowFullScreen={true}>
                </iframe>
            </div>
        );
    }

}

export default Player;