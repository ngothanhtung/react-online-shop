import React, {Component} from 'react';
import { Header, Segment, Grid, Modal, Popup, Button, Image } from 'semantic-ui-react';
import ProductList from './Components/ProductList';
import ShoppingCart from '../ShoppingCart/index';

class Products extends Component {
    constructor(props) {
        super(props);
        // Dummy data
        var products = [];
        for (var i = 1; i <= 6; i++) {
            products.push({
                id: i,
                name: 'PRODUCT ' + i,
                price: 1000 + i * 100
            });
        }

        this.state = {
            ShoppingCartItems: [],
            Products: products,
            open: false
        };
    }

    componentDidMount() {
        this.state.ShoppingCartItems = JSON.parse(localStorage.getItem('shopping-cart') || '[]')
        this.setState(this.state);
    }

    //show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false });

    onAddToCart(product) {
        this.state.open = true;
        this.setState(this.state);

        var cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        };

        var isExist = false;
        for (var i = 0; i < this.state.ShoppingCartItems.length; i++) {
            if (this.state.ShoppingCartItems[i].id === cartItem.id) {
                this.state.ShoppingCartItems[i].quantity++;
                this.setState(this.state);
                localStorage.setItem('shopping-cart', JSON.stringify(this.state.ShoppingCartItems));
                return false;
            }
        }

        if (isExist === false) {
            this.state.ShoppingCartItems.push(cartItem);
            this.setState(this.state);
            localStorage.setItem('shopping-cart', JSON.stringify(this.state.ShoppingCartItems));
        }
    }

    onRemoveCart(item) {
        var items = this.state.ShoppingCartItems;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === item.id) {
                items.splice(i, 1);
                this.setState({ShoppingCartItems: items});
                localStorage.setItem('shopping-cart', JSON.stringify(this.state.ShoppingCartItems));
                return false;
            }
        }
    }

    onIncreaseQuantity(item) {
        var items = this.state.ShoppingCartItems;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === item.id) {
                items[i].quantity++;
                this.setState({ShoppingCartItems: items});
                localStorage.setItem('shopping-cart', JSON.stringify(this.state.ShoppingCartItems));
                return false;
            }
        }
    }

    onDecreaseQuatity(item) {
        if (item.quantity === 1) return;
        var items = this.state.ShoppingCartItems;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === item.id) {
                items[i].quantity--;
                this.setState({ShoppingCartItems: items});
                localStorage.setItem('shopping-cart', JSON.stringify(this.state.ShoppingCartItems));
                return false;
            }
        }
    }

    render() {
        //const { open, dimmer } = this.state;
        return (
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Header as='h3' style={{ fontSize: '2em' }}>Products</Header>
                            <ProductList
                                onAddToCart={function (product) {
                                    this.onAddToCart(product)
                                }.bind(this)}
                                data={this.state.Products}
                            />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
                <Modal open={this.state.open} onClose={this.close}>
                    <Modal.Header>Shopping Cart</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Header>Cart Items</Header>
                            <Grid.Row>
                                <Grid.Column>
                                    <ShoppingCart
                                        onIncreaseQuantity={function(item) {
                                            this.onIncreaseQuantity(item)
                                        }.bind(this)}

                                        onDecreaseQuantity={function(item) {
                                            this.onDecreaseQuatity(item)
                                        }.bind(this)}

                                        onRemoveCart={function(item) {
                                            this.onRemoveCart(item)
                                        }.bind(this)}

                                        shoppingCartItems = {this.state.ShoppingCartItems}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            Close
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content="Check out" onClick={this.close} />
                    </Modal.Actions>
                </Modal>
            </Segment>
        );
    }
}
export default Products;