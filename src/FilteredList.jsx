import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All",
            privateType: "All",
            sorted: false
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    // Filter item function
    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if (this.state.type === "All" && this.state.privateType === "All") {
        return item.name.toLowerCase().search(this.state.search) !== -1;
    }
    else if (this.state.type === "All") {
        return item.name.toLowerCase().search(this.state.search) !== -1 && item.privateType === this.state.privateType;
    } else if (this.state.privateType === "All") {
        return item.name.toLowerCase().search(this.state.search) !== -1  && item.type === this.state.type;
    }
    else {
        return item.name.toLowerCase().search(this.state.search) !== -1  && item.type === this.state.type && item.privateType === this.state.privateType;

    }
    }


    // Handles the Smart Contract Type/Feature of a coin
    onType = (event) => {
        this.setState({type: event})
    }     

    // Handles the Private/Public Transaction type of a coin
    onPrivateType = (event) => {
        this.setState({privateType: event})
    } 
    
    // Sorts by smallest price first
    onSort() {
        this.props.items.sort(function sortNumber(a, b) {
        return (1*(a.price)) - (1*(b.price));
    }); 
        this.setState({sorted: true});

    }

    // Sorts by largest marketcap 
    onMarketCapSort() {
        this.props.items.sort(function sortNumber(a, b) {
        return (1*(b.marketCapInt)) - (1*(a.marketCapInt)); // function that sorts by largest to smallest marketcap
    }); 
        this.setState({sorted: true});

    }

         
    render() {
        return (
            <div className="filter-list">
                <h1>Cryptocurrency Search</h1>

                <div id="filters">
                    {/* Creates the Smart Contract Dropdown */}
                    <DropdownButton id="typeDropdown" title={"Smart Contract Feature"} onSelect={this.onType}>

                      <MenuItem eventKey="All">All</MenuItem>
                      <MenuItem eventKey="Smart Contract">Smart Contract</MenuItem>
                      <MenuItem eventKey="Non-Smart Contact">Non-Smart Contact</MenuItem>

                    </DropdownButton>

                    {/* Creates the Public/Private Transaction Dropdown */}
                    <DropdownButton id="typeDropdown" title={"Private Transactions"} onSelect={this.onPrivateType}>

                      <MenuItem eventKey="All">All</MenuItem>
                      <MenuItem eventKey="Private">Private</MenuItem>
                      <MenuItem eventKey="Public">Public</MenuItem>


                    </DropdownButton>

                    {/* Creates the Sort by Price Button */}
                    <button id="sortButton" title={"Sort by Price"} onClick={this.onSort.bind(this)} className={"btn btn-primary"}>
                       Sort By Price
                    </button>

                    {/* Creates the Sort by Marketcap Button */}
                     <button id="sortMarketcapButton" title={"Sort by Marketcap"} onClick={this.onMarketCapSort.bind(this)} className={"btn btn-primary"}>
                       Sort By Marketcap
                    </button>

                    {/* Creates the Search bar */}
                    <input type="text" id="searchbar" placeholder="Search" onChange={this.onSearch} />

                </div>

                <div id="list-style">
                 <List items={this.props.items.filter(this.filterItem)} />
                </div>
            </div>
        );
    }
}
export default FilteredList;