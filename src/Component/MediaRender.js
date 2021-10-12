import React from 'react';


import Image from './RenderComponents/Image';
import Video from './RenderComponents/Video';
import VideoEmbed from './RenderComponents/VideoEmbed';
import VideoJS from './RenderComponents/VideoJS'

export default class MediaRender extends React.Component {

    /* This will stop the component from being re-rendered if the parent state changes (autoplay is the main one) */
    shouldComponentUpdate(){
        return false;
    }

    render(){
        switch(this.props.type){
            case "image":
                return <Image src={this.props.src} alt={this.props.alt}></Image>
                break;

            case "video":
                const videoJsOptions = {
                    autoplay: this.props.autoplay,
                    preload: this.props.preload ? 'auto' : 'metadata',
                    aspectRatio: '16:9',
                    controls: true,
                    sources: [{
                      src: this.props.src,
                      type: 'video/mp4'
                    }]
                  }
                  
                  return <VideoJS { ...videoJsOptions } />
                  break;

            case "hls":
                return <VideoEmbed src={this.props.embedSrc}></VideoEmbed>

            default:
                return (<div></div>)
        }
    }
}