import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Icon, Image, Menu, Rating} from 'semantic-ui-react'
import ButtonAddToCart from "./ButtonAddToCart";
const styles = {
    link: {
        color: '#ffffff'
    }
}

class ProductItem extends Component {
    render() {
        return (
            <Card color='blue'>
                <Image style={{width: '100%'}} src={this.props.product.image.coverImageUrl}/>
                <Card.Content>
                    <Card.Header>
                        {this.props.product.name}
                    </Card.Header>
                    <Card.Meta>
                        Price: {this.props.product.price.price}
                    </Card.Meta>
                    <Card.Meta>
                        Discount: {this.props.product.discount}%
                    </Card.Meta>

                    <Card.Description>
                        <ButtonAddToCart product={this.props.product}/>
                        <Button color='orange' animated='vertical'>
                            <Button.Content visible>
                                <Icon name='browser'/> Detail
                            </Button.Content>
                            <Button.Content hidden>
                                <Menu.Item as={Link} style={styles.link} to={"/product/" + this.props.product._id} name="home">
                                     View detail
                                </Menu.Item>
                            </Button.Content>
                        </Button>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                </Card.Content>
            </Card>
        );
    }
}

export default ProductItem;
