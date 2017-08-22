import React, {Component} from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'

class Product extends Component {
    render() {
        return (
            <Card>
                <Image src='http://via.placeholder.com/260x260'/>
                <Card.Content>
                    <Card.Header>
                        {this.props.product.name}
                    </Card.Header>
                    <Card.Meta>
                        Price: {this.props.product.price}
                    </Card.Meta>

                    <Card.Description>
                        <Button onClick={this.props.onAddToCart.bind(this, this.props.product)}>
                            <span className="glyphicon glyphicon-shopping-cart"></span> Add to cart
                        </Button>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a><Icon name='user' />22 Likes</a>
                </Card.Content>
            </Card>
        );
    }

}
export default Product;
