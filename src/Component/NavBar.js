import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';

export default class NavBar extends React.Component {
    render(){
        return (
            <Navbar
            className={this.props.darkMode ? 'grey darken-3' : 'white'}
            alignLinks="right"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}>
            <NavItem href="/" className={this.props.darkMode ?  'white-text': 'black-text' }>StreamSave</NavItem>
            </Navbar>
        )
    }
}