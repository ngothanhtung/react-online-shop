import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Menu,
    Container,
    Segment,
    Visibility
} from 'semantic-ui-react'

class MainMenu extends Component {
    render() {
        return (
            <Visibility
                onBottomPassed={this.showFixedMenu}
                onBottomVisible={this.hideFixedMenu}
                once={false}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ padding: '1em 0em' }}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item as={Link} to='/' active>Home</Menu.Item>
                            <Menu.Item as={Link} to="/products">Products</Menu.Item>
                            <Menu.Item as={Link} to="/about">About</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted>Log in</Button>
                                <Button as='a' inverted style={{marginLeft: '0.5em'}}>Sign Up</Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
            </Visibility>
        );
    }
}
export default MainMenu;