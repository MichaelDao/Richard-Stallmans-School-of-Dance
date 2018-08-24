import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class MyApp extends React.Component {


    render() {
        let env = 'sandbox';
        let currency = 'USD';
        let total = 1;


        //I made this app id for no reason (michael) APP-80W284485P519543T
        const client = {
            sandbox: 'demo_sandbox_client_id',
            production: 'YOUR-PRODUCTION-APP-ID',
        };

        return (


            <PaypalExpressBtn env={env} client={client} currency={currency} total={total}
                              style={{layout: 'vertical', size: 'medium', color: 'gold', shape: 'rect'}}
                              funding={{allowed: 'paypal.FUNDING.CARD, paypal.FUNDING.CREDIT'}}
            />
        )
            ;
    }
}