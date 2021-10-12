import React from 'react';
import { Button } from 'react-materialize';

export default class Actions extends React.Component {

    render(){
        let actions = [];
        actions.push(
            <Button key="dark" className="link-button" flat={true} tooltip="Dark Mode" onClick={() => this.props.darkModeChoice()}>
                <i className="material-icons">{this.props.darkModeSelection ? 'dark_mode' : 'light_mode'}</i>
            </Button>
        );

        switch(this.props.type){
            case "audio":
            case "video":
                actions.push(
                    <Button key="autoPlay" className="link-button" flat={true} tooltip="Autoplay" onClick={() => this.props.autoplayChoice()}>
                        <i className="material-icons">{this.props.autoplay ? 'play_arrow' : 'play_disabled'}</i>
                    </Button>
                );

                actions.push(
                    <Button key="preLoad" className="link-button" flat={true} tooltip="Preload" onClick={() => this.props.preloadChoice()}>
                        <i className="material-icons">{this.props.preloadSelection ? 'cached' :'update_disabled' }</i>
                    </Button>
                );        
                break;

            default:
                break;
        }

        return actions;
    }
}