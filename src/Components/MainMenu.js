import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Menu,
    Container,
    Segment,
    Visibility
} from 'semantic-ui-react'
import ShoppingCartModal from "./ShoppingCartModal";

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.activeItem,
            open: false
        };
    }

    onMenuItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    };

    render() {
        const {activeItem} = this.state;
        return (
            <Visibility>
                <Segment
                    inverted
                    textAlign='center'
                    style={{padding: '1em 0em'}}
                    vertical
                >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item as={Link} to="/" name="home" active={activeItem === "home"} onClick={this.onMenuItemClick}>Home</Menu.Item>
                            <Menu.Item as={Link} to="/products" name='products' active={activeItem === "products"} onClick={this.onMenuItemClick}>Products</Menu.Item>                        
                            <Menu.Item as={Link} to="/about" name="about" active={activeItem === "about"} onClick={this.onMenuItemClick}>About</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as={Link} to="/login" active={activeItem === "login"} onClick={this.onMenuItemClick} inverted>Log in</Button>
                                <Button as='a' inverted style={{marginLeft: '0.5em'}}>Sign Up</Button>
                                <ShoppingCartModal/>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>
            </Visibility>
        );
    }
}

export default MainMenu;