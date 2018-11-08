import React, { Component } from 'react';
import ListItem from './ListItem';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered coin list, but this component can be used for other types of items 
  as long as it has a name.
*/

// *HTML list
class List extends Component {
    renderList() {
        /*
           Javascript map will let you iterate and modify each item in a list.
           In this example, we are changing each item
           (ex. {name: "Bitcoin", type: "Non-Smart Contract"}) into a HTML list element.
        */
        const items = this.props.items.map(item => {
          return <ListItem item={item} /> // Makes use of ListItem.jsx component
        });

        return items;
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;

