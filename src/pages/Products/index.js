import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react';
import ProductList from './Components/ProductList';

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
            Products: products
        };
    }

    render() {
        return (
            <Container text>
                <Header as="h1" textAlign="center">
                    Products
                </Header>
                <ProductList
                    onAddToCart={function (product) {
                        this.onAddToCart(product)
                    }.bind(this)}
                    data={this.state.Products}
                />
            </Container>
        );
    }
}
export default Products;