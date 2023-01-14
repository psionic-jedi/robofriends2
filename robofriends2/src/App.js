import React, { Component } from 'react';
import Cardlist from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
   constructor () {
    super()
    this.state = {
        robots: robots,
        searchField: '' 
    }
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}

render () {
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

   return (
        <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Cardlist robots={filteredRobots} />
        </div>
    );
    } 
}

export default App;