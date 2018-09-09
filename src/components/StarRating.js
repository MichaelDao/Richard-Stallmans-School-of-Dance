import React, { Component } from 'react';
import {callApi} from '../store/actions/apiActions';

class StarRating extends Component {
    constructor(props, context) {
        super(props, context);
        //this.state.productId = props.productId;
        //this.state.productRating = props.productRating;

        //this.onChange = this.onChange.bind(this);

        this.state = {productId: '', productRating: ''};

    }

    componentWillMount() {
        this.setState({
            productId: this.props.productId,
            productRating: this.props.productRating
        });
    }

    changeRating(name, e) {
        let newRating = e.currentTarget.value;
        this.setState({
            productId: this.props.productId,
            productRating: newRating
        });
        const ratingUpdateData = {
            productId: this.state.productId,
            productRating: newRating
        };
        callApi('rating', ratingUpdateData, function (res) {
            console.log(JSON.stringify(res));
        });
    }

    render() {
        return (
            <span className="star-cb-group">
            <input
                type="radio"
                id={this.state.productId + "-rating-5"}
                name={this.state.productId + "-rating"}
                value="5"
                checked={this.state.productRating === '5'}
                onChange={this.changeRating.bind(this,this.state.productId + '-rating')}
            />
            <label htmlFor={this.state.productId + "-rating-5"}></label>
            <input
                type="radio"
                id={this.state.productId + "-rating-4"}
                name={this.state.productId + "-rating"}
                value="4"
                checked={this.state.productRating === '4'}
                onChange={this.changeRating.bind(this,this.state.productId + '-rating')}
            />
            <label htmlFor={this.state.productId + "-rating-4"}></label>
            <input
                type="radio"
                id={this.state.productId + "-rating-3"}
                name={this.state.productId + "-rating"}
                value="3"
                checked={this.state.productRating === '3'}
                onChange={this.changeRating.bind(this,this.state.productId + '-rating')}
            />
            <label htmlFor={this.state.productId + "-rating-3"}></label>
            <input
                type="radio"
                id={this.state.productId + "-rating-2"}
                name={this.state.productId + "-rating"}
                value="2"
                checked={this.state.productRating === '2'}
                onChange={this.changeRating.bind(this,this.state.productId + '-rating')}
            />
            <label htmlFor={this.state.productId + "-rating-2"}></label>
            <input
                type="radio" id={this.state.productId + "-rating-1"}
                name={this.state.productId + "-rating"}
                value="1"
                checked={this.state.productRating === '1'}
                onChange={this.changeRating.bind(this,this.state.productId + '-rating')}
            />
            <label htmlFor={this.state.productId + "-rating-1"}></label>
            </span>
        );
    }
}

export default StarRating;
