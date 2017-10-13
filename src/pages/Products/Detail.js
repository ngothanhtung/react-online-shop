import React, {Component} from 'react';
import {Card, Icon, Image, Segment, Grid, Header, Rating} from 'semantic-ui-react'
import ButtonAddToCart from "./Components/ButtonAddToCart";
import Loading from "../../Components/Loading";

class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Product: {},
            loading: true
        };
    }

    componentDidMount() {

        this.state.ShoppingCartItems = JSON.parse(localStorage.getItem('shopping-cart') || '[]');

        fetch('http://localhost:3000/product/' + this.props.id)
            .then(res => res.json())
            .then((data) => {
                let product = data;
                this.state.Product = product;
                this.setState({loading: false});
                this.setState(this.state);
            });
    }

    render() {
        const product = this.state.Product;
        if (this.state.loading === false) {
            return (
                <Segment style={{padding: '2em 0em', minHeight: 500}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src={product.imageUrl}/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Header as="h1">{product.name}</Header>
                                <Header as="h2">Price: {product.price}</Header>
                                <Header as="h4">Discount: {product.discount}</Header>
                                <Rating icon='star' defaultRating={5} maxRating={5}/>
                                <Header as="h4">
                                    <ButtonAddToCart product={product}/>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Segment>
            );
        } else {
            return (
                <Loading/>
            );
        }
    }
}

export default ProductDetail;
