import React from 'react';
import Description from './description'; 
import Player from './player';


class Wrapper extends React.Component {

    constructor(){
        super()
        this.state = { success: false, status: false }
    }


    componentDidMount(){
            
        fetch('https://bunnyvideo-get.dsh.workers.dev/' + this.props.match.params.id)
            .then(response => { return response.json() })
            .then(data => { 
                let shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
                let timeConverted = new Date(data.dateUploaded);
                let newTimeStamp = `${timeConverted.getDate()} ${shortMonth[timeConverted.getUTCMonth()]} ${timeConverted.getFullYear()}`
                this.setState({
                    success: true,
                    video: { vId: data.guid, vTitle: data.title, vViews: data.views, vTime: newTimeStamp }
                })
            })
            .catch(err => {
                this.setState({ status: 'error loading...' })
            }) 

    }

    render(){
        if(this.state.success){
            const { vId, vTitle, vViews, vTime } = this.state.video;
            document.title = vTitle + ' -  StreamSave';
            return (
                <div id="wrapper">
                    <Player id={vId} title={vTitle} preload={false} autoplay={false} />
                    <Description title={vTitle} views={vViews} time={vTime} />
                </div>
            );
        } else {
            return(<div>{this.state.status}</div>)
        }
    }
}

export default Wrapper;