import React, { Component } from 'react';

class ListItem extends Component {
	constructor(props) {
        super(props);

        this.state = {};
    }
    render () {
    	return (
    		// Creates various HTML elements
    	<div key={this.props.item.name}>
	    	<div className="coin-border">
	        <img src={this.props.item.img}></img>
	        <li>{this.props.item.name}</li>
	        <p> Privacy Type: {this.props.item.privateType} </p>
	        <p> Contract Feature: {this.props.item.type} </p>
	        <p> Market Cap: ${this.props.item.marketCap} </p> 
	        <p> Price: ${this.props.item.price} </p>
	        </div>
        </div>
        )
    }
}

export default ListItem;
