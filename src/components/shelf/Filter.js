import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { updateFilters } from '../../store/actions/filterActions';
import {callApi} from '../../store/actions/apiActions';

import Checkbox from '../Checkbox';
import PriceSlider from '../PriceSlider';

const availableSizes = [
    'XS',
    'S',
    'M',
    'ML',
    'L',
    'XL',
    'XXL',
];

const availableGenders = [
    'Male',
    'Female',
];

const availableColors = [
    'Blue',
    'Purple',
    'Green',
    'Navy',
    'Grey',
    'Black',
    'Red',
];

class Filter extends Component {

    componentWillMount() {
        this.price = 100;

        this.selectedCheckboxes = new Set();
        this.selectedGenderboxes = new Set();
        this.selectedColorboxes = new Set();

    }

    getFilterArray() {
        let array = [];

        let selectedSizes = Array.from(this.selectedCheckboxes, x => "S_" + x);
        let selectedGenders = Array.from(this.selectedGenderboxes, x => "G_" + x);
        let selectedColors = Array.from(this.selectedColorboxes, x => "C_" + x);

        array.push("P_" + this.price);

        return array.concat(selectedSizes)
        .concat(selectedGenders)
        .concat(selectedColors);
    }

    updateMaxPrice = (value) => {
        this.price = value;
        this.props.updateFilters(this.getFilterArray());
    }

    toggleCheckbox = (label) => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }

        this.props.updateFilters(this.getFilterArray());

    }

    toggleGenderbox = async (label) => {
        if (this.selectedGenderboxes.has(label)) {
            this.selectedGenderboxes.delete(label);
        } else {
            this.selectedGenderboxes.add(label);
        }

        this.props.updateFilters(this.getFilterArray());
    }

    toggleColorbox = async (label) => {
        if (this.selectedColorboxes.has(label)) {
            this.selectedColorboxes.delete(label);
        } else {
            this.selectedColorboxes.add(label);
        }

        this.props.updateFilters(this.getFilterArray());
    }


    createCheckbox = (label) => (
        <Checkbox
        classes="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
        />
    )
    createGenderbox = (label) => (
        <Checkbox
        classes="filters-available-gender"
        label={label}
        handleCheckboxChange={this.toggleGenderbox}
        key={label}
        />
    )

    createColorbox = (label) => (
        <Checkbox
        classes="filters-available-size"
        label={label}
        handleCheckboxChange={this.toggleColorbox}
        key={label}
        />
    )

    createCheckboxes = () => (
        availableSizes.map(this.createCheckbox)
    )

    createGenderboxes = () => (
        availableGenders.map(this.createGenderbox)
    )

    createColorboxes = () => (
        availableColors.map(this.createColorbox)
    )

    render() {
        //let price = this.price

        return (
            <div className="filters">
            <h4 className="title">Sizes:</h4>
            {this.createCheckboxes()}
            <h4 className="title">Genders:</h4>
            {this.createGenderboxes()}
            <h4 className="title">Colors:</h4>
            {this.createColorboxes()}
            <h4 className="title">Price:</h4>
            <PriceSlider handlePrice = {this.updateMaxPrice}/>
            </div>
        );
    }
}

Filter.propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array,
}

const mapStateToProps = state => ({
    filters: state.filters.items,
})

export default connect(mapStateToProps, { updateFilters })(Filter);
