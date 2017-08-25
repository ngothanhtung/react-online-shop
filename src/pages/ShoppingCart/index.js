import React, {Component} from 'react';
import { Table, Button, Header } from 'semantic-ui-react';

class ShoppingCart extends Component {
    // TOTAL
    formatCurrency(number) {
        var options = { style: 'currency', currency: 'USD' };
        var numberFormat = new Intl.NumberFormat('en-US', options);

        return numberFormat.format(number);
    }

    getTotal() {
        var total = Object.keys(this.props.shoppingCartItems).reduce((previous, key) => {
            return previous + this.props.shoppingCartItems[key].price * this.props.shoppingCartItems[key].quantity;
        }, 0);

        return this.formatCurrency(total);
    }

    render() {
        return (
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Total</Table.HeaderCell>
                            <Table.HeaderCell>
                                Action
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {
                        this.props.shoppingCartItems.map((item, index) =>
                            <Table.Row key={item.id}>
                                <Table.Cell textAlign="right">{index + 1}</Table.Cell>
                                <Table.Cell textAlign="left">{item.name}</Table.Cell>
                                <Table.Cell textAlign="right">{this.formatCurrency(item.price)}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <Button onClick={this.props.onDecreaseQuantity.bind(this, item)} className="btn btn-xs btn-warning">-</Button>
                                    &nbsp;{item.quantity}&nbsp;
                                    <Button onClick={this.props.onIncreaseQuantity.bind(this, item)} className="btn btn-xs btn-warning">+</Button>
                                </Table.Cell>
                                <Table.Cell textAlign="right">{this.formatCurrency(item.price * item.quantity)}</Table.Cell>
                                <Table.Cell textAlign="right">
                                    <Button onClick={this.props.onRemoveCart.bind(this, item)} className="btn btn-xs btn-danger">Remove</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    }
                    </Table.Body>
                </Table>

                <Header>TOTAL: { this.getTotal() }</Header>
            </div>
        );
    }
}
export default ShoppingCart;
