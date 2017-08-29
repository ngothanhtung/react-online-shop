import React, {Component} from 'react';
import { Header, Segment, Grid, Modal, Popup, Button, Image } from 'semantic-ui-react';
import ShoppingCart from "./ShoppingCart";

class ShoppingCartModal extends Component {
    constructor (props){
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        return (
            <span>
                <Modal trigger={<Button as='a' inverted style={{marginLeft: '0.5em'}}>Cart</Button>} >
                    <Modal.Header>Shopping Cart</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Header>Cart Items</Header>
                            <Grid.Row>
                                <Grid.Column>
                                    <ShoppingCart />
                                </Grid.Column>
                            </Grid.Row>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive icon='checkmark' labelPosition='right' content="Checkout" />
                    </Modal.Actions>
                </Modal>
            </span>
        );
    }
}
export default ShoppingCartModal;