import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {connect} from 'react-redux';

class Paypal extends React.Component {
    render() {
        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.cartTotals.totalPrice;

        //I made this app id for no reason (michael) APP-80W284485P519543T
        const client = {
            sandbox: 'demo_sandbox_client_id',
            production: 'YOUR-PRODUCTION-APP-ID',
        };

        return (
            <div classname="middleAlign">
                <PaypalExpressBtn env={env} client={client} currency={currency} total={total}
                                  style={{layout: 'vertical', size: 'medium', color: 'gold', shape: 'rect'}}
                                  funding={{allowed: 'paypal.FUNDING.CARD, paypal.FUNDING.CREDIT'}}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    cartTotals: state.cartTotals.item,
});

export default connect(mapStateToProps)(Paypal);

