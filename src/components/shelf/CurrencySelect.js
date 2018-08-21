import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

import {updateCurrency} from '../../store/actions/currencyActions';

import Selectbox from '../Selectbox';

const currencyList = [
    {value: 'AUD', label: '$ AUD'},
    {value: 'USD', label: '$ USD'},
    {value: 'YUAN', label: '¥ YUAN'},
]

class CurrencySelect extends Component {
    handleCurrency = (value) => {
        this.props.updateCurrency(value);
    }

    render() {
        return (
            <div className="sort">
                Currency <Selectbox options={currencyList} handleOnChange={this.handleCurrency}/>
            </div>
        );
    }
}

CurrencySelect.propTypes = {
    updateCurrency: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    updateCurrency: state.updateCurrency,
})

export default connect(mapStateToProps, {updateCurrency})(CurrencySelect);