import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';


/*
    This list of produce that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/

// These are my list of coins. They have many characteristics such as if they have a smart contract feature, have public/private transactions, the marketcap, and price.
const coins = [
  {name: "Bitcoin", type: "Non-Smart Contact", privateType: "Public", img: "https://bitcoin.org/img/icons/opengraph.png", marketCap: "104,846,005,068", price: "6315.54", marketCapInt: "104846005068" },
  {name: "Ethereum", type: "Smart Contract", privateType: "Public", img: "https://s2.coinmarketcap.com/static/img/coins/16x16/1027.png", marketCap: "30,364,205,429", price: "317.80", marketCapInt: "30364205429"},
  {name: "Litecoin", type: "Non-Smart Contact", privateType: "Public", img: "https://s2.coinmarketcap.com/static/img/coins/16x16/2.png", marketCap: "3,378,741,479", price: "62.92", marketCapInt: "3378741479"},
  {name: "Ethereum Classic", type: "Smart Contract", privateType: "Public", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/ethereum-classic.png", marketCap: "1,796,076,553", price: "18.45", marketCapInt: "1796076553"},
  {name: "NEO", type: "Smart Contract", privateType: "Public", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/neo.png", marketCap: "1,854,651,500", price: "28.63", marketCapInt: "1854651500"},
  {name: "Monero", type: "Non-Smart Contact", privateType: "Private", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/monero.png", marketCap: "1,827,112,091", price: "119.63", marketCapInt: "1827112091"},
  {name: "Cardano", type: "Smart Contract", privateType: "Public", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/cardano.png", marketCap: "724,817,184", price: "0.027672", marketCapInt: "724817184"},
  {name: "Stratis", type: "Smart Contract", privateType: "Private", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/stratis.png", marketCap: "308,732,663", price: "3.14", marketCapInt: "308732663"},
  {name: "PIVX", type: "Non-Smart Contact", privateType: "Private", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/pivx.png", marketCap: "174,670,027", price: "3.24", marketCapInt: "174670027"},
  {name: "Dogecoin", type: "Non-Smart Contact", privateType: "Public", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/dogecoin.png", marketCap: "132,223,069", price: "0.001204", marketCapInt: "132223069"},
  {name: "DASH", type: "Non-Smart Contact", privateType: "Private", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/dash.png", marketCap: "2,619,971,377", price: "340.91", marketCapInt: "2619971377"},
  {name: "Bitquence", type: "Smart Contract", privateType: "Public", img: "http://files.coinmarketcap.com.s3-website-us-east-1.amazonaws.com/static/img/coins/200x200/bitquence.png", marketCap: "75,364,341", price: "1.04", marketCapInt: "75364341" },
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* 
                  The list of coins will be passed into the FilteredList
                  component of the items property.
                */}
                <FilteredList items={coins} />
            </div>
        );
    }
}

export default App;