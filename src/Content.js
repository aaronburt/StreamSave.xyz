import React from 'react';

import NavBar from './Component/NavBar';
import MediaRender from './Component/MediaRender';
import VideoInfo from './Component/VideoInfo';
import Action from './Component/Action';

import { Container, Row, Col } from 'react-materialize';
import M from 'materialize-css' 

export default class Embed extends React.Component {

    constructor(props){
        super(props)    

        let darkModeEnabled = localStorage.getItem("darkMode") === 'true' ? true : false;
        let videoPreloadEnabled = localStorage.getItem("videoPreload") === 'true' ? true : false;
        let videoAutoplayEnabled = localStorage.getItem("videoAutoplay") === 'true' ? true : false;

        this.state = { 
            id: false, 
            dbRecord: false, 
            video: { 
                autoplay: videoAutoplayEnabled, 
                preload: videoPreloadEnabled 
            }, 
            preference: { 
                darkMode: darkModeEnabled 
            } 
        }
    }

    /**
     * fetchDBRecord - fetches the db record from the api
     * @param {string} id 
     * @returns JSON
     */
    fetchDBRecord(id){
        const fetchDomain = "https://gateway.aaronburt.co.uk";
        const fetchPath = "/v3/read/media/" + id;
        return new Promise((resolve, reject) => {
            fetch(fetchDomain + fetchPath, { cache: "force-cache", method: "GET" })
                .then(response => { return response.json() })
                .then(payload => { resolve(payload); })
                .catch(error => { reject(); })
        }); 
    }

    /**
     * This will store the id and fetchDBRecord response into state
     * @returns VOID
     */
    componentDidMount(){
        return new Promise((resolve) => {
            let id = this.props.match.params.id;

            this.fetchDBRecord(id)
                .then(dbResponse => {
                    this.setState({id: id, dbRecord: dbResponse})
                })
                .catch(error => {
                    this.setState({error: '404'})
                })
        });
    }

    toastMaker(html){
        M.toast({
            html: html,
            outDuration: 1000, 
            displayLength: 2000
        });
    }

    darkModeChoice = () => {
        let toggleDarkMode = this.state.preference.darkMode ? false : true;
        this.setState({preference: { darkMode: toggleDarkMode }}, () => {            
            this.toastMaker(`Dark mode ${this.state.preference.darkMode ? 'enabled' : 'disabled'}`);
            localStorage.setItem("darkMode", this.state.preference.darkMode);
        })
    }

    preloadChoice = () => {
        let currentState = this.state.video;
        this.state.video.preload ? currentState.preload = false : currentState.preload = true;
        this.setState({ video: currentState }, () => {
            this.toastMaker(`Preload ${this.state.video.preload ? 'enable' : 'disabled'}`)
            localStorage.setItem("videoPreload", this.state.video.preload);
        })
    }

    autoplayChoice = () => {
        let currentState = this.state.video;
        this.state.video.autoplay ? currentState.autoplay = false : currentState.autoplay = true;
        this.setState({ video: currentState }, () => {
            this.toastMaker(`Autoplay ${this.state.video.autoplay ? 'enabled' : 'disabled'}`);
            localStorage.setItem("videoAutoplay", this.state.video.autoplay);
        })
    }

    /**
     * Updates the Body class to either dark and light color
     */
    backgroundThemeChanger(){
        if(this.state.preference.darkMode){
            document.body.classList.add('#424242', 'grey', 'darken-4')
        } else {
            document.body.classList.remove('#424242', 'grey', 'darken-4')
        }
    }

    /**
     * This render is responable for the entire page and combines all of the functions together
     * @returns HTML
     */
    render(){
        if(this.state.id){
            this.backgroundThemeChanger();
 
            return (
                <Container>
                    <Row>
                        <Col s={12} m={10} offset="m1">
                            <NavBar darkMode={this.state.preference.darkMode}/>

                            <VideoInfo 
                                header={
                                    <MediaRender 
                                        id={this.state.id} 
                                        src={this.state.dbRecord.media}
                                        embedSrc={this.state.dbRecord.hls ? this.state.dbRecord.hls.embed : ''}
                                        autoplay={this.state.video.autoplay}
                                        preload={this.state.video.preload}
                                        type={this.state.dbRecord.type}>    
                                    </MediaRender>
                                }
                                darkMode={this.state.preference.darkMode} 
                                id={this.state.id} 
                                dbRecord={this.state.dbRecord}
                                actions={
                                    <span>
                                        <Action 
                                            type={this.state.dbRecord.type}
                                            darkModeSelection={this.state.preference.darkMode} 
                                            darkModeChoice={this.darkModeChoice}
                                            preloadSelection={this.state.video.preload}
                                            preloadChoice={this.preloadChoice} 
                                            autoplayChoice={this.autoplayChoice}
                                            autoplay={this.state.video.autoplay}>    
                                        </Action>
                                    </span>
                                }
                            />
                        </Col>
                    </Row>
                </Container>
            )
        }

        return (<Container>{this.state.error}</Container>)
    }
}