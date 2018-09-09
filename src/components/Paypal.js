import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {connect} from 'react-redux';

class Paypal extends React.Component {
    render() {
        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.cartTotals.totalPrice;

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment is all good!", payment);

            if (payment.paid === true) {
                let hackString = "Thankyou for your order, we will deliver it to:\n"
                    + payment.address.line1 + ", " + payment.address.postal_code + ", " + payment.address.city
                    + ", " + payment.address.state
                    + "\n\nYou have paid a total of $" + total
                    + "\n\nThe receipt will be emailed to " + payment.email;
                alert(hackString)

            }
        };

        // mifrent-buyer@hotmail.com is the buyer email
        const client = {
            //sandbox: 'demo_sandbox_client_id',
            sandbox: 'AXWlFaHbe4zToktKpJ7OstILl_iFNmiojkv2Nm5MolLuiQGBv-cAqXqP_0DBpH18pn_5jR7wekSBR97o',
            production: 'YOUR-PRODUCTION-APP-ID',
        };

        return (
            <div>
                <PaypalExpressBtn onSuccess={onSuccess} env={env} client={client} currency={currency} total={total}
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

