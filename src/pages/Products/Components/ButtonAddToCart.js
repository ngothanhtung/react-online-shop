import React, {Component} from 'react';
import {Button, Icon} from "semantic-ui-react";

class ButtonAddToCart extends Component {
    onAddToCart = (product) => {
        const shoppingCartItems = JSON.parse(localStorage.getItem('shopping-cart') || '[]');

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        };

        let isExist = false;
        for (let i = 0; i < shoppingCartItems.length; i++) {
            if (shoppingCartItems[i].id === cartItem.id) {
                shoppingCartItems[i].quantity++;
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartItems));
                return false;
            }
        }

        if (isExist === false) {
            shoppingCartItems.push(cartItem);
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartItems));
        }
    }

    render() {
        return(
            <Button color='green' animated='vertical' onClick={this.onAddToCart.bind(this, this.props.product)}>
                <Button.Content hidden>Add to cart</Button.Content>
                <Button.Content visible>
                    <Icon name='shop'/> Shop
                </Button.Content>
            </Button>
        );
    }
}

export default ButtonAddToCart;