import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'
import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <Grid columns={3}>
                {
                    this.props.data.map((p) =>
                        <Grid.Column key={p.id}>
                            <Product onAddToCart={this.props.onAddToCart.bind(this, p)} product={p} />
                        </Grid.Column>
                    )
                }
            </Grid>
        );
    }
}

export default ProductList;
