import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type

        this.state = {
            search: "",
            privateType: ""
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    // Filter item function
    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Change filter check to account for type
        if (this.state.type === "All") {
        return item.name.toLowerCase().search(this.state.search) !== -1 ;
    }
    else {
        return item.name.toLowerCase().search(this.state.search) !== -1  && item.type === this.state.type;

    }
    }

    // TODO: Add an event handling method for when an item in dropdown is selected

    onType = (event) => {
        this.setState({type: event})
    //    console.log(event);
    }     
         
    render() {
        return (
            <div className="filter-list">
                <h1>Cryptocurrency Search</h1>
                {/* TODO: Add more menu items and add an onSelect function*/}

                <DropdownButton id="typeDropdown" title={"Private Transactions"} onSelect={this.onType}>

                  <MenuItem eventKey="All">All</MenuItem>
                  <MenuItem eventKey="Private">Private</MenuItem>
                  <MenuItem eventKey="Public">Public</MenuItem>


                </DropdownButton>

                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
        );
    }
}
export default FilteredList;